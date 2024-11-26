// api.js

export const loginUser = async (email, password) => {
  try {
    const apiUrl = "http://localhost:5000/api/v1/auth";
    console.log("Using API URL:", apiUrl);

    const response = await fetch(`${apiUrl}/login`, {
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
    const apiUrl = "http://localhost:5000/api/v1/auth";

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
