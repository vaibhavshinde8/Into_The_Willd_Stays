import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/baseurl";

const UserDetailsForm = ({ property, tour, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    age: "",
    specialRequirements: "",
    startDate: "",
    numberOfTourists: 1,
    touristDetails: [
      {
        name: "",
        age: "",
      },
    ],
  });

  const calculateTotalPrice = () => {
    if (property) {
      const totalDays = calculateTotalDays();
      return totalDays * property.price;
    } else if (tour) {
      return tour.price * formData.numberOfTourists;
    }
    return 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTouristDetailsChange = (index, field, value) => {
    const newTouristDetails = [...formData.touristDetails];
    newTouristDetails[index] = {
      ...newTouristDetails[index],
      [field]: value,
    };
    setFormData((prev) => ({
      ...prev,
      touristDetails: newTouristDetails,
    }));
  };

  const handleNumberOfTouristsChange = (e) => {
    const count = parseInt(e.target.value);
    setFormData((prev) => ({
      ...prev,
      numberOfTourists: count,
      touristDetails: Array(count)
        .fill(0)
        .map((_, i) => prev.touristDetails[i] || { name: "", age: "" }),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Phone validation (simple check for 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    // Validate tourist details
    if (tour) {
      const invalidTourists = formData.touristDetails.some(
        (tourist) => !tourist.name || !tourist.age
      );
      if (invalidTourists) {
        toast.error("Please fill details for all tourists");
        return;
      }
    }

    // If all validations pass, submit the form
    const submissionData = {
      ...formData,
      totalPrice: calculateTotalPrice(),
    };
    onSubmit(submissionData);
  };

  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
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
              Lead Contact Person <span className="text-red-500">*</span>
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

          {tour && (
            <>
              <div>
                <label htmlFor="startDate" className="block text-gray-700 mb-2">
                  Start Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="numberOfTourists"
                  className="block text-gray-700 mb-2"
                >
                  Number of Tourists <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="numberOfTourists"
                  name="numberOfTourists"
                  min="1"
                  value={formData.numberOfTourists}
                  onChange={handleNumberOfTouristsChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-3">Tourist Details</h3>
                {formData.touristDetails.map((tourist, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder={`Tourist ${index + 1} Name`}
                      value={tourist.name}
                      onChange={(e) =>
                        handleTouristDetailsChange(
                          index,
                          "name",
                          e.target.value
                        )
                      }
                      className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
                      required
                    />
                    <input
                      type="number"
                      placeholder="Age"
                      value={tourist.age}
                      onChange={(e) =>
                        handleTouristDetailsChange(index, "age", e.target.value)
                      }
                      className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
                      required
                    />
                  </div>
                ))}
              </div>
            </>
          )}

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
              rows="2"
              placeholder="Any special requests or requirements"
            />
          </div>

          <div className="md:col-span-2">
            <div className="text-right mb-4">
              <p className="text-xl font-bold">
                Total Amount: ₹{calculateTotalPrice()}
              </p>
              {tour && (
                <p className="text-sm text-gray-600">
                  (₹{tour.price} × {formData.numberOfTourists} tourists)
                </p>
              )}
            </div>
          </div>

          <div className="md:col-span-2 flex justify-between space-x-4">
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

const BookingButtonTours = ({ property, tour }) => {
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
    if (!token || !user) {
      setShowLoginPopup(true);
      return;
    }
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

      const totalAmount = property
        ? userDetails.totalPrice
        : tour.price * userDetails.numberOfTourists;

      const response = await axios.post(`${BASE_URL}/booking/new-booking`, {
        startDate: userDetails.startDate,
        amount: totalAmount,
        user: user._id,
        userDetails: userDetails,
        tour: tour?._id,
        property: property?._id,
        touristDetails: tour ? userDetails.touristDetails : null,
        numberOfTourists: tour ? userDetails.numberOfTourists : null,
      });

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
      description: tour ? "Tour Booking Payment" : "Property Booking Payment",
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

export default BookingButtonTours;
