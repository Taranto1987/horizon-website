import fs from 'fs/promises';
import path from 'path';
export async function readJson(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  const data = await fs.readFile(fullPath, 'utf-8');
  return JSON.parse(data);
}
