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

// Custom plugin to copy all assets
function copyAssetsPlugin() {
  return {
    name: 'copy-assets',
    writeBundle() {
      console.log('Copying additional assets...')
      
      // Copy assets and projects folders recursively
      const foldersToCopy = ['src/assets', 'src/projects']
      
      foldersToCopy.forEach(folder => {
        if (existsSync(folder)) {
          const destFolder = folder.replace('src/', '../dist/')
          console.log(`Copying ${folder} to ${destFolder}`)
          copyDir(folder, destFolder)
        }
      })
    }
  }
}

export default {
    base: "./",
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
        // Don't try to bundle these external scripts
        rollupOptions: {
            input: resolve(__dirname, 'src/index.html'),
            // Externalize the scripts that shouldn't be bundled
            external: [
                './assets/bootstrap/js/bootstrap.min.js',
                './assets/js/baguetteBox.min.js', 
                './assets/js/template.js',
                'assets/bootstrap/js/bootstrap.min.js',
                'assets/js/baguetteBox.min.js',
                'assets/js/template.js'
            ],
        },
        // Include all asset types
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
        copyAssetsPlugin()
    ],
}