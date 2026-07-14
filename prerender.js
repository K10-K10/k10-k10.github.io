import fs from 'fs';
import path from 'path';

const routes = [
  'about',
  'blog',
  'docs',
  'tools',
  'tools/rgb',
  'tools/github',
  'tools/ants'
];

const distDir = path.resolve('dist');
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

routes.forEach((route) => {
  const routeDir = path.join(distDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml);
});

console.log('✨ Prerendering folders created successfully!');
