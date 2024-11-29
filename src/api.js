// api.js
export const loginUser = async (email, password) => {
  try {
    console.log("API");
    console.log("Login payload:", { email, password });

    const response = await fetch(`https://intothewilds-backend.onrender.com/api/v1/auth/login`, {
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
    const apiUrl = "https://intothewilds-backend.onrender.com/api/v1/auth";
    const response = await fetch(`${apiUrl}/register`, {
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
