import axios from "axios"
import { signupData } from "../../../types/auth.type"

export const signupRequest = (requestData: signupData) => {
  axios.post("http://localhost:3000/api/user", requestData)
}

// export const deleteUserRequest = () => {
//   axios.delete("http://localhost:3000/api/user/clk5wfo8i0003v0fo1kftxiv4")
// }
export const deleteUserRequest = (requestData: any) => {
  axios.delete("http://localhost:3000/api/user", {data: requestData})
}

export const fetchUserList = () => {
  axios.get("http://localhost:3000/api/user")
}