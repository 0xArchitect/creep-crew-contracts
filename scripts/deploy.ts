import { ethers } from "hardhat";

async function main() {

}

async function verify(contractAddress:string, contructorArgs:any[]) {
  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: [contructorArgs],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
