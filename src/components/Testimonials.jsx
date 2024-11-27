import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// import vid from "../assets/guest-exp.mp4"; 
// import vid2 from "../assets/Video-822~2.mp4"; 

import "./TestiSwiper.css";

const testData = [
  {
    name: "Tushar Bhagwane",
    review:
      "I had a fantastic stay at this hotel! The rooms were spacious, clean, and well-equipped. The staff were incredibly friendly and went above and beyond. Highly recommended for a relaxing and enjoyable stay!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVxxwRteERrs8ChY1SwQcY-cczJTbr37ZC34xirdvxZ1V02hV0=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Hrishabh Vashishtha",
    review:
      "Into the Wild is an absolute gem! The interiors are cozy, the location is stunning, and the peaceful surroundings make it a perfect retreat. Truly refreshing and rejuvenating.",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVVWoTorW_xMCcGxT-K1pMEkyr6BiZRst_xtZZ4nATKp6PVafjl=w75-h75-p-rp-mo-ba2-br100",
  },
  {
    name: "Manish Rathore",
    review:
      "Amazing stay at Into the Wild! Spacious cottage, stunning views, and delicious food. The staff was friendly and accommodating. A perfect nature getaway!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWAyMr0qVH4_8n21vsJraxjHqz_wEyldxnY2MHklO0JqjjGCfsw=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Achyut Pandey",
    review:
      "Beautiful place to spend time with family and friends. Spacious cottages and a blissful valley view from the watchtower. Highly recommended!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUiPYj94ra9LMSK_zdaPBiWGKgJ4tiRClMczHtXnkUHZZ8KlkDt=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Arvind Nagar",
    review:
      "The location and view are worth every penny. Wonderful hospitality, and Uncle ji took great care of us like family. Will definitely come back soon!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjXcVgO6RVm6QTkIEvCG4fDM4693d-jm2kS5Eji3CbgzhzcTVZLy=w75-h75-p-rp-mo-ba2-br100",
  },
  {
    name: "Shivam Mishra",
    review:
      "Amazing stay with stunning views from the windows. The food, especially honey chilli potatoes and momos, was delicious. Highly recommended!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVtHJlom4jAmFJh851wQLMKq_OWJHGUSw7S8qRq9SLF_pPd5oq2=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Anjali Sharma",
    review:
      "A very beautiful and cozy cottage with an amazing mountain view. Perfect for a hill station staycation!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a/ACg8ocJ8AxiaJuwlIiaehLvnIF99LgA7h-U99sgupo9LNOEKOmlGqg=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Rajat Sharma",
    review:
      "Located near Eco Park, this stay is vibrant and spacious. Modern cottages with a close-to-nature feel. Loved the hospitality and food!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWfhfXkPNVUNWGSMayOR9RqYcyoEH8iKKWKAtHxLbqAzpNDbJ85Ow=w75-h75-p-rp-mo-ba2-br100",
  },
  {
    name: "Msc Bill",
    review:
      "Dhanaulti is beautiful, and Into the Wild homestay is the best place to stay. Amazing rooms and services!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a/ACg8ocJFqMHTOoRlhOUZiHy71cfy-oExqTTSauzFrHgX2S5kqC6g5Q=w75-h75-p-rp-mo-br100",
  },
 
];

const Testimonials = () => {
  return (
    <div className="py-12 bg-gray-100">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center text-[#F77706] mb-8">
        Guest testimonials
      </h1>

      {/* Swiper for Reviews */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testData.map((testimon, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col h-full min-h-[350px] w-full max-w-xs mx-auto bg-white p-6 shadow-lg rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="shrink-0">
                  <img
                    src={testimon.img}
                    alt={`${testimon.name}'s profile`}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-50 shadow-md"
                  />
                </div>

                <div className="text-center space-y-2">
                  <p className="text-sm md:text-base text-gray-600 italic px-2 min-h-[80px] flex items-center justify-center">
                    {testimon.review}
                  </p>

                  <div>
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                      {testimon.name}
                    </h2>
                    {/* Uncomment and style if you want to add address */}
                    {/* <p className="text-xs text-gray-500 mt-1">{testimon.address}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Video Section
      <div className="container mt-8 gap-4 px-4 flex justify-center items-center">
        <div className=" h-[70vh] rounded-lg shadow-lg overflow-hidden">
          <video
            className="lg:w-[550px] lg:h-[500px] h-[380px] w-[390px] object-cover"
            controls
            autoPlay
            muted
            src={vid}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className=" h-[70vh] rounded-lg shadow-lg overflow-hidden">
          <video
            className="lg:w-[550px] lg:h-[500px] h-[380px] w-[390px] object-cover"
            controls
            autoPlay
            muted
            src={vid2}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div> */}
    </div>
  );
};

export default Testimonials;
