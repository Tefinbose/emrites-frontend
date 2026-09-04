import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

export const registerApi =async(reqBody)=>{
    return await commonApi("POST",`${serverUrl}/api/auth/register`,reqBody,'')
}
export const loginApi = async(reqBody)=>{
    return await commonApi("POST",`${serverUrl}/api/auth/login`,reqBody,'')
}
export const createEnquiryApi = async(reqBody)=>{
    return await commonApi("POST",`${serverUrl}/api/enquiries`,reqBody,'')
}
export const getAllEnquires = async(reqHeader)=>{
    return await commonApi("GET",`${serverUrl}/api/enquiries`,'',reqHeader)
}
