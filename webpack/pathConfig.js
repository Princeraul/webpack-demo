import path from 'path';

const ROOT_PATH = path.resolve(__dirname, '../');
const SRC_ROOT = path.resolve(ROOT_PATH, 'src');
const APP_ROOT = path.resolve(ROOT_PATH, 'app');
const DEV_PATH = path.resolve(APP_ROOT, 'production');
const BUILD_PATH = path.resolve(APP_ROOT, 'build');

export { ROOT_PATH, SRC_ROOT, APP_ROOT, DEV_PATH, BUILD_PATH };
