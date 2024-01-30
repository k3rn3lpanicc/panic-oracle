import { ethers } from "ethers";
import { oracleABI } from "src/Constants/abi";
import { Fetcher } from "../FeedFetcher/IFetcher";
import { PriceFetcher } from "../FeedFetcher/fetcher";
import { configDotenv } from "dotenv";


class ContractInteractor{
    contractAddress = configDotenv().parsed.CONTRACT_ADDRESS as string;
    contractABI = oracleABI;
    fetcher: Fetcher = new PriceFetcher();
    provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com");
    async sendAnswer(){
        var signer = new ethers.Wallet(configDotenv().parsed.PRIVATEKEY as string, this.provider);
        const contractObject = new ethers.Contract(this.contractAddress, this.contractABI, signer);
        console.log(`[ ☕️ ] Sending new round data to contract ...`);
        const tx = await contractObject.setNewRound(Math.floor(await this.fetcher.getAnswer()));
        console.log(`[ ✅ ] Transaction submitted to contract, txHash: ${tx.hash}`);
    }
}

export {ContractInteractor}