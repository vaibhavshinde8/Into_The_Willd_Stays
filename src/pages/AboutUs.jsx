import Image1 from "../assets/homehero.png"

const AboutUs = () => {
  return (
    <div className="min-h-[100vh] pt-32">
      {/* Hero Section with Background Image */}
      <div className="bg-[url('https://images.trvl-media.com/lodging/109000000/108380000/108370800/108370765/28b3dc50.jpg?impolicy=resizecrop&rw=1200&ra=fit')] bg-cover bg-center bg-fixed lg:py-24 py-16 flex flex-col items-center lg:gap-4 text-white">
        <h1 className="lg:text-7xl text-5xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#091F3C] relative inline-block">
          <span className="relative font-primaryF">About Us</span>
        </h1>
      </div>
      {/* Content Section */}
      <div className="bg-white min-h-[100vh] py-4 lg:px-32">
        <div className="my-12 mx-4">
          <div className="flex flex-col-reverse lg:flex-row gap-8 justify-around items-center text-center">
            {/* Text Section */}
            <div className="flex flex-col rounded-lg gap-6 p-8 bg-gradient-to-r from-[#091F3C] to-[#43A181] shadow-xl lg:w-[550px] lg:h-[420px] text-white">
              <h1 className="text-4xl font-bold tracking-tight">
                Our <span className="text-[#43A181]">Story</span>
              </h1>
              <h4 className="lg:text-lg text-gray-100 leading-relaxed">
                At Into The Wilds Stays, we believe that every getaway is an
                opportunity to create lasting memories. Our journey began with a
                passion for providing uniquely luxurious experiences that make
                every guest feel at home, away from home.
              </h4>
            </div>

            {/* image Section */}
            <div className="shadow-2xl overflow-hidden rounded-lg">
              <img
                src={Image1}
                alt="Founder"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="text-center py-8 ">
        <h2 className="text-teal-300 text-lg font-semibold tracking-wide uppercase">
          Why Our Homestay?
        </h2>
        <h1 className="text-3xl font-bold my-4 ">Why Choose Us</h1>
        <div className="flex flex-wrap justify-around gap-6 mt-6">
          {[
            {
              title: "Live Amidst Nature",
              description:
                "Experience nature in its fullest glory to refresh yourself.",
              icon: (
                <svg
                  className="w-10 h-10 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
                </svg>
              ),
            },
            {
              title: "Heritage Homestay",
              description:
                "Experience the charm of Kerala heritage preserved through the ages.",
              icon: (
                <svg
                  className="w-10 h-10 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 12h4v8h8v-8h4L12 2z" />
                </svg>
              ),
            },
            {
              title: "Family Friendly",
              description:
                "The calm and comfortable environment will make your family feel at home.",
              icon: (
                <svg
                  className="w-10 h-10 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                </svg>
              ),
            },
          ].map((reason, index) => (
            <div
              key={index}
              className="max-w-xs p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-teal-200">
                {reason.title}
              </h3>
              <p className="text-gray-300 mt-2">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Founder Section */}
      <div className="flex flex-col md:flex-row items-center bg-[#111111] p-8 shadow-2xl mt-8">
        {/* Image Section */}
        <div className="w-full md:w-[40vw] h-full overflow-hidden mb-4 md:mb-0 md:mr-8 shadow-lg p-4 md:p-8">
          <img
            src={Image1}
            alt="Founder"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[60vw] text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-teal-300 mb-4 md:mb-2">
            Meet Our Founder
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
            Priyanka has held multiple leadership roles: CEO Forbes India,
            President Marketing at Network18, Chief Revenue & Marketing Officer
            for the NDTV Group. Priyanka’s strength comes from over 22 years of
            marketing and leadership experience.
          </p>
          <p className="text-gray-300 mb-4 text-sm md:text-base">
            Educated at Welham Girls' School, she completed Advanced Management
            at Harvard Business School.
          </p>
          <p className="text-gray-400 text-lg md:text-2xl font-semibold">
            - Priyanka Kaul, Founder
          </p>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-[#1b1b1b] py-12   shadow-xl">
        <h2 className="text-center text-teal-400 text-lg font-semibold">
          Meet Our Team
        </h2>
        <h1 className="text-center text-3xl font-bold text-white mb-8">
          Our Team
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              name: "Mujeeb ur Rehman",
              role: "Financial Controller",
              img: Image1,
            },
            {
              name: "Devesh",
              role: "Consultant, Technology & Digital Marketing",
              img: Image1,
            },
            {
              name: "Vandana",
              role: "Senior Consultant, Design & Technology",
              img: Image1,
            },
            {
              name: "Ishwinder Singh",
              role: "Consultant, Business Development",
              img: Image1,
            },
          ].map((member, index) => (
            <div
              key={index}
              className="text-center mb-8 p-4 bg-[#111111] rounded-lg shadow-lg  "
            >
              <div className="w-48 h-48 bg-gray-300 mb-4 mx-auto rounded-full overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-teal-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
