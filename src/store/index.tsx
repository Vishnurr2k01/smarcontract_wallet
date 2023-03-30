import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, useGlobalState,getGlobalState} = createGlobalState({
    connectedAccount: '',
    safeAccounts : [],
    selectedSafe : '',
    balance:''
})
export {setGlobalState, useGlobalState,getGlobalState}