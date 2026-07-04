import restart from 'vite-plugin-restart'
import { resolve } from 'path'
import { copyFileSync, existsSync, mkdirSync, readdirSync, lstatSync, readFileSync, writeFileSync } from 'fs'

// Remove type="module" from global scripts that need to be in global scope
// (baguetteBox.min.js is a plain UMD script that attaches itself via the
// top-level `this`, which is undefined inside a module, so it silently
// fails to define `window.baguetteBox` unless this runs).
function fixGlobalScriptTags(html) {
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

// Same fix as above, but for the raw project-page copy below: this site
// deploys to a GitHub Pages subpath (iskandarmuminov.github.io/portfolio),
// so a root-absolute "/assets/..." path 404s there. Keep the original
// relative "../assets/..." path (already correct, since it's how the
// image references in the same files resolve) and only drop type="module".
function stripModuleKeepRelative(html) {
  return html
    .replace(
      /<script src="(\.\.\/assets\/bootstrap\/js\/bootstrap\.min\.js)"[^>]*><\/script>/g,
      '<script src="$1"></script>'
    )
    .replace(
      /<script src="(\.\.\/assets\/js\/baguetteBox\.min\.js)"[^>]*><\/script>/g,
      '<script src="$1"></script>'
    )
    .replace(
      /<script src="(\.\.\/assets\/js\/template\.js)"[^>]*><\/script>/g,
      '<script src="$1"></script>'
    );
}

// Recursive directory copying function. When transformHtml is given, .html
// files are passed through it instead of being copied byte-for-byte.
function copyDir(src, dest, transformHtml) {
  if (!existsSync(src)) return

  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true })
  }

  const items = readdirSync(src)

  for (const item of items) {
    const srcPath = resolve(src, item)
    const destPath = resolve(dest, item)

    if (lstatSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath, transformHtml)
    } else if (transformHtml && item.endsWith('.html')) {
      const html = readFileSync(srcPath, 'utf-8')
      writeFileSync(destPath, transformHtml(html))
      console.log(`Copied (transformed): ${srcPath} -> ${destPath}`)
    } else {
      copyFileSync(srcPath, destPath)
      console.log(`Copied: ${srcPath} -> ${destPath}`)
    }
  }
}

function globalScriptsPlugin() {
  return {
    name: 'global-scripts',
    transformIndexHtml: fixGlobalScriptTags
  }
}

// Custom plugin to copy all assets and HTML files
function copyAssetsPlugin() {
  return {
    name: 'copy-assets',
    writeBundle() {
      console.log('Copying additional assets...')

      // Copy assets folder recursively
      const assetsSrc = resolve(__dirname, 'src/assets')
      const assetsDest = resolve(__dirname, 'dist/assets')
      if (existsSync(assetsSrc)) {
        console.log(`Copying ${assetsSrc} to ${assetsDest}`)
        copyDir(assetsSrc, assetsDest)
      }

      // Copy projects HTML files, fixing up the same global script tags
      // that transformIndexHtml applies to Vite-built pages, since this
      // raw copy overwrites whatever Vite already emitted at this path.
      const projectsSrc = resolve(__dirname, 'src/projects')
      const projectsDest = resolve(__dirname, 'dist/projects')
      if (existsSync(projectsSrc)) {
        console.log(`Copying ${projectsSrc} to ${projectsDest}`)
        copyDir(projectsSrc, projectsDest, stripModuleKeepRelative)
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