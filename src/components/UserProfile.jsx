import { useLocation } from "react-router-dom";
import { User, Mail } from "lucide-react";

const UserProfile = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  // Fallback values in case some user data is missing
  const profileData = {
    name: user?.name || "no name", // Default if name is unavailable
    email: user?.userEmail || "no.name@example.com", // Default if email is unavailable
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden border border-emerald-100">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
          <div className="flex items-center space-x-4">
            {/* Placeholder Profile Picture */}
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{profileData.name}</h2>
              <p className="text-sm text-white/80">Registered User</p>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-emerald-600" />
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium">{profileData.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
