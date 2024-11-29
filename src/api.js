// api.js
import { BASE_URL } from "./utils/baseurl";
export const loginUser = async (email, password) => {
  try {
    console.log("API");
    console.log("Login payload:", { email, password });

    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
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
export const registerUser = async (name, email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
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
