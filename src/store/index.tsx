import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, useGlobalState,getGlobalState} = createGlobalState({
    connectedAccount: '',
    safeAccounts : ''
})
export {setGlobalState, useGlobalState,getGlobalState}