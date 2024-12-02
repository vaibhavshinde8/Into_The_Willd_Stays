import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/baseurl";

const LoginPopup = ({ onClose, onLogin }) => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    onClose(); // Close the popup
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4 text-center">Login Required</h2>
        <p className="text-gray-600 mb-6 text-center">
          Please log in to proceed with your booking.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleLoginRedirect}
            className="px-4 py-2 bg-[#0F2642] text-white rounded hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const BookingButton = ({ property, tour }) => {
  const [loading, setLoading] = useState(false);
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

  const handleProceed = async () => {
    // Check if user is logged in
    if (!token || !user) {
      setShowLoginPopup(true);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/booking/new-booking`, {
        checkInDate: property ? property.checkInDate : tour.checkInDate,
        checkOutDate: property ? property.checkOutDate : tour.checkOutDate,
        amount: property ? property.price : tour.price,
        user: user._id,
      });
      console.log(response.data);
      initPayment(response.data.order, response.data.booking._id);
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
          console.log(response);
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
              console.log("Payment Successful");
              toast.success("Payment Successful");
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
        <LoginPopup onClose={() => setShowLoginPopup(false)} />
      )}
    </>
  );
};

export default BookingButton;
