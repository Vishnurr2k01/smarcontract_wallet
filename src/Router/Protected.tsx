import { Navigate } from "react-router-dom"

type ProtectedProps = {
    smartwallet: string;
    isConnected: string;
    children: React.ReactNode;
  };
const Protected:  React.FC<ProtectedProps>  = ({smartwallet,isConnected,children})=>{
    if(smartwallet!=='' || isConnected!==''){
        return <>
        {children}
        </>
    }else{
        return <Navigate to='/deploy'/>
    }
    return null
}
export default Protected