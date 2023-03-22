import React, { useEffect, useState } from "react";
import { getGlobalState, setGlobalState, useGlobalState } from "../store";
import { ethers } from "ethers";
import EthersAdapter from "@safe-global/safe-ethers-lib";
import Safe, {
  SafeAccountConfig,
  SafeFactory,
} from "@safe-global/safe-core-sdk";
import { getSafeAddress } from "../services/Blockchain.services";

function Deploy() {
  const [connectedAccount] = useGlobalState("connectedAccount");
  const [safeAccount] = useGlobalState("safeAccounts");
  const [creatingSafe, setCreatingSafe] = useState(false);

  const [accntConfig, setAccntConfig] = useState({
    owners: "",
    threshold: 1,
  });

  const handleChange = (e: any) => {
    // add values to owners array if from owners
    setAccntConfig({ ...accntConfig, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
  
    var arr = accntConfig.owners.split(",");
    //remove invalid addresses
    arr = arr.filter((item) => {  
      return ethers.utils.isAddress(item);
    });
    arr.push(connectedAccount);
    console.log(arr);

    console.log(accntConfig);
  };
  useEffect(() => {
   
    getSafeAddress()
  }, []);

  const provider = new ethers.providers.JsonRpcProvider(
    process.env.REACT_APP_INFURA_KEY
  );

  const signer = new ethers.Wallet(
    "ab772e9e6ac6f1fe78f00a53b2ea428e589813fe983577d076e0d10cdb55c127",
    provider
  );
  const ethAdapter = new EthersAdapter({ ethers, signerOrProvider: signer });

  async function handleDeploy() {

    var arr = accntConfig.owners.split(",");
    //remove invalid addresses
    arr = arr.filter((item) => {  
      return ethers.utils.isAddress(item);
    });
    arr.push(connectedAccount);
    console.log(arr);

    if (accntConfig.threshold > arr.length) {
      alert("Threshold should be less than or equal to the number of owners");
    }
  
    setCreatingSafe(true);

    const config: SafeAccountConfig = {
      owners: arr,
      threshold: accntConfig.threshold,
    };

    try {
      // Create a new instance of Safe
      const safeFactory = await SafeFactory.create({ ethAdapter });

      // Deploy a new Safe account with the specified configuration
      const safeSdk: Safe = await safeFactory.deploySafe({
        safeAccountConfig: config,
      });
      console.log(safeSdk);
    } catch (error) {
      console.error("Error creating Safe account:", error);
    } finally {
      setCreatingSafe(false);
    }
  }

  return (
    <div className="py-32 flex flex-col gap-12 items-center mx-auto w-fit justify-center">
      Account: {connectedAccount.slice(0, 8)}...
      <div className="flex mx-auto flex-col">
        { safeAccount ? '' : 
        <div className="flex flex-col gap-6 ">
          <label className="text-md" htmlFor="threshold">
            Owners
          </label>

          <input
            name="owners"
            value={accntConfig.owners}
            onChange={handleChange}
            type="text"
            placeholder='Owners seperated by ","'
            style={
              {
                // border:'1px solid black'
              }
            }
            className=" w-80 h-8 text-md p-2 shadow-xl "
          />
          <label className="text-md" htmlFor="threshold">
            Threshold <br />{" "}
            <span className="text-[10px]">
              {" "}
              Number of Owners that should sign to confirm a transaction
            </span>{" "}
          </label>
          <input
            name="threshold"
            value={accntConfig.threshold}
            onChange={handleDeploy}
            type="text"
            placeholder="Threshold"
            style={
              {
                // border:'1px solid black'
              }
            }
            className=" w-80 h-8 text-md p-2 shadow-xl "
          />
        </div>
         } 
        <button
          className="bg-blue-500 cursor-not-allowed text-white mt-6 font-bold w-fit mx-auto py-2 px-4 rounded"
          disabled={creatingSafe}
          // onClick={handleDeploy}
          onClick={handleSubmit}
        >
          {safeAccount ? (
            safeAccount.slice(0, 8)
          ) : (
            <>{creatingSafe ? "Creating..." : "Deploy Smart Wallet"}</>
          )}
        </button>
      </div>
    </div>
  );
}

export default Deploy;
