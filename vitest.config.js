import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.spec.ts', 'src/**/*.e2e-spec.ts'],
    setupFiles: [],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@tasks': path.resolve(__dirname, './src/tasks'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },
});
