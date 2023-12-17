//write script to deploy smart contract
// Path: scripts/deploy.ts

import {ethers, upgrades} from "hardhat";
import {
    CreepAditusMintingLogic,
    CreepAditusMintingLogic__factory,
    CreepCrewAditus,
    CreepCrewAditus__factory
} from "../typechain-types";
import {Contract} from "ethers";

async function main () {

    const [deployer] = await ethers.getSigners();
    const CCA: CreepCrewAditus__factory = await ethers.getContractFactory("CreepCrewAditus");
    // const cca = await CCA.attach("0xB3B4C26f741d726A8121F0bfc2bBeb9C21792a20");
    // console.log("The Aditus contract is attached to:", cca.target);
    //
    // let tx = await cca.totalSupply();
    // console.log("Deployer address: ", deployer.address);
    // console.log("total supply:", tx.toString());

    // let burn = await cca.burn(0);
    // await burn.wait();
    // console.log("burned tokenId 0");
    // console.log("total supply:", (await cca.totalSupply()).toString());
    //
    // let airdrop = await cca.airdrop([deployer.address],1);
    // await airdrop.wait();
    // console.log("airdropped tokenId 1 to deployer");
    // console.log("Owner of tokenId 1 is: ", await cca.ownerOf(1));



}

main()
