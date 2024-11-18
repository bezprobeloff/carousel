import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), svgr()],
  resolve: {
    alias: {
      '~themes': path.resolve(__dirname, './src/shared/ui/themes'),
      '~shared': path.resolve(__dirname, './src/shared'),
    },
  },
});
