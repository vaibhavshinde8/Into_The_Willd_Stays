import { Mails, Navigation, PhoneCall, Send } from "lucide-react";
import TourBanner from "../components/TourBanner";

const ContactUs = () => {
  return (
    <>
      <section id="contact-us">
        {/* Hero Section */}
        <div className="bg-[url('https://images.trvl-media.com/lodging/109000000/108380000/108370800/108370765/28b3dc50.jpg?impolicy=resizecrop&rw=1200&ra=fit')] bg-cover bg-center bg-fixed lg:py-24 py-16 flex flex-col items-center lg:gap-4 text-white">
          <h1 className="lg:text-7xl text-5xl font-primaryF relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-green-500 to-green-700">
            <span className="relative">Contact Us</span>
          </h1>
        </div>

        {/* Contact Form */}
        <div
          id="contact-form"
          className="lg:mx-16 my-16 mx-4 flex flex-col justify-center lg:flex-row gap-8"
        >
          {/* Google Map */}
          <div className="flex justify-center items-center">
            <iframe
              className="w-full lg:w-[600px] h-[450px] rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.2820180231606!2d78.23708687502547!3d30.428106300292047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908df71bc0af0cd%3A0x1ef9ca2fc507b5cc!2sInto%20The%20Wild%20Stays!5e0!3m2!1sen!2sin!4v1730969960183!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-2xl font-bold text-secondry">
              Have any questions?
            </h1>
            <h2 className="text-lg text-center lg:text-left mt-2">
              Call us to book a meetup or send us an email for services.
            </h2>
            <form className="flex flex-col gap-4 mt-6 w-full lg:w-[450px]">
              <div className="flex flex-col">
                <label className="text-lg font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  className="border-2 px-4 py-2 rounded-md"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  className="border-2 px-4 py-2 rounded-md"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="border-2 px-4 py-2 rounded-md"
                  name="message"
                  id="message"
                  rows="5"
                ></textarea>
              </div>
              <button className="bg-gradient-to-r from-green-200 to-green-400 border-2 lg:py-2 py-1 px-8 rounded-md text-xl text-white flex items-center justify-center gap-2 hover:shadow-xl transition-all ease-in-out">
                Send <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-4 lg:mx-16">
          {/* Location Card */}
          <div className="bg-gradient-to-b from-green-200 to-green-400 p-6 rounded-lg shadow-lg  ">
            <div className="flex items-center justify-center bg-white rounded-full p-3 mb-4 shadow-md ">
              <Navigation size={40} />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-2">
              Location
            </h2>
            <p className="text-lg text-center">
              IntoTheWildsStays, House no-4 Mussoorie Dhanaulti Road, Village
              Nali Kala, Dehradun-248001 Uttarakhand
            </p>
          </div>

          {/* Call Us Card */}
          <div className="bg-gradient-to-b from-green-200 to-green-400 p-6 rounded-lg shadow-lg  ">
            <div className="flex items-center justify-center bg-white rounded-full p-3 mb-4 shadow-md ">
              <PhoneCall size={40} />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-2">
              Call Us Anytime
            </h2>
            <p className="text-lg text-center">
              <a href="tel:+919761966485">+91-9761966485</a>
              <br />
              <a href="tel:+919958838557">+91-9958838557</a>
            </p>
          </div>

          {/* Email Us Card */}
          <div className="bg-gradient-to-b from-green-200 to-green-400 p-6 rounded-lg shadow-lg  ">
            <div className="flex items-center justify-center bg-white rounded-full p-3 mb-4 shadow-md ">
              <Mails size={40} />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-2">
              Email Us
            </h2>
            <p className="text-lg text-center">
              <a href="mailto:intothewilds@gmail.com">
                intothewildstays@outlook.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Tour Banner Section */}
      <section>
        <TourBanner />
      </section>
    </>
  );
};

export default ContactUs;
