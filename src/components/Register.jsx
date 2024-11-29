import { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";
import { User, AtSign, Lock, Key } from "lucide-react";
import { BASE_URL } from "../utils/baseurl";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(name, email, password);
      console.log("Registered successfully:", data);
      setIsModalOpen(true); // Open OTP modal
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  const handleOtpSubmit = async () => {
    console.log(email, otp);
    if (otp) {
      const data = await axios.post(`${BASE_URL}/auth/verify-email`, {email, otp });
      console.log("OTP verified:", data);
      if (data.status === 200) {
        navigate("/login");
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden border border-emerald-100">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-emerald-900">
              Create Account
            </h2>
            <p className="mt-2 text-sm text-emerald-700">
              Sign up to get started
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-teal-500" />
              </div>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full pl-10 pr-4 py-3 border border-emerald-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300 ease-in-out"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <AtSign className="h-5 w-5 text-teal-500" />
              </div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full pl-10 pr-4 py-3 border border-emerald-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300 ease-in-out"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-teal-500" />
              </div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full pl-10 pr-4 py-3 border border-emerald-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300 ease-in-out"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Create Account
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-4 text-center">
              <p className="text-red-500 text-sm bg-red-50 p-2 rounded-lg">
                {error}
              </p>
            </div>
          )}

          <div className="mt-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-emerald-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-emerald-700">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-4">
              <a
                href="/login"
                className="font-medium text-teal-600 hover:text-teal-500 
                transition duration-300 ease-in-out hover:underline"
              >
                Sign in to your account
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
              Enter OTP
            </h3>
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Key className="h-5 w-5 text-teal-500" />
              </div>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="block w-full pl-10 pr-4 py-3 border border-emerald-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300 ease-in-out"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleOtpSubmit}
                className="py-2 px-4 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition duration-300"
              >
                Confirm OTP
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="py-2 px-4 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
