import { fileURLToPath } from 'url';
import path from 'path';

export function getDirname(importMetaUrl) {
  const __filename = fileURLToPath(importMetaUrl);
  return path.dirname(__filename);
}

export function getFilename(importMetaUrl) {
  return fileURLToPath(importMetaUrl);
}