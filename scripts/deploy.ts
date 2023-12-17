//write script to deploy smart contract
// Path: scripts/deploy.ts

import {ethers, upgrades} from "hardhat";

async function main () {
    const [deployer] = await ethers.getSigners();
    const CCA = await ethers.getContractFactory("CreepCrewGenesis");
    const os = "0x3cc6CddA760b79bAfa08dF41ECFA224f810dCeB6"
    const cca = await upgrades.deployProxy(CCA, [os], {initializer: 'initialize'});
    await cca.waitForDeployment();
    console.log("cca deployed to:", cca.target);

    let tx = await cca.addController(deployer.address);
    await tx.wait();
    console.log("controller added");

    tx = await cca.mint(deployer.address, 10);
    await tx.wait();
    console.log("minted");



}
 main()
//fda5dd9bbc3dc2d573adf6fffa118cd72db459c4091bc46e5b346246700399d4
