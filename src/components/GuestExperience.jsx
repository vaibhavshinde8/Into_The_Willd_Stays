
const GuestExperience = () => {
  return (
    <section id="guest-exp">
      <div className="my-12 mx-2">
        <div className="flex flex-col-reverse lg:flex-row gap-4 justify-around items-center text-center">
          <div className="flex flex-col gap-4 bg-blue-100 p-8 lg:ml-16 rounded-lg lg:w-[550px] lg:h-[350px] justify-center">
            <h1 className="text-4xl font-bold">
              Guest <span className="text-primary">Experience</span>
            </h1>
            <h4 className="lg:text-lg">
              At Sundays Forever, our primary goal is to provide our guests with
              an exceptional experience that they will cherish forever. We
              understand that luxury is not just about lavish amenities, but
              also about the feeling of being pampered and cared for. Our team
              is dedicated to tailoring every aspect of their stay to their
              preferences, including personalized services and bespoke
              experiences. We are committed to elevating the guest experience to
              new heights and take pride in creating memories that last a
              lifetime.
            </h4>
          </div>
          <div>
            <iframe
              className="lg:w-[630px] lg:h-[500px] rounded-lg"
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
    </section>
  );
};

export default GuestExperience;
