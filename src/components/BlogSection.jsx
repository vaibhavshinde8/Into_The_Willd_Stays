import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const BlogSection = () => {
  const { blogs } = useAppContext();
  const previewBlogs = blogs.slice(0, 3); // Show only first 2 blogs

  return (
    <section className="bg-gradient-to-r from-gray-300 via-white to-gray-200 py-16 px-4 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Discover Our Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
            Explore insightful articles, industry trends, and expert
            perspectives that can help you stay informed and inspired.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {previewBlogs.map((blog) => (
            <div key={blog.id} className="bg-white  shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">{blog.category}</span>
                  <span className="text-sm text-gray-600">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
                <p className="text-gray-600 line-clamp-2">{blog.content[0]}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="group inline-flex items-center space-x-3 bg-emerald-800 text-white 
            px-7 py-4 font-semibold hover:bg-emerald-700 transition 
            duration-300 ease-in-out transform hover:-translate-y-1 
            hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 
            focus:ring-offset-2"
          >
            <span>View All Blogs</span>
            <ArrowRight
              className="transition-transform group-hover:translate-x-1"
              size={20}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
