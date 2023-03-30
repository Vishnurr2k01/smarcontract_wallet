import React, { useEffect, useState } from "react";
import { getGlobalState, setGlobalState, useGlobalState } from "../store";
import { ethers } from "ethers";
import EthersAdapter from "@safe-global/safe-ethers-lib";
import Safe, {
  SafeAccountConfig,
  SafeFactory,
} from "@safe-global/safe-core-sdk";
import {
  connectToMetamask,
  getSafeAddress,
} from "../services/Blockchain.services";
import { Navigate, useNavigate } from "react-router-dom";

function Deploy() {
  const navigate = useNavigate();
  const [connectedAccount] = useGlobalState("connectedAccount");
  const [safeAccount] = useGlobalState("safeAccounts");
  const [creatingSafe, setCreatingSafe] = useState(false);
//displaying the safe address


  useEffect(() => {
    if (safeAccount.length > 0) {
      // navigate('/')
    }
  }, [safeAccount]);

  const [accntConfig, setAccntConfig] = useState({
    owners: "",
    threshold: 1,
  });

  const handleChange = (e: any) => {
    // add values to owners array if from owners
    setAccntConfig({ ...accntConfig, [e.target.name]: e.target.value });
  };


  const provider = new ethers.providers.JsonRpcProvider(
    process.env.REACT_APP_INFURA_KEY
  );

  const signer = new ethers.Wallet(
  //some dummy private key
    "0x8a1820a4a146ea2f08502f46cc62f3b234d43a5beb3879432017eba49ea7f9f7",
    provider
  );
  const ethAdapter = new EthersAdapter({ ethers, signerOrProvider: signer });

  async function handleDeploy() {
    var arr = accntConfig.owners.split(",");
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
      const safeFactory = await SafeFactory.create({ ethAdapter });

      const safeSdk: Safe = await safeFactory.deploySafe({
        safeAccountConfig: config,
      });
      console.log(await safeSdk.getAddress(), "ith");
      console.log(safeSdk);
    } catch (error) {
      console.error("Error creating Safe account:", error);
    } finally {
      setCreatingSafe(false);
    }
  }

  return (
    <div className="py-32 flex flex-col gap-12 items-center mx-auto w-fit justify-center">
      {connectedAccount !== "" ? (
        <>
          <div className="flex mx-auto flex-col">
            Account: {connectedAccount.slice(0, 8)}...
            {safeAccount ? (
              ""
            ) : (
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
            )}
            <button
              className="bg-blue-500 cursor-not-allowed text-white mt-6 font-bold w-fit mx-auto py-2 px-4 rounded"
              disabled={creatingSafe}
              // onClick={handleDeploy}
              onClick={handleDeploy}
            >
              {safeAccount ? (
                getGlobalState('selectedSafe').slice(0,12)
              ) : (
                <>{creatingSafe ? "Creating..." : "Deploy Smart Wallet"}</>
              )}
            </button>
          </div>
        </>
      ) : (
        <>
          <button
            className="bg-blue-500 text-white text-2xl px-9 py-2 rounded-full"
            onClick={connectToMetamask}
          >
            Connect Wallet
          </button>
        </>
      )}
      <button
        className="bg-blue-500 cursor-not-allowed text-white mt-6 font-bold w-fit mx-auto py-2 px-4 rounded"
        disabled={creatingSafe}
        // onClick={handleDeploy}
        onClick={handleDeploy}
      >
        {/* {safeAccount ? (
            safeAccount.slice(0, 8)
          ) : ( */}
        <>{creatingSafe ? "Creating..." : "Deploy Smart Wallet"}</>
        {/* )} */}
      </button>
    </div>
  );
}

export default Deploy;
