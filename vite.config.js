import restart from 'vite-plugin-restart'
import { resolve } from 'path'
import { copyFileSync, existsSync, mkdirSync, readdirSync, lstatSync } from 'fs'

// Recursive directory copying function
function copyDir(src, dest) {
  if (!existsSync(src)) return
  
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true })
  }
  
  const items = readdirSync(src)
  
  for (const item of items) {
    const srcPath = resolve(src, item)
    const destPath = resolve(dest, item)
    
    if (lstatSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      copyFileSync(srcPath, destPath)
      console.log(`Copied: ${srcPath} -> ${destPath}`)
    }
  }
}

function globalScriptsPlugin() {
  return {
    name: 'global-scripts',
    transformIndexHtml(html) {
      // Remove type="module" from global scripts that need to be in global scope
      return html
        .replace(
          /<script src="\.\.\/(assets\/bootstrap\/js\/bootstrap\.min\.js)"[^>]*><\/script>/g,
          '<script src="/$1"></script>'
        )
        .replace(
          /<script src="\.\.\/(assets\/js\/baguetteBox\.min\.js)"[^>]*><\/script>/g,
          '<script src="/$1"></script>'
        )
        .replace(
          /<script src="\.\.\/(assets\/js\/template\.js)"[^>]*><\/script>/g,
          '<script src="/$1"></script>'
        )
        .replace(
          /<script type="module" src="\.\.\/(assets\/js\/background\.js)"[^>]*><\/script>/g,
          '<script type="module" src="/$1"></script>'
        );
    }
  }
}

// Custom plugin to copy all assets and HTML files
function copyAssetsPlugin() {
  return {
    name: 'copy-assets',
    writeBundle() {
      console.log('Copying additional assets...')
      
      // Copy assets folder recursively
      if (existsSync('src/assets')) {
        console.log('Copying src/assets to ../dist/assets')
        copyDir('src/assets', '../dist/assets')
      }
      
      // Copy projects HTML files
      if (existsSync('src/projects')) {
        console.log('Copying src/projects to ../dist/projects')
        copyDir('src/projects', '../dist/projects')
      }
    }
  }
}

// Function to get all HTML files for multi-page setup
function getHtmlInputs() {
  const htmlFiles = {}
  
  // Main index.html
  htmlFiles['index'] = resolve(__dirname, 'src/index.html')
  
  // Project HTML files
  const projectsDir = resolve(__dirname, 'src/projects')
  if (existsSync(projectsDir)) {
    const projectFiles = readdirSync(projectsDir)
    projectFiles.forEach(file => {
      if (file.endsWith('.html')) {
        const name = file.replace('.html', '')
        htmlFiles[name] = resolve(projectsDir, file)
      }
    })
  }
  
  return htmlFiles
}

// Plugin to fix image href attributes to match src attributes
function fixImageLinks() {
  return {
    name: 'fix-image-links',
    transformIndexHtml(html) {
      // Simple fix: make href attributes use the same path as src attributes
      return html.replace(
        /href="\.\.\/assets\/(img\/[^"]+\.(jpg|jpeg|png|gif|webp))"/g,
        'href="assets/images/$1"'
      );
    }
  }
}

export default {
    base: './',
    root: 'src/',
    publicDir: '../static/',
    server: {
        host: true,
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
        // Multi-page application configuration
        rollupOptions: {
            input: getHtmlInputs(),
            output: {
                // Ensure assets are properly organized
                assetFileNames: (assetInfo) => {
                    const extType = assetInfo.name.split('.')[1]
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        return 'assets/images/[name]-[hash][extname]'
                    }
                    if (/css/i.test(extType)) {
                        return 'assets/css/[name]-[hash][extname]'
                    }
                    return 'assets/[name]-[hash][extname]'
                },
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
            }
        },
        assetsInclude: [
          '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', 
          '**/*.ico', '**/*.webp', '**/*.pdf', '**/*.txt', '**/*.md',
          '**/*.json', '**/*.xml', '**/*.zip', '**/*.mp4', '**/*.mp3',
          '**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf', '**/*.otf'
        ],
    },
    plugins: [
        restart({ 
            restart: [ 
                '../static/**',
                '../src/**'
            ] 
        }),
        fixImageLinks(),
        copyAssetsPlugin(),
        globalScriptsPlugin()
    ],
}