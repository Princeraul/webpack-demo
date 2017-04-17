import webpackDevConfig from './webpack/production';
import webpackRelease from './webpack/release';

export default function buildConfig(env) {
    switch (env) {
    case 'production':
        return webpackDevConfig();
    default:
        return webpackRelease();
    }
}
