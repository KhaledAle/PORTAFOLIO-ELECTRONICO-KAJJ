import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

function githubPagesFallback() {
  let outputDirectory

  return {
    name: 'github-pages-fallback',
    configResolved(config) {
      outputDirectory = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      copyFileSync(resolve(outputDirectory, 'index.html'), resolve(outputDirectory, '404.html'))
    },
  }
}

export default defineConfig({
  plugins: [react(), githubPagesFallback()],
  base: '/PORTAFOLIO-ELECTRONICO-KAJJ/',
})
