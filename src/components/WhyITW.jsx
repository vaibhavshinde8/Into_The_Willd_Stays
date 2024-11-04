
const WhyITW = () => {
  return (
    <div className="bg-[#012258] p-10">
      <h2 className="text-3xl font-bold text-[#ffffff] mb-8">
        Why <span className="text-[#F77706]">Into The Wild?</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <img
            src="/assets/images/trusted-brand.jpg"
            alt="Trusted Brand"
            className="w-full h-52 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-semibold mt-4 text-[#012258]">Trusted Brand</h3>
          <p className="text-[#012258] mt-2">
            India&apos;s Favourite Homestays Awards - Eco-Friendly Homestay of the Year 2022.
          </p>
        </div>
        <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <img
            src="/assets/images/bespoke-hospitality.jpg"
            alt="Bespoke Hospitality"
            className="w-full h-52 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-semibold mt-4 text-[#012258]">Bespoke Hospitality</h3>
          <p className="text-[#012258] mt-2">
            Personalized service to make your stay memorable.
          </p>
        </div>
        <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <img
            src="/assets/images/high-quality-linens.jpg"
            alt="High quality linens & toiletries"
            className="w-full h-52 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-semibold mt-4 text-[#012258]">High-Quality Linens & Toiletries</h3>
          <p className="text-[#012258] mt-2">
            Enjoy premium quality linens and toiletries during your stay.
          </p>
        </div>
        <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <img
            src="/assets/images/sf-loyalty-club.jpg"
            alt="SF Loyalty Club Benefits"
            className="w-full h-52 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-semibold mt-4 text-[#012258]">SF Loyalty Club Benefits</h3>
          <p className="text-[#012258] mt-2">
            Exclusive benefits for SF Loyalty Club members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyITW;
