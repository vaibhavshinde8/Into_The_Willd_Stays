import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/baseurl";

const UserDetailsForm = ({ property, tour, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    specialRequirements: "",
    checkInDate: "",
    checkOutDate: "",
    adults: 1,
    children: 0
  });

  const calculateTotalDays = () => {
    const checkIn = new Date(formData.checkInDate);
    const checkOut = new Date(formData.checkOutDate);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const totalDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return totalDays;
  };

  const calculateTotalPrice = () => {
    const totalDays = calculateTotalDays();
    const basePrice = property ? property.price : tour.price;
    const totalGuests = Number(formData.adults) + Number(formData.children);
    return totalDays * basePrice * totalGuests;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if ((name === 'adults' || name === 'children')) {
      const adults = name === 'adults' ? Number(value) : Number(formData.adults);
      const children = name === 'children' ? Number(value) : Number(formData.children);
      
      if (adults + children > 6) {
        toast.error("Total number of guests cannot exceed 6");
        return;
      }
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    // // Email validation
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(formData.email)) {
    //   toast.error('Please enter a valid email address');
    //   return;
    // }

    // Phone validation (simple check for 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    // Check-in and check-out date validation
    const checkIn = new Date(formData.checkInDate);
    const checkOut = new Date(formData.checkOutDate);
    if (checkOut <= checkIn) {
      toast.error("Check-out date must be after check-in date");
      return;
    }

    // If all validations pass, submit the form
    const submissionData = {
      ...formData,
      totalDays: calculateTotalDays(),
      totalPrice: calculateTotalPrice(),
    };
    onSubmit(submissionData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
          Guest Details
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="md:col-span-2">
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

          {/* <div className="mb-4">
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
          </div> */}

          <div>
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

          <div>
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

          <div>
            <label htmlFor="adults" className="block text-gray-700 mb-2">
              Number of Adults <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              min="1"
              max="6"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
              required
            />
          </div>

          <div>
            <label htmlFor="children" className="block text-gray-700 mb-2">
              Number of Children
            </label>
            <input
              type="number"
              id="children"
              name="children"
              value={formData.children}
              onChange={handleChange}
              min="0"
              max="5"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="specialRequirements"
              className="block text-gray-700 mb-2"
            >
              Special Requirements
            </label>
            <textarea
              id="specialRequirements"
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
              rows="1"
              placeholder="Any special requests or requirements"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="checkInDate" className="block text-gray-700 mb-2">
              Check-in Date
            </label>
            <input
              type="date"
              id="checkInDate"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="checkOutDate" className="block text-gray-700 mb-2">
              Check-out Date
            </label>
            <input
              type="date"
              id="checkOutDate"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
              required
            />
          </div>

          <div className="flex justify-between space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-1/2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-1/2 px-4 py-2 bg-[#0F2642] text-white rounded hover:bg-blue-700"
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
  // console.log(property);
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
      // Calculate number of days between check-in and check-out
      const checkIn = new Date(userDetails.checkInDate);
      const checkOut = new Date(userDetails.checkOutDate);
      const numberOfDays = Math.ceil(
        (checkOut - checkIn) / (1000 * 60 * 60 * 24)
      );

      // Calculate total amount based on number of days and guests
      const basePrice = property ? property.price : tour.price;
      const totalGuests = Number(userDetails.adults) + Number(userDetails.children);
      const guestCapacity=property?.guestCapacity;
      const roomBooked=Math.ceil(totalGuests/guestCapacity);
      const totalAmount = basePrice * roomBooked*numberOfDays * 0.2;

      const response = await axios.post(`${BASE_URL}/booking/new-booking`, {
        checkInDate: userDetails.checkInDate,
        checkOutDate: userDetails.checkOutDate,
        amount: totalAmount,
        adults: userDetails.adults,
        children: userDetails.children,
        user: user._id,
        userDetails: userDetails,
        property: property ? property._id : null,
        tour: tour ? 'Tour' : null
      });

      // console.log(response.data);
      initPayment(response.data.order, response.data.booking._id);
      setShowUserDetailsForm(false);
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message);
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
              window.location.reload();
            }
          } catch (err) {
            toast.error(err.response.data.message);
          }
        } catch (err) {
          // console.log(err);
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
