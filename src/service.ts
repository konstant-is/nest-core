import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export abstract class Service {
  public logger: Logger;

  constructor(name: string) {
    this.logger = new Logger(name);
  }
}

@Injectable()
export abstract class Repo {
  public logger: Logger;

  constructor(name: string) {
    this.logger = new Logger(name);
  }
}
