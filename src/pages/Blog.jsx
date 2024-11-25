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
      <div className=" bg-gray-100">
        <div className="bg-[url('https://images.trvl-media.com/lodging/109000000/108380000/108370800/108370765/28b3dc50.jpg?impolicy=resizecrop&rw=1200&ra=fit')] bg-cover bg-center bg-fixed lg:py-24 py-16 flex flex-col items-center lg:gap-4 text-white">
          <h1 className="lg:text-6xl text-3xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-green-500 to-green-700 relative inline-block">
            <span className="relative">Blogs</span>
          </h1>
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
