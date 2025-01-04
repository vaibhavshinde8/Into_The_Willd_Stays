import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark, X, Menu } from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-cyan-100 to-emerald-100 p-4 sm:p-8 lg:p-24">
      <div className="max-w-5xl mx-auto rounded-lg">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center p-6 sm:p-10 rounded-t-lg bg-white border-b border-gray-200 shadow-sm"
        >
          {/* Mobile Menu Toggle */}
          <div className="md:hidden absolute top-4 right-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              className="text-gray-600"
            >
              <Menu size={24} />
            </motion.button>
          </div>

          {/* Profile Picture */}
          <div className="mb-4 md:mr-8 md:mb-0 flex justify-center w-full md:w-auto">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={mockProfileData.profilePicture}
              alt="Profile"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-3 border-pink-500 shadow-lg transition-transform"
            />
          </div>

          {/* Profile Info */}
          <div className="text-center md:text-left w-full md:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start mb-3">
              <h2 className="text-2xl sm:text-3xl font-bold mr-0 sm:mr-6 text-gray-800 mb-2 sm:mb-0">
                {mockProfileData.username}
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const instagramUrl = `https://www.instagram.com/${
                    mockProfileData.instagramUsername ||
                    mockProfileData.username
                  }`;
                  window.open(instagramUrl, "_blank", "noopener,noreferrer");
                }}
                className="bg-gradient-to-r from-blue-800 to-blue-700 text-white px-4 py-1 sm:px-5 sm:py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all flex items-center"
              >
                Follow
              </motion.button>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 mb-3 text-gray-700">
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

            {/* Bio */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg text-gray-900">
                {mockProfileData.fullName}
              </h3>
              <div
                className="text-gray-600 text-sm sm:text-base"
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
          className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-1 rounded-b-lg bg-white p-1 sm:p-2 md:p-4"
        >
          {mockPosts?.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="aspect-square overflow-hidden cursor-pointer relative group"
              onClick={() => handlePostClick(post)}
            >
              <img
                src={post.imageUrl}
                alt={`Post ${post.id}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
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
              onClick={closeModal} // Close modal when clicking outside
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white w-full max-w-lg sm:max-w-2xl md:max-w-4xl flex flex-col md:flex-row rounded-xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
              >
                {/* Image Section */}
                <div className="w-full md:w-3/5">
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={selectedPost.imageUrl}
                    alt="Selected post"
                    className="w-full h-48 sm:h-64 md:h-[80vh] object-cover"
                  />
                </div>

                {/* Post Details Section */}
                <div className="w-full md:w-2/5 p-4 md:p-6 flex flex-col">
                  {/* Profile Header */}
                  <div className="flex items-center mb-4">
                    <img
                      src={mockProfileData.profilePicture}
                      alt="Profile"
                      className="w-10 h-10 rounded-full mr-3 border-2 border-pink-300"
                    />
                    <span className="font-semibold text-base text-gray-800">
                      {mockProfileData.username}
                    </span>
                  </div>

                  {/* Caption */}
                  <div className="flex-grow">
                    <p className="text-gray-700 text-sm md:text-base">
                      {selectedPost.caption}
                    </p>
                  </div>

                  {/* No comments yet */}
                  <div className="text-gray-500 text-xs md:text-sm flex items-center justify-center h-full border-t border-b border-gray-300">
                    <span className="text-center">no comments yet</span>
                  </div>

                  {/* Action Icons */}
                  <div className="flex justify-between my-2 md:my-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex space-x-4 text-gray-600"
                    >
                      <Heart className="cursor-pointer hover:text-red-500 w-5 h-5" />
                      <MessageCircle className="cursor-pointer hover:text-blue-500 w-5 h-5" />
                      <Send className="cursor-pointer hover:text-green-500 w-5 h-5" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Bookmark className="cursor-pointer text-gray-600 hover:text-yellow-500 w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Timestamp */}
                  <div>
                    <p className="text-gray-500 text-xs md:text-sm">
                      {selectedPost.timestamp}
                    </p>
                  </div>

                  {/* Close Button */}
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    onClick={closeModal}
                    className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-600 hover:text-red-500"
                  >
                    <X size={20} md:size={24} />
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
