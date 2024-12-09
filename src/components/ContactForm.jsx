import { useState } from "react";
import { X, Send } from "lucide-react";
import emailjs from "emailjs-com";

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_8b79wnu";
    const templateID = "template_434tezq";
    const publicKey = "FU4ThIFcvqAz_SSAm";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess(true);
        setIsSubmitting(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      },
      (error) => {
        console.error("FAILED...", error);
        setIsSubmitting(false);
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-100 p-2 hover:bg-gray-200 transition"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        <div className="grid grid-cols-1 border border-black">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">
              Talk to us
            </h2>
            <form onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block uppercase text-xs font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block uppercase text-xs font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block uppercase text-xs font-bold mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block uppercase text-xs font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full border border-black py-3 uppercase text-sm font-bold hover:bg-black hover:text-white transition duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4 ml-2" />
              </button>

              {success && (
                <p className="text-center mt-4 uppercase text-xs">
                  Message sent successfully
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 