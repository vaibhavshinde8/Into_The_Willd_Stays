
const TourBanner = () => {
  return (
    <div className="py-8 text-white bg-gradient-to-r from-blue-900 via-gray-800 to-blue-900">
      <div className='flex flex-col gap-2 lg:gap-6 items-start lg:mx-16 mx-4 bg-[url("https://sundaysforever.com/static/media/Readerscottageimg11.f704c68c88bac4cd9489.jpg")] lg:py-12 py-8 px-4 lg:pl-20 bg-fixed bg-cover bg-center rounded-lg'>
        <h1 className="lg:text-4xl text-xl font-bold">
          Welcome to Our Tours Package
        </h1>
        <h2 className="text-lg lg:text-2xl">
          Join our community to explore the best packeges, All in{" "}
          <span className="text-secondry font-extrabold">
            IntoTheWildsStays
          </span>
        </h2>
        <button className="px-4 py-2 lg:px-16 hover:bg-black font-bold rounded-lg bg-secondry">
          Explore more
        </button>
      </div>
    </div>
  );
}

export default TourBanner