import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User, Mail, ArrowLeft, LogOut, Edit } from "lucide-react";
import axios from "axios";
import { BASE_URL } from "../utils/baseurl";

const EditProfileModal = ({ isOpen, onClose, user, onSave }) => {
  const [formData, setFormData] = useState({
    name: user.name || "",
    userEmail: user.userEmail || "",
    phone: user.phone || "",
    address: user.address || "",
    dob: user.dob || "",
    gender: user.gender || "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user in localStorage
    const updatedUser = { ...user, ...formData };
    localStorage.setItem("user", JSON?.stringify(updatedUser));
    onSave(updatedUser);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md p-6 space-y-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          X
        </button>
        <h2 className="text-2xl font-bold text-[#0F2642] text-center">
          Edit Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#0F2642]"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#0F2642] focus:border-[#0F2642]"
            />
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="userEmail"
              className="block text-sm font-medium text-[#0F2642]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#0F2642] focus:border-[#0F2642]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-[#0F2642]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              maxlength="10"
              pattern="[0-9]{1,10}"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#0F2642] focus:border-[#0F2642]"
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-[#0F2642]"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#0F2642] focus:border-[#0F2642]"
            ></textarea>
          </div>

          {/* Date of Birth */}
          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-[#0F2642]"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#0F2642] focus:border-[#0F2642]"
            />
          </div>

          {/* Gender */}
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-[#0F2642]"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#0F2642] focus:border-[#0F2642]"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Save Changes Button */}
          <button
            type="submit"
            className="w-full bg-[#0F2642] text-white py-2 rounded-md hover:bg-[#0F2642]/90 transition-colors"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

const UserProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const localUser = localStorage.getItem("user") || "{}";
  const [bookings, setBookings] = useState([]);
  // Check for user authentication
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/booking/userbookings`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(res);
        setBookings(res.data.bookings);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBookings();
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("storedUser", storedUser);
    // If no user is logged in, redirect to login page
    if (
      !storedUser ||
      storedUser === "{}" ||
      storedUser === "null" ||
      storedUser === "undefined"
    ) {
      navigate("/login", {
        state: { from: location },
        replace: true,
      });
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [location, navigate]);

  // If no user, return null to prevent rendering
  if (!user) return null;

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleLogout = () => {
    // Remove user from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Redirect to login page
    navigate("/login", { replace: true });
  };

  const handleProfileUpdate = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <div className="flex items-center justify-center p-4 lg:pt-28 bg-[url('https://iili.io/2tGzdep.jpg')] bg-no-repeat bg-center bg-cover">
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
                {user?.avatar || localUser?.avatar ? (
                  <img
                    src={user?.avatar || localUser.avatar}
                    alt="User Avatar"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  <User className="w-16 h-16" />
                )}
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold text-[#0F2642]">
                  {user.name || localUser.name}
                </h2>
                <p className="text-[#0F2642]/70 text-sm">Registered User</p>
              </div>
            </div>

            {/* Profile Details */}
            <div className="bg-[#0F2642]/5 rounded-lg p-4 space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-[#0F2642]/70" />
                <div>
                  {user?.email || localUser?.email ? (
                    <>
                      <p className="text-sm text-[#0F2642]/70">Email Address</p>
                      <p className="font-medium text-[#0F2642]">
                        {user.email || localUser.email}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-[#0F2642]/70">Phone Number</p>
                      <p className="font-medium text-[#0F2642]">
                        {user.phone || localUser.phone}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Edit Profile Button */}
        <button
          onClick={() => setIsEditModalOpen(true)}
          className="w-full flex items-center justify-center bg-[#0F2642] text-white py-2 rounded-md hover:bg-[#0F2642]/90 transition-colors space-x-2"
        >
          <Edit className="w-5 h-5" />
          <span>Edit Profile</span>
        </button>
        {/* Bookings Section */}
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-bold text-[#0F2642]">Your Bookings</h2>
          {bookings.length <= 0 && (
            <div className="text-center text-lg font-semibold text-[#0F2642] mt-4">
              No bookings
            </div>
          )}
          {bookings.length > 0 && (
            <div className="overflow-x-auto md:overflow-x-scroll">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-[#0F2642] text-white">
                    <th className="py-2 px-4 border">Property Name</th>
                    <th className="py-2 px-4 border">Check-in Date</th>
                    <th className="py-2 px-4 border">Check-out Date</th>
                    <th className="py-2 px-4 border">Payment Status</th>
                    <th className="py-2 px-4 border">Rooms Booked</th>
                    <th className="py-2 px-4 border">Amount Paid</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings?.map((booking) => (
                    <tr key={booking?._id} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border">
                        {booking?.property.name}
                      </td>
                      <td className="py-2 px-4 border">
                        {new Date(booking?.checkInDate).toLocaleDateString()}
                      </td>
                      <td className="py-2 px-4 border">
                        {new Date(booking?.checkOutDate).toLocaleDateString()}
                      </td>
                      <td
                        className={`py-2 px-4 border ${
                          booking?.status === "confirmed"
                            ? "text-green-950"
                            : "text-yellow-950"
                        }`}
                      >
                        {booking?.status === "confirmed"
                          ? "Confirmed"
                          : "Pending"}
                      </td>
                      <td className="py-2 px-4 border">
                        {booking?.roomBooked}
                      </td>
                      <td className="py-2 px-4 border">{booking?.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={user}
        onSave={handleProfileUpdate}
      />
    </div>
  );
};

export default UserProfile;
