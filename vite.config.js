import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static assets live in /public/assets and are referenced as /assets/… at runtime.
export default defineConfig({
  plugins: [react()],
});
