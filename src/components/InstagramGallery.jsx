import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark, X } from "lucide-react";
import logo from "../assets/IntotheWildStaysLogo.png";
import Image1 from "../assets/majuli/Property Photo/18PM.jpeg";
import Imageanshi from "../assets/team/AnshiArt&Craftinstructor.jpg";
import Image3 from "../assets/majuli/majuli1.jpeg";
import Image4 from "../assets/SunandSandGoa/52PM.jpeg";
import Image5 from "../assets/itw_rep/itwrep_page-0008.jpg";
import Image6 from "../assets/goa/goa-ggl.jpg";

// Mock data (same as previous implementation)
const mockProfileData = {
  username: "intothewildstays",
  fullName: "Into The Wild",
  bio: "Luxury Cottages and Rooms.🏡🛌<br/>Your home in the Wild.🌳🌄<br/>Dhanolti | Rishikesh | Goa | Tehri <br/> Call/whatsapp : 9958838557/9761966485",
  followers: 1039,
  following: 91,
  posts: 93,
  profilePicture: logo,
};

const mockPosts = [
  {
    id: 1,
    imageUrl: Image3,
    likes: 1245,
    comments: 56,
    caption: "Sunset over the mountains 🏔️ #wanderlust",
    timestamp: "2 days ago",
  },
  {
    id: 2,
    imageUrl: Imageanshi,
    likes: 987,
    comments: 34,
    caption: "Exploring hidden beaches 🏖️ #travelgram",
    timestamp: "5 days ago",
  },
  {
    id: 3,
    imageUrl: Image5,
    likes: 1567,
    comments: 78,
    caption: "Urban adventures in Tokyo 🇯🇵 #citylife",
    timestamp: "1 week ago",
  },
  {
    id: 4,
    imageUrl: Image6,
    likes: 876,
    comments: 45,
    caption: "Morning coffee with a view ☕ #morningmotivation",
    timestamp: "2 weeks ago",
  },
  {
    id: 5,
    imageUrl: Image1,
    likes: 1123,
    comments: 62,
    caption: "Hiking trails and good vibes 🥾 #outdooradventures",
    timestamp: "3 weeks ago",
  },
  {
    id: 6,
    imageUrl: Image4,
    likes: 945,
    comments: 39,
    caption: "Street photography in New York 🗽 #streetstyle",
    timestamp: "1 month ago",
  },
];


const InstagramGallery = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen p-24">
      <div className="max-w-5xl mx-auto  ">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center p-8 bg-white border-b border-gray-200 rounded-t-xl shadow-sm"
        >
          <div className="mr-8">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={mockProfileData.profilePicture}
              alt="Profile"
              className="w-28 h-28 rounded-full border-3 border-pink-500 shadow-lg transition-transform"
            />
          </div>
          <div>
            <div className="flex items-center mb-3">
              <h2 className="text-3xl font-bold mr-6 text-gray-800">
                {mockProfileData.username}
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
              >
                Follow
              </motion.button>
            </div>
            <div className="flex space-x-6 mb-3 text-gray-700">
              <span>
                <strong>{mockProfileData.posts}</strong> posts
              </span>
              <span>
                <strong>{mockProfileData.followers}</strong> followers
              </span>
              <span>
                <strong>{mockProfileData.following}</strong> following
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                {mockProfileData.fullName}
              </h3>
              <div
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: mockProfileData.bio }}
              ></div>
            </div>
          </div>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-3 gap-1  bg-white p-4"
        >
          {mockPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="aspect-square overflow-hidden cursor-pointer relative group "
              onClick={() => handlePostClick(post)}
            >
              <img
                src={post.imageUrl}
                alt={`Post ${post.id}`}
                className="w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center text-white transition-all duration-300">
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100">
                  <span className="flex items-center">
                    <Heart className="mr-2" /> {post.likes}
                  </span>
                  <span className="flex items-center">
                    <MessageCircle className="mr-2" /> {post.comments}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Post Modal */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white max-w-4xl w-full flex rounded-xl overflow-hidden shadow-2xl"
              >
                <div className="w-3/5">
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={selectedPost.imageUrl}
                    alt="Selected post"
                    className="w-full h-[80vh] object-cover"
                  />
                </div>
                <div className="w-2/5 p-6 flex flex-col">
                  <div className="flex items-center mb-4">
                    <img
                      src={mockProfileData.profilePicture}
                      alt="Profile"
                      className="w-10 h-10 rounded-full mr-3 border-2 border-pink-300"
                    />
                    <span className="font-semibold text-gray-800">
                      {mockProfileData.username}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-700">{selectedPost.caption}</p>
                  </div>
                  <div className="flex justify-between my-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex space-x-4 text-gray-600"
                    >
                      <Heart className="cursor-pointer hover:text-red-500" />
                      <MessageCircle className="cursor-pointer hover:text-blue-500" />
                      <Send className="cursor-pointer hover:text-green-500" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Bookmark className="cursor-pointer text-gray-600 hover:text-yellow-500" />
                    </motion.div>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">
                      {selectedPost.timestamp}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
                  >
                    <X size={24} />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InstagramGallery;
