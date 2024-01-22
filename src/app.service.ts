import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  isOK(): boolean {
    return true;
  }
}
