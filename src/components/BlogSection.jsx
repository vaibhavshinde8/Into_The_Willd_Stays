import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BlogSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-300 via-white to-gray-200 py-16 px-4 shadow-sm">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Discover Our Latest Blog Posts
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Explore insightful articles, industry trends, and expert
              perspectives that can help you stay informed and inspired. Our
              blog covers a wide range of topics to keep you updated and
              engaged.
            </p>
          </div>

          <Link
            to="/blog"
            className="group inline-flex items-center space-x-3 bg-emerald-800 text-white 
            px-7 py-4 l font-semibold hover:bg-emerald-700 transition 
            duration-300 ease-in-out transform hover:-translate-y-1 
            hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 
            focus:ring-offset-2"
          >
            <span>Explore Blogs</span>
            <ArrowRight
              className="transition-transform group-hover:translate-x-1"
              size={20}
            />
          </Link>
        </div>

        {/* <div className="relative">
          <div className="absolute -inset-2 bg-blue-400/10 rounded-2xl blur-xl opacity-75"></div>
          <img
            src="/api/placeholder/500/400"
            alt="Blog Section"
            className="relative rounded-2xl shadow-2xl transform transition 
            duration-300 hover:scale-105 hover:rotate-1"
          />
        </div> */}
      </div>
    </section>
  );
};

export default BlogSection;
