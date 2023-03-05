import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin} from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import topLevelAwait from 'vite-plugin-top-level-await';
import wasm from 'vite-plugin-wasm';
import viteCompression from 'vite-plugin-compression';
import purgecss from '@fullhuman/postcss-purgecss';

import { getFileList } from './tools/get_file_list';

import {visualizer} from 'rollup-plugin-visualizer';

const publicDir = path.resolve(__dirname, './public');
const getPublicFileList = async (targetPath: string) => {
  const filePaths = await getFileList(targetPath);
  const publicFiles = filePaths
    .map((filePath) => path.relative(publicDir, filePath))
    .map((filePath) => path.join('/', filePath));

  return publicFiles;
};

export default defineConfig(async () => {

  return {
    build: {
      assetsInlineLimit: 20480,
      cssCodeSplit: true,
      cssTarget: 'es6',
      minify: true,
      rollupOptions: {
        output: {
          experimentalMinChunkSize: 40960,
        },
        plugins: [
          visualizer(),

        ],
      },
      target: 'chrome110',
    },
    plugins: [
      react(),
      wasm(),
      topLevelAwait(),
      ViteEjsPlugin({
        module: '/src/client/index.tsx',
        title: '買えるオーガニック',
        // videos,
      }),
      splitVendorChunkPlugin(),
      viteCompression(),
    ],
    css: {
      postcss: {
        plugins: [
          purgecss({
            content: ["dist/*.html", "dist/assets/*.js"],
            css: ["dist/assets/*.css"],
          }),
        ],
      },
    },
  };
});
