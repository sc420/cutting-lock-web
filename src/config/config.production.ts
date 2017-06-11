import { Config } from './config';

export class ProductionConfig extends Config {
  public server: { host: string, protocol: string };

  constructor() {
    super();
    this.server = {
      host: 'api.cuttinglock.com',
      protocol: 'https',
    };
    this.webSocketServer = {
      host: 'api.cuttinglock.com:3002',
      protocol: 'ws',
    };
  }
};
