// api.js
import axios from "axios";
import { BASE_URL } from "./utils/baseurl";
import { toast } from "react-toastify";
export const loginUser = async (emailorphone  , password) => {
  try {
    // console.log("API");
    // console.log("Login payload:", { emailorphone, password });

    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emailorphone, password }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }
    return response.json();
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
export const registerUser = async (name, emailorphone, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, emailorphone, password }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Registration failed");
    }
    return response.json();
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const googleSignup=async(response)=>{
  try{
    const res=await axios.post(`${BASE_URL}/auth/google-signup`,response);
    // console.log(res);
    if(res.status===201||res.status===200){
      return res;
    }
  }catch(err){
    // console.log(err);
    toast.error(err.response.data.message);
    throw err;
  }
}
