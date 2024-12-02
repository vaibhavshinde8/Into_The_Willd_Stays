import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from '../utils/baseurl';

const UserDetailsForm = ({ property, tour, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    specialRequirements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Phone validation (simple check for 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }

    // If all validations pass, submit the form
    onSubmit(formData);
  };

  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Guest Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 mb-2">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="18"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="specialRequirements" className="block text-gray-700 mb-2">
              Special Requirements
            </label>
            <textarea
              id="specialRequirements"
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
              rows="3"
              placeholder="Any special requests or requirements"
            />
          </div>

          <div className="flex justify-between space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#0F2642] text-white rounded hover:bg-blue-700"
            >
              Proceed to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const BookingButton = ({ property, tour }) => {
  const [loading, setLoading] = useState(false);
  const [showUserDetailsForm, setShowUserDetailsForm] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const loadRazorpayScript = async () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {};
    document.body.appendChild(script);
  };

  React.useEffect(() => {
    loadRazorpayScript();
  }, []);

  const handleProceed = () => {
    // Check if user is logged in
    if (!token || !user) {
      setShowLoginPopup(true);
      return;
    }

    // Open user details form
    setShowUserDetailsForm(true);
  };

  const LoginPopup = ({ onClose, onLogin }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Login Required
          </h2>
          <p className="text-center mb-6">You need to log in to proceed.</p>
          <div className="flex justify-between space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onLogin}
              className="w-full px-4 py-2 bg-[#0F2642] text-white rounded hover:bg-blue-700"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    );
  };


  const handleUserDetailsSubmit = async (userDetails) => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/booking/new-booking`, {
        checkInDate: property ? property.checkInDate : tour.checkInDate,
        checkOutDate: property ? property.checkOutDate : tour.checkOutDate,
        amount: property ? property.price : tour.price,
        user: user._id,
        userDetails: userDetails
      });
      console.log(response.data);
      initPayment(response.data.order, response.data.booking._id);
      setShowUserDetailsForm(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to create booking");
    } finally {
      setLoading(false);
    }
  };

  const initPayment = (data, bookingId) => {
    const options = {
      key: "rzp_test_S7O9aeETo3NXrl",
      amount: data.amount,
      currency: data.currency,
      order_id: data.razorpayOrderId,
      name: "Into The Wilds",
      description: "Payment for your booking",
      prefill: {
        name: user.name,
        email: user.email,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
      handler: async (response) => {
        try {
          const verifyUrl = `${BASE_URL}/booking/verify-payment`;
          const verifyData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            bookingId: bookingId,
          };
          try {
            const res = await axios.post(verifyUrl, verifyData);
            if (res.status === 200) {
              toast.success("Payment Successful");
              // Optional: Redirect to bookings or confirmation page
              navigate("/bookings");
            }
          } catch (err) {
            toast.error(err.response.data.message);
          }
        } catch (err) {
          console.log(err);
        }
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <div className="flex justify-center items-center p-4">
        <button
          onClick={handleProceed}
          disabled={loading}
          className={`
            px-6 py-3 
            text-white 
            font-semibold 
            text-lg 
            transition-all 
            duration-300 
            ease-in-out 
            shadow-lg 
            hover:shadow-xl 
            focus:outline-none 
            focus:ring-2 
            focus:ring-offset-2 
            ${loading ? "bg-[#0F2642] cursor-not-allowed" : "bg-[#0F2642]"}
          `}
        >
          {loading ? (
            <div className="flex items-center">
              <svg
                className="animate-spin h-5 w-5 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </div>
          ) : (
            "Book Now"
          )}
        </button>
      </div>

      {showLoginPopup && (
        <LoginPopup 
          onClose={() => setShowLoginPopup(false)} 
          onLogin={() => {
            setShowLoginPopup(false);
            navigate("/login");
          }} 
        />
      )}

      {showUserDetailsForm && (
        <UserDetailsForm
          property={property}
          tour={tour}
          onClose={() => setShowUserDetailsForm(false)}
          onSubmit={handleUserDetailsSubmit}
        />
      )}
    </>
  );
};

export default BookingButton;