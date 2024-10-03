import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CrowdfundingModule = buildModule("CrowdfundingModule", (m) => {

  const Crowdfunding = m.contract("Fundraiser");


  return { Crowdfunding };
});

export default CrowdfundingModule;


//git remote add origin https://github.com/Bukola-tech/fundraiser-contract.I'm trying I'm trying to something