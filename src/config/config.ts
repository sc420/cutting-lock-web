export class Config {
  public server: { host: string, protocol: string };

  constructor() {
    this.server = {
      host: '',
      protocol: '',
    };
  }

  public getServerUri(): string {
    return `${this.server.protocol}://${this.server.host}`;
  }
};
