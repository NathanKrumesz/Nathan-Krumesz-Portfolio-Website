import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'video-upload-api',
        configureServer(server) {
          server.middlewares.use('/api/upload-video', (req, res) => {
            if (req.method === 'POST') {
              const parsedUrl = new URL(req.url || '', `http://${req.headers.host}`);
              const filename = parsedUrl.searchParams.get('filename') || 'mighti-reel.mp4';
              const sanitized = filename.replace(/[^a-zA-Z0-9_.-]/g, '');
              const targetDir = path.resolve(__dirname, 'public/videos');
              if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, { recursive: true });
              }
              const targetPath = path.join(targetDir, sanitized);
              const fileStream = fs.createWriteStream(targetPath);
              req.pipe(fileStream);
              fileStream.on('finish', () => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, url: `/videos/${sanitized}` }));
              });
              fileStream.on('error', (err) => {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
              });
              return;
            }
            res.writeHead(405, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Method not allowed' }));
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
