import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ContractInteractor } from './Modules/ContractInterface/oracleContract';

@Injectable()
export class AppService {
  contractInteractor : ContractInteractor = new ContractInteractor();
  isOK(): boolean {
    return true;
  }
  
  @Cron(CronExpression.EVERY_10_SECONDS)
  async submitTransaction() {
    await this.contractInteractor.sendAnswer();
  }
}
