import { Config } from './config';

export class ProductionConfig extends Config {
  public server: { host: string, protocol: string };

  constructor() {
    super();
    this.server = {
      host: 'api.cuttinglock.com',
      protocol: 'https',
    };
  }
};
