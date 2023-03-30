import { Navigate } from "react-router-dom"
import { getGlobalState } from "../store";

type ProtectedProps = {
    smartwallet: Array<string>;
    isConnected: string;
    children: React.ReactNode;
  };
const Protected:  React.FC<ProtectedProps>  = ({smartwallet,isConnected,children})=>{
    console.log(smartwallet,'asdfsdfasasdfasdf')
    if(getGlobalState('selectedSafe')!=='' ||  isConnected!==''){
        return <>
        {children}
        </>
    }else{
        return <Navigate to='/deploy'/>
    }
    return null
}
export default Protected