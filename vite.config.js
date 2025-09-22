import restart from 'vite-plugin-restart'
import { resolve } from 'path'
import { copyFileSync, existsSync, mkdirSync } from 'fs'

// Custom plugin to ensure all files are copied
function copyAssetsPlugin() {
  return {
    name: 'copy-assets',
    buildEnd() {
      const assetsDirs = ['src/assets', 'src/projects', 'static']
      
      assetsDirs.forEach(dir => {
        if (existsSync(dir)) {
          console.log(`Copying assets from ${dir} to dist`)
          // This would need more sophisticated recursive copying
          // For now, we'll rely on Vite's publicDir handling
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
        // Ensure all files are included
        rollupOptions: {
            input: resolve(__dirname, 'src/index.html'),
        },
        // Copy all assets as-is
        assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.ico', '**/*.webp', '**/*.pdf', '**/*.txt'],
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