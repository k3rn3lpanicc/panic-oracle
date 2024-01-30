import { fetcher } from "./IFetcher";

class RandomNumberGen implements fetcher{
    async getAnswer(): Promise<number> {
        return Math.random();    
    }
}