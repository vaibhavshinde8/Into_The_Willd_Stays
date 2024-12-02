import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import {  useEffect } from "react";


const Blog = () => {
  const { blogs } = useAppContext();
  const navigate = useNavigate();

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="container mx-auto  lg:pb-32">
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.trvl-media.com/lodging/109000000/108380000/108370800/108370765/28b3dc50.jpg?impolicy=resizecrop&rw=1200&ra=fit')] bg-cover bg-center bg-fixed transform scale-105">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
              Our Blogs
            </span>
            {/* <br />
            Us */}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            Meet the Experts Turning Journeys into Joys.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 lg:p-32">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="group cursor-pointer"
            onClick={() => handleBlogClick(blog.id)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full z-10 flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span className="text-sm">{blog.date}</span>
              </div>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-96 h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 space-y-2">
              <span className="text-sm text-blue-600 font-medium">
                {blog.category}
              </span>
              <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                {blog.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
