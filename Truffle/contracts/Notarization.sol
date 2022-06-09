// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.0;

contract Notarization  {

    mapping(string => uint256) private hashRegistry;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function register(string memory hash) public {
        require(owner == msg.sender, "Only the owner can register documents.");
        hashRegistry[hash] = block.timestamp;
    }

    function getHashEvidence(string memory hash) public view returns (uint256){
        return (hashRegistry[hash]);
    }

    function setOwner(address newOwner) external {
        require(owner == msg.sender, "Only the current owner can set a new owner.");
        owner = newOwner;
    }

}
