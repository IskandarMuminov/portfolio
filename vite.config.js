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
      // Only copy files that aren't processed by Vite (HTML, JS, CSS are handled by build)
      const shouldCopy = !item.match(/\.(js|ts|jsx|tsx|css|scss|less|styl|html|vue|svelte)$/)
      if (shouldCopy) {
        copyFileSync(srcPath, destPath)
        console.log(`Copied: ${srcPath} -> ${destPath}`)
      }
    }
  }
}

// Custom plugin to copy all non-processed files
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
      
      // Also copy any other files directly in src that aren't processed
      if (existsSync('src')) {
        const items = readdirSync('src')
        for (const item of items) {
          const srcPath = resolve('src', item)
          if (lstatSync(srcPath).isFile()) {
            const shouldCopy = !item.match(/\.(js|ts|jsx|tsx|css|scss|less|styl|html|vue|svelte)$/)
            if (shouldCopy) {
              copyFileSync(srcPath, resolve('../dist', item))
              console.log(`Copied file: ${srcPath} -> ../dist/${item}`)
            }
          }
        }
      }
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
        rollupOptions: {
            input: resolve(__dirname, 'src/index.html'),
        },
        // Include more file types in the build
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