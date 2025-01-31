import React from "react";
import img1 from "../assets/majuli/majuli1.jpeg";
import razorPay from "../assets/razorpay.png";
import { BadgeCheck } from "lucide-react";

const Checkout = () => {
  return (
    <div className="md:pb-6 text-black md:pt-36 md:mx-56 mx-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Review Your Booking</h1>
        <h2 className="text-xl">INFORMATION</h2>
      </div>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="space-y-4">
          <div className="flex mt-4 gap-12 border-b-2 py-12 flex-col md:flex-row">
            <div>
              <img className="h-60 rounded-xl" src={img1} alt="" />
            </div>
            <div className="space-y-3">
              <div>
                <h2>Home Stays</h2>
                <h1 className="text-3xl font-semibold">Fern Cottage</h1>
              </div>
              <h2>Mussorie</h2>
              <div className="flex gap-8">
                <div>
                  <h3 className="text-lg font-semibold">CHECK IN</h3>
                  <h1 className="font-bold">
                    06 February 2025
                  </h1>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">CHECK OUT</h3>
                  <h1 className="font-bold">
                    08 February 2025
                  </h1>
                </div>
              </div>
              <h1 className="text-xl">2 Night 1 Adult</h1>
            </div>
          </div>
          <div className="px-10 py-8 shadow-xl space-y-3">
            <h1 className="text-2xl">Guest Details</h1>
            <div>
              <form action="" method="post" className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold" htmlFor="">
                    First Name
                  </label>
                  <input
                    className="border-2 px-2 py-1"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold" htmlFor="">
                    Last Name
                  </label>
                  <input
                    className="border-2 px-2 py-1"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold" htmlFor="">
                    Mobile Number
                  </label>
                  <input
                    className="border-2 px-2 py-1"
                    type="tel"
                    name=""
                    id=""
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold" htmlFor="">
                    Email Address
                  </label>
                  <input
                    className="border-2 px-2 py-1"
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter Email"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
            <div className="p-5 shadow-xl space-y-6">
                <h1 className="text-2xl py-2 border-b-2 font-semibold">Your Reservation</h1>
                <div className="flex justify-between items-center gap-16">
                    <h1>06 February 2025</h1>
                    <p>Rs. 18000</p>
                </div>
                <div className="flex justify-between items-center gap-16">
                    <h1>07 February 2025</h1>
                    <p>Rs. 20000</p>
                </div>
                <div className="flex justify-between font-semibold items-center gap-16">
                    <h1>Subtotal</h1>
                    <p>Rs. 38000</p>
                </div>
                <div className="flex justify-between items-center gap-16">
                    <h1>Tax (18%)</h1>
                    <p>Rs. 1000</p>
                </div>
                <div className="flex justify-between font-semibold items-center gap-16 border-t-2">
                    <h1>Total</h1>
                    <p>Rs. 50000</p>
                </div>

                <div className="flex items-center gap-3 border-2 px-3 py-2">
                    <input type="checkbox" name="" id="" />
                    <img className="w-28" src={razorPay} alt="" />
                </div>
                <div>
                    <button className="px-4 py-2 rounded-lg shadow-lg font-semibold text-white bg-cyan-600 hover:bg-cyan-800">Pay and Confirm Reservaton</button>
                </div>
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold">Why SignUp or Login</h1>
                    <div className="flex items-center gap-2">
                        <BadgeCheck size={18}/>
                        <p>Get access to Secret Deals</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <BadgeCheck size={18}/>
                        <p>Manage your bookings from one place</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
