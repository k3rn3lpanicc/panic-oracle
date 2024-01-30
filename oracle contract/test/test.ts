import { ethers } from "hardhat";
import { expect } from "chai";

describe("Panic Oracle", function(){
    async function deployContract() {
        const fee = 100;
        const [owner,firstUser,secondUser] = await ethers.getSigners();
        const Oracle = await ethers.getContractFactory("PanicOracle");
        const oracle = await Oracle.deploy();
        await oracle.waitForDeployment();
        return {oracle, owner, firstUser, secondUser};
    }

    describe("Deployment", function(){
        it("Should deploy the contract", async function(){
            const {owner, oracle} = await deployContract();
        });
        it("Should set the new round by the owner", async function(){
            const {owner, oracle} = await deployContract();
            await oracle.connect(owner).setNewRound(100);
            expect(await oracle.getLatestAnswer()).to.be.equal(100);
        });
        it("Should not be able to set new round by another person", async function(){
            const {oracle, firstUser} = await deployContract();
            await expect(oracle.connect(firstUser).setNewRound(200)).to.be.revertedWith("Ownable: caller is not the owner");
        });
        it("Should get the latest round's data", async function(){
            const {oracle, owner, firstUser} = await deployContract();
            await oracle.connect(owner).setNewRound(1000);
            const result = await oracle.connect(firstUser).getLatestRoundData();
            expect(result.answer).to.be.equal(1000);
        });
        
        it("Should get the latest round's ID", async function(){
            const {oracle, owner, firstUser} = await deployContract();
            await oracle.connect(owner).setNewRound(1000);
            const result = await oracle.connect(firstUser).getLatestRoundID();
            expect(result).to.be.equal(65304100000);
        });
    });
})