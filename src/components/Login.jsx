import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AtSign, Lock, Loader2 } from "lucide-react";
import { loginUser } from "../api";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/baseurl";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { googleSignup } from "../api";
const Login = () => {
  const [emailorphone, setEmailorphone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const data = await loginUser(emailorphone, password);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      // Show success dialog
      setIsLoading(false);
      setShowSuccessDialog(true);
      // Automatically navigate to booking page after 2 seconds
      setTimeout(() => {
        setShowSuccessDialog(false);
        navigate("/", { state: { user: data.user } });
      }, 2000);
    } catch (err) {
      setIsLoading(false);
      setError("Login failed. Please check your credentials.");
    }
  };
   
  const handleGoogleLogin = async (response) => {
      setIsLoading(true);
      const res=await googleSignup(response);
      console.log(res);
      toast.success(res.data.message);
      localStorage.setItem("token",res.data.token);
      localStorage.setItem("user",JSON.stringify(res.data.user));
      setIsLoading(false);
      setShowSuccessDialog(true);
      setTimeout(() => {
        setShowSuccessDialog(false);
        navigate("/", { state: { user: res.data.user } });
      }, 2000);
     setIsLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center px-4 py-6 relative">
      {/* Login Form */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden border border-emerald-100">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-emerald-900">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-emerald-700">
              Sign in to continue to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <AtSign className="h-5 w-5 text-teal-500" />
              </div>
              <input
                placeholder="Email address or phone number"
                value={emailorphone}
                onChange={(e) => setEmailorphone(e.target.value)}
                required
                disabled={isLoading}
                className="block w-full pl-10 pr-4 py-3 border border-emerald-300 rounded-lg shadow-sm 
                text-black disabled:opacity-50
                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 
                transition duration-300 ease-in-out"
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
                disabled={isLoading}
                className="block w-full pl-10 pr-4 py-3 border border-emerald-300 rounded-lg shadow-sm 
                text-black disabled:opacity-50
                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 
                transition duration-300 ease-in-out"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center py-3 px-4 
                border border-transparent rounded-lg shadow-sm 
                text-base font-semibold text-white 
                bg-gradient-to-r from-emerald-600 to-teal-600 
                hover:from-emerald-700 hover:to-teal-700 
                focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-teal-500 
                transition duration-300 ease-in-out transform hover:scale-105
                disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "Sign In"
                )}
              </button>
            </div>

            {/* Google Login Custom Button */}
            <div className="mt-4 flex justify-center">
              <GoogleLogin
                onSuccess={(response) => {
                  handleGoogleLogin(response);
                }}
                onError={() => {
                  console.log("Login failed");
                }}
                useOneTap
                type="standard"
                text="continue_with"
                theme="dark"
                shape='square'
              />
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
                  New to our platform?
                </span>
              </div>
            </div>

            <div className="mt-4">
              <Link
                to="/register"
                className="font-medium text-teal-600 hover:text-teal-500 
                transition duration-300 ease-in-out hover:underline"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      {showSuccessDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-emerald-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-emerald-900 mb-2">
              Login Successful!
            </h2>
            <p className="text-emerald-700 mb-4">Start Booking</p>
            <div className="w-full bg-emerald-100 h-1 rounded-full overflow-hidden">
              <div
                className="bg-emerald-500 h-full animate-countdown"
                style={{ animationDuration: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
