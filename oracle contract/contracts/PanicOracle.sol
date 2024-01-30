// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;
import "@openzeppelin/contracts/access/Ownable.sol";

contract PanicOracle is Ownable{
    struct RoundData {
        uint256 answer;
        uint256 timestamp;
        uint256 roundNumber;
    }

    uint256 latestRound = 65304100000;
    mapping (uint256 => RoundData) private roundData;
    
    function setNewRound(uint256 answer) public onlyOwner(){
        RoundData memory data;
        data.answer = answer;
        data.roundNumber = latestRound;
        data.timestamp = block.timestamp;
        roundData[latestRound] = data;
        latestRound++;
    }
    
    function getLatestAnswer() public view returns(uint256){
        return roundData[latestRound-1].answer;
    }
    
    function getLatestRoundID() public view returns(uint256){
        return latestRound-1;
    }
    
    function getRoundData(uint256 roundId) public view returns(RoundData memory){
        return roundData[roundId];
    }
    
    function getLatestRoundData() public view returns(RoundData memory){
        return roundData[latestRound-1];
    }
}