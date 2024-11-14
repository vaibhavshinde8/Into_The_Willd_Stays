// api.js


// Function to handle login
export const loginUser = async (email, password) => {
  try {
    const apiUrl = process.env.REACT_APP_API_URL; // Accessing env variable

    // Debugging log
    // console.log("API URL in React:", process.env.REACT_APP_API_URL);
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

// Function to handle user registration
export const registerUser = async (name, email, password) => {
  try {
    const apiUrl = process.env.REACT_APP_API_URL; // Accessing env variable
    console.log("Using API URL:", apiUrl); // Log the URL for debugging

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
