import { Mails, Navigation, PhoneCall, Send } from "lucide-react";
import TourBanner from "../components/TourBanner";

const ContactUs = () => {
  return (
    <>
    <section id="contact-us">
      <div className="contact pt-28">
        <div className="bg-[url('https://images.trvl-media.com/lodging/109000000/108380000/108370800/108370765/28b3dc50.jpg?impolicy=resizecrop&rw=1200&ra=fit')] bg-cover bg-center bg-fixed lg:py-24 py-16 flex flex-col items-center lg:gap-4 text-white">
          <h1 className="lg:text-7xl text-5xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-green-500 to-green-700 relative inline-block">
            <span className="relative font-primaryF">Contact Us</span>
          </h1>
        </div>

        <div
          id="contact-form"
          className="lg:mx-16 my-16 mx-4 flex flex-col justify-center lg:flex-row gap-8"
        >
          <div>
            <iframe
              className="w-[400px] lg:w-[600px] rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.2820180231606!2d78.23708687502547!3d30.428106300292047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908df71bc0af0cd%3A0x1ef9ca2fc507b5cc!2sInto%20The%20Wild%20Stays!5e0!3m2!1sen!2sin!4v1730969960183!5m2!1sen!2sin"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-secondry">
              Have any questions?
            </h1>
            <h2>Call us to book a meetup or send us email for services</h2>
            <form action="" className="flex flex-col gap-4 mt-4">
              <div className="flex flex-col">
                <label className="text-lg" htmlFor="name">
                  Name
                </label>
                <input
                  className="border-2 px-2 py-1 rounded-md"
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg" htmlFor="email">
                  Email
                </label>
                <input
                  className="border-2 px-2 py-1 rounded-md"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="border-2 px-2 py-1 rounded-md"
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <button className="border-2 lg:py-2 py-1 px-8 bg-gradient-to-r from-green-200 to-green-400 rounded-md lg:text-xl flex items-center justify-center gap-1">
                Send <Send />
              </button>
            </form>
          </div>
        </div>  

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-16 my-12 gap-6 mx-2 lg:px-32">
          <div className="border-2 border-green-400 cursor-pointer flex flex-col bg-gradient-to-b from-green-200 to-green-400 items-center text-center gap-6 py-12 px-4 rounded-lg shadow-lg hover:-translate-y-2 duration-300 ease-out hover:shadow-xl shadow-black">
            <span className="border-2 p-3 border-black hover:bg-secondry rounded-[50%]">
              <Navigation size={40} />
            </span>
            <h1 className="text-2xl lg:text-3xl font-bold">Location</h1>
            <p className="text-lg">
              IntoTheWildsStays, House no-4 Mussoorie Dhanaulti Road, Village
              Nali Kala Dehradun- 248001 Uttarakhand
            </p>
          </div>
          <div className="border-2 border-green-400 cursor-pointer flex flex-col bg-gradient-to-b from-green-200 to-green-400 items-center text-center gap-6 py-12 px-4 rounded-lg shadow-lg hover:-translate-y-2 duration-300 ease-out hover:shadow-xl shadow-black">
            <span className="border-2 p-3 border-black hover:bg-secondry rounded-[50%]">
              <PhoneCall size={40} />
            </span>
            <h1 className="text-2xl lg:text-3xl font-bold">Call Us Anytime</h1>
            <p className="text-lg">
              <a href="tel:9761966485">+91-9761966485</a>
              <br />
              <a href="tel:9958838557">+91-9958838557</a>
            </p>
          </div>
          <div className="border-2 border-green-400 cursor-pointer flex flex-col bg-gradient-to-b from-green-200 to-green-400 items-center text-center gap-6 py-12 px-4 rounded-lg shadow-lg hover:-translate-y-2 duration-300 ease-out hover:shadow-xl shadow-black">
            <span className="border-2 p-3 border-black hover:bg-secondry rounded-[50%]">
              <Mails size={40} />
            </span>
            <h1 className="text-2xl lg:text-3xl font-bold">Email Us</h1>
            <p className="text-lg">
              <a href="mailto:intothewilds@gmail.com">
                intothewildstays@outlook.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
        <TourBanner/>
    </section>
    </>
  );
};

export default ContactUs;
