import { defineConfig } from 'vite';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { copyFileSync, existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    root: '.',
    base: './',
    publicDir: 'public',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                terms: resolve(__dirname, 'terms.html'),
                privacy: resolve(__dirname, 'privacy.html'),
                accessibility: resolve(__dirname, 'accessibility.html'),
            },
        },
    },
    plugins: [
        {
            name: 'copy-main-js-to-dist',
            closeBundle() {
                const distDir = join(__dirname, 'dist');
                const srcFile = join(__dirname, 'main.js');
                const destFile = join(distDir, 'main.js');
                if (existsSync(distDir) && existsSync(srcFile)) {
                    copyFileSync(srcFile, destFile);
                }
            },
        },
    ],
});
