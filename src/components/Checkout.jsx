import React from "react";
import img1 from "../assets/majuli/majuli1.jpeg";

const Checkout = () => {
  return (
    <div className="pb-6 text-black pt-36 mx-56">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Review Your Booking</h1>
        <h2 className="text-xl">INFORMATION</h2>
      </div>
      <div>
        <div className="space-y-4">
          <div className="flex mt-4 gap-12 border-b-2 py-12">
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
                    06 February <br /> 2025
                  </h1>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">CHECK OUT</h3>
                  <h1 className="font-bold">
                    08 February <br /> 2025
                  </h1>
                </div>
              </div>
              <h1 className="text-xl">2 Night 1 Adult</h1>
            </div>
          </div>
          <div className="px-10 py-8 shadow-xl space-y-3">
            <h1 className="text-2xl">Guest Details</h1>
            <div>
              <form action="" method="post" className="grid grid-cols-2 gap-4">
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
      </div>
    </div>
  );
};

export default Checkout;
