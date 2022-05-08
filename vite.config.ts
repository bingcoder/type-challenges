import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import inspect from 'vite-plugin-inspect';
import genDocTree from './vite-plugin-docs';
const { getThemeVariables } = require('antd/dist/theme');

export default defineConfig({
  plugins: [inspect(), react(), genDocTree()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: getThemeVariables({
          dark: true,
        }),
      },
    },
  },
});
