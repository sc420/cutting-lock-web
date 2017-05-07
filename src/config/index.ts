import { DevelopmentConfig } from './config.development';
import { ProductionConfig } from './config.production';

let config;

if ('production' === ENV) {
  config = new ProductionConfig();
} else {
  config = new DevelopmentConfig();
}

export default config;
