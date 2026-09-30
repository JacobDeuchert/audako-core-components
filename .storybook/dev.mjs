// `npm run storybook`: starts the dev server, over https when .env.local sets
// SB_HTTPS_CERT (and SB_HTTPS_KEY, unless the key is in the same PEM file).
//
// https is needed as soon as the system's certificate is trusted: Keycloak
// sends HSTS, which browsers then apply to every port of that host, so plain
// http://<host>:6006 stops loading. Not STORYBOOK_-prefixed on purpose,
// Storybook exposes those to the preview.
import { spawn } from 'node:child_process';

try {
  process.loadEnvFile('.env.local');
} catch {
  // No .env.local: plain http.
}

const cert = process.env.SB_HTTPS_CERT;
const key = process.env.SB_HTTPS_KEY || cert;
const https = cert ? ['--https', '--ssl-cert', cert, '--ssl-key', key] : [];

spawn('storybook', ['dev', '-p', '6006', '--host', '0.0.0.0', ...https, ...process.argv.slice(2)], {
  stdio: 'inherit',
}).on('exit', (code) => process.exit(code ?? 1));
