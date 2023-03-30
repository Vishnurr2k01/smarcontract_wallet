import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, useGlobalState,getGlobalState} = createGlobalState({
    connectedAccount: '',
    safeAccounts : [],
    selectedSafe : ''
})
export {setGlobalState, useGlobalState,getGlobalState}