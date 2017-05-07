import { Config } from './config';

export class DevelopmentConfig extends Config {
  public server: { host: string, protocol: string };

  constructor() {
    super();
    this.server = {
      host: 'localhost:3001',
      protocol: 'https',
    };
  }
};
