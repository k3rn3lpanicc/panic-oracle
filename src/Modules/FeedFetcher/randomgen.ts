import { Fetcher } from "./IFetcher";

class RandomNumberGen implements Fetcher{
    async getAnswer(): Promise<number> {
        return Math.random();    
    }
}