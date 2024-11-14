// api.js

export const loginUser = async (email, password) => {
  try {
    const apiUrl = "http://localhost:8080/api/auth";
    console.log("Using API URL:", apiUrl);

    const response = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    return response.json();
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const registerUser = async (name, email, password) => {
  try {
    const apiUrl = "http://localhost:8080/api/auth";

    const response = await fetch(`${apiUrl}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    return response.json();
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};
