import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Опционально: укажите корневую папку с HTML (если она не в корне)
  root: './',
  build: {
    // Куда складывать собранные файлы (по умолчанию — 'dist')
    outDir: 'dist',
  }
});
