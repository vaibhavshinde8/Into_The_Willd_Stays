import  { useState } from "react";
import axios from "axios";
import logo from "../assets/IntotheWildStaysLogo.png";


const BookingButton = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      // Step 1: Call the backend to create an order
      const response = await axios.post(
        "https://intothewilds-backend.onrender.com/api/create-order",
        {
          amount: 5000, // The amount in paise (₹50.00 = 5000 paise)
        }
      );

      const orderData = response.data; // This will contain the order id from the backend

      const options = {
        key: "rzp_test_V9EaxOrU59Dg0C", // Replace with your Razorpay Key ID
        amount: orderData.amount, // The amount in paise
        currency: "INR", // Currency
        name: "Booking Payment",
        description: "Payment for tour booking",
        image: logo, // Optional: Your company logo
        order_id: orderData.order.id, // Order ID from the backend
        handler: async (response) => {
          // Step 2: Send payment details to backend for verification
          const paymentData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          const verifyResponse = await axios.post(
            "https://intothewilds-backend.onrender.com/api/verify-payment",
            paymentData
          );
          alert("Payment Verified");
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      alert("Payment initiation failed. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      <button
        onClick={handlePayment}
        disabled={loading}
        className={`
          px-6 py-3 
          rounded-lg 
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
          ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600"
          }
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
