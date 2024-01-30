import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PriceFetcher } from './Modules/FeedFetcher/fetcher';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  isOk(): boolean {
    return this.appService.isOK();
  }

  @Get('answer')
  async getAnswer(){
    let fetcher = new PriceFetcher();
    return { "answer":  await fetcher.getAnswer()};
  }
}
