import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

export const registerApi =async(reqBody)=>{
    return await commonApi("POST",`${serverUrl}/api/auth/register`,reqBody,'')
}
export const loginApi = async(reqBody)=>{
    return await commonApi("POST",`${serverUrl}/api/auth/login`,reqBody,'')
}
