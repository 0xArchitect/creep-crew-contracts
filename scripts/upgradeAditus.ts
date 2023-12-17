//write script to deploy smart contract
// Path: scripts/deploy.ts

import {ethers, upgrades} from "hardhat";
import {
    CreepAditusMintingLogic,
    CreepAditusMintingLogic__factory,
    CreepCrewAditus,
    CreepCrewAditus__factory
} from "../typechain-types";
import {Time} from "@openzeppelin/test-helpers";
import {Contract} from "ethers";

async function main () {
    // const CCA: CreepCrewAditus__factory = await ethers.getContractFactory("CreepCrewAditus");
    // const cca: Contract = await upgrades.upgradeProxy("0xB3B4C26f741d726A8121F0bfc2bBeb9C21792a20", CCA);
    // await cca.waitForDeployment();
    // console.log("cca deployed to:", cca.target);

    const MintingLogic:CreepAditusMintingLogic__factory = await ethers.getContractFactory("CreepAditusMintingLogic");
    const logic: Contract = await upgrades.deployProxy(MintingLogic, ["0xB3B4C26f741d726A8121F0bfc2bBeb9C21792a20"], {initializer: 'initialize'});
    // const logic: Contract = await upgrades.upgradeProxy("0xB58FA1a090A8698104B6199ead57d6F71b426a19",MintingLogic);
    await logic.waitForDeployment();
    console.log("logic deployed to:", logic.target);

    let tx = await logic.setDesignatedSigner("0xb9e94C0ad36A326fe537A6f78AeFC0D084Af453d");
    await tx.wait();
    console.log("signer set");

    let tx2 = await logic.setMintStartTime(1697391752);
    await tx2.wait();
    console.log("start time set");

    let tx3 = await logic.setPublicAllocation(777-77-17);
    await tx3.wait();
    console.log("end time set");


    let setup = await cca.setMintingLogic(logic.target, true);
    await setup.wait();
    console.log("setup done");
}

main()
//fda5dd9bbc3dc2d573adf6fffa118cd72db459c4091bc46e5b346246700399d4
