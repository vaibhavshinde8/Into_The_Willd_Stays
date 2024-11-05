const GuestExperience = () => {
  return (
    <div
      // id="guest-exp "
      className="bg-gradient-to-r from-blue-900 via-gray-800 to-blue-900 min-h-[100vh] py-36 lg:px-32"
    >
      <div className="my-12 mx-4 ">
        <div className="flex flex-col-reverse lg:flex-row gap-8 justify-around items-center text-center">
          <div className="flex flex-col gap-6 p-8 bg-gradient-to-r from-[#001F4D] to-[#1E3A8A] rounded-2xl shadow-xl lg:w-[550px] lg:h-[380px] text-white">
            <h1 className="text-4xl font-bold tracking-tight">
              Guest <span className="text-[#F77706]">Experience</span>
            </h1>
            <h4 className="lg:text-lg text-gray-300 leading-relaxed">
              At Sundays Forever, our primary goal is to provide our guests with
              an exceptional experience that they will cherish forever. We
              understand that luxury is not just about lavish amenities but also
              about the feeling of being pampered and cared for. Our team is
              dedicated to tailoring every aspect of their stay, including
              personalized services and bespoke experiences. We pride ourselves
              on creating memories that last a lifetime.
            </h4>
          </div>
          <div className="shadow-2xl rounded-xl overflow-hidden">
            <iframe
              className="w-full lg:w-[630px] lg:h-[500px] rounded-lg transition-transform transform hover:scale-105"
              width="400"
              height="315"
              src="https://www.youtube.com/embed/bx-cd1TL3BY?si=H3e2THm1emot4sEI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestExperience;
