import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Blog = () => {
  const { blogs } = useAppContext();
  const navigate = useNavigate();

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className="container mx-auto py-8 lg:pt-32">
      <div className="relative min-h-[60vh] bg-gray-50">
        <div className=" bg-[url('https://images.trvl-media.com/lodging/109000000/108380000/108370800/108370765/28b3dc50.jpg?impolicy=resizecrop&rw=1200&ra=fit')] absolute inset-0 bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-gradient-to-b from-[#091F3C]/50 to-[#091F3C]/80" />
        </div>

        <div className="relative min-h-[60vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="relative inline-block">
              <span className="absolute -inset-1 w-full h-full bg-gradient-to-r from-[#43A181] to-[#43A181]/80 -skew-y-3 transform origin-top-right"></span>
              <span className="relative text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
                Blogs
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 h-1 bg-gradient-to-r from-[#43A181] to-transparent max-w-[200px] mx-auto"
            />
          </motion.div>
        </div>
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
