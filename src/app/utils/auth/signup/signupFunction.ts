import axios from "axios"
import { signupData } from "../../../types/auth.type"

export const signupRequest = (requestData: signupData) => {
  axios.post("http://localhost:3000/api/user", requestData)
}