/** Prepend BASE_URL to any internal page path */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : '/' + path;
  return `${base}${clean}`;
}

/** Prepend BASE_URL to any asset/image path. Strips /public/ prefix if present. */
export function img(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let clean = path.startsWith('/') ? path.slice(1) : path;
  if (clean.startsWith('public/')) clean = clean.slice(7);
  return `${base}/${clean}`;
}
