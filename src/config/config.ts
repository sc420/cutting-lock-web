export class Config {
  public server: { host: string, protocol: string };
  public webSocketServer: { host: string, protocol: string };

  constructor() {
    this.server = {
      host: '',
      protocol: '',
    };
    this.webSocketServer = {
      host: '',
      protocol: '',
    };
  }

  public getServerUri(): string {
    return `${this.server.protocol}://${this.server.host}`;
  }

  public getWebSocketUri(): string {
    return `${this.webSocketServer.protocol}://${this.webSocketServer.host}`;
  }
};
