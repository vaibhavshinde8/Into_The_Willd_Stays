import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User, Mail, ArrowLeft, LogOut } from "lucide-react";

const UserProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check for user authentication
  useEffect(() => {
    const user = localStorage.getItem("user");

    // If no user is logged in, redirect to login page
    if (!user) {
      navigate("/login", {
        state: { from: location },
        replace: true,
      });
    }
  }, [location, navigate]);

  // If no user, return null to prevent rendering
  const user = JSON.parse(localStorage.getItem("user") || "null");
  if (!user) return null;

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleLogout = () => {
    // Remove user from localStorage
    localStorage.removeItem("user");

    // Redirect to login page
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-[#0F2642]/10">
          {/* Navigation Header */}
          <div className="bg-[#0F2642] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={handleGoBack}
                className="p-2 hover:bg-[#0F2642]/90 rounded-full transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <h1 className="text-lg font-semibold text-white ml-4">Profile</h1>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-[#0F2642]/90 rounded-full transition-colors"
              title="Logout"
            >
              <LogOut className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Profile Content */}
          <div className="p-6 space-y-6">
            {/* Profile Header */}
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-[#0F2642]/10 text-[#0F2642] rounded-full w-24 h-24 flex items-center justify-center">
                <User className="w-16 h-16" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-[#0F2642]">
                  {user.name}
                </h2>
                <p className="text-[#0F2642]/70 text-sm">Registered User</p>
              </div>
            </div>

            {/* Profile Details */}
            <div className="bg-[#0F2642]/5 rounded-lg p-4 space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-[#0F2642]/70" />
                <div>
                  <p className="text-sm text-[#0F2642]/70">Email Address</p>
                  <p className="font-medium text-[#0F2642]">{user.userEmail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
