import React, { useState} from "react";
import axios from "axios";
import { BASE_URL } from "../utils/baseurl";
import { toast } from "react-toastify";

// import logo from "../assets/IntotheWildStaysLogo.png";
const BookingButton = ({ property, tour }) => {
  console.log(property);
  console.log(tour);
  const [loading, setLoading] = useState(false);
  console.log(loading, "loading");
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
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
  );
};

export default BookingButton;
