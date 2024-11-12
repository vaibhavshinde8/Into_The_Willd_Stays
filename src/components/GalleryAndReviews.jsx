import Image1 from "../assets/homehero1.png";
import Image2 from "../assets/guestdiary/img-1.jpeg";
import Image3 from "../assets/guestdiary/img-2.jpg";
import Image4 from "../assets/guestdiary/img-3.jpeg";

// Sample data for the gallery and reviews
const content = [
  {
    type: "image",
    imgSrc: Image2,
    caption: "Take a deep breath and find peace among the peaks",
  },
  {
    type: "review",
    author: "@pankaj4all2005",
    location: "Sundays Forever Hill Top Cottage",
    review: "Always grateful to have this lil one by my side.",
  },
  {
    type: "image",
    imgSrc: Image3,
    caption: "Mountain views that will take your breath away",
  },
  {
    type: "review",
    author: "@alex_travels",
    location: "Cozy Mountain Retreat",
    review: "The perfect escape for a peaceful weekend!",
  },
  {
    type: "image",
    imgSrc: Image4,
    caption: "Take a deep breath and find peace among the peaks",
  },
  {
    type: "review",
    author: "@alex_travels",
    location: "Cozy Mountain Retreat",
    review: "The perfect escape for a peaceful weekend!",
  },
];

const GalleryAndReviews = () => {
  return (
    <div className="gallery-reviews p-6 lg:px-32 bg-gradient-to-r from-[#ffffff] via-[#43A181] to-[#ffffff] text-white min-h-[60vh]">
      <h1 className="text-4xl text-white lg:text-5xl font-bold mb-6 text-center pb-12">
        Guest <span className="text-[#F77706]">Diaries</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((item, index) => (
          <div
            key={index}
            className="card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 duration-300"
          >
            {item.type === "image" ? (
              <>
                <div className="relative">
                  <img
                    src={item.imgSrc}
                    alt={
                      item.caption ? item.caption : `Gallery item ${index + 1}`
                    }
                    className="w-full h-[300px] object-cover rounded-xl transition-transform transform hover:scale-105 duration-300"
                  />
                  {item.caption && (
                    <div className="absolute inset-0 flex items-end justify-center rounded-xl">
                      <p className="text-center w-full bg-black bg-opacity-40 text-white text-lg p-3">
                        {item.caption}
                      </p>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="p-8 py-16">
                <p className="font-bold text-[#43A181] text-lg">
                  {item.author}
                </p>
                <p className="text-[#091F3C]">{item.location}</p>
                <p className="italic text-gray-600 mt-2">{item.review}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryAndReviews;
