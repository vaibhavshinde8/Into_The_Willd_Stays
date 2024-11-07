import { Mails, Navigation, PhoneCall } from "lucide-react";
import React from "react";

const ContactUs = () => {
  return (
    <section id="contact-us">
      <div className="contact pt-28">
        <div className="bg-[url('https://sundaysforever.com/static/media/Barlowscottageimg14.9e6859ced0b73fc2614d.jpg')] bg-cover bg-center bg-fixed lg:py-24 py-16 flex flex-col items-center lg:gap-4 text-white">
          <h1 className="text-6xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-400 relative inline-block">
            <span className="relative">Contact Us</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-16 my-12 gap-6 mx-2">
            <div className="border-2 border-green-400 cursor-pointer flex flex-col bg-gradient-to-b from-green-200 to-green-400 items-center text-center gap-6 py-12 px-4 rounded-lg shadow-lg hover:-translate-y-2 duration-300 ease-out hover:shadow-xl shadow-black">
                <span className="border-2 p-3 border-black hover:bg-secondry rounded-[50%]"><Navigation size={40}/></span>
                <h1 className="text-2xl lg:text-3xl font-bold">Location</h1>
                <p className="text-lg">IntoTheWildsStays, House no-4 Mussoorie Dhanaulti Road, Village Nali Kala Dehradun- 248001 Uttarakhand</p>
            </div>
            <div className="border-2 border-green-400 cursor-pointer flex flex-col bg-gradient-to-b from-green-200 to-green-400 items-center text-center gap-6 py-12 px-4 rounded-lg shadow-lg hover:-translate-y-2 duration-300 ease-out hover:shadow-xl shadow-black">
                <span className="border-2 p-3 border-black hover:bg-secondry rounded-[50%]"><PhoneCall size={40}/></span>
                <h1 className="text-2xl lg:text-3xl font-bold">Call Us Anytime</h1>
                <p className="text-lg"><a href="tel:7089249053">+91-7089249053</a></p>
            </div>
            <div className="border-2 border-green-400 cursor-pointer flex flex-col bg-gradient-to-b from-green-200 to-green-400 items-center text-center gap-6 py-12 px-4 rounded-lg shadow-lg hover:-translate-y-2 duration-300 ease-out hover:shadow-xl shadow-black">
                <span className="border-2 p-3 border-black hover:bg-secondry rounded-[50%]"><Mails size={40}/></span>
                <h1 className="text-2xl lg:text-3xl font-bold">Email Us</h1>
                <p className="text-lg"><a href="mailto:intothewilds@gmail.com">intothewildstays@outlook.com</a></p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
