"use client";

import { useState } from "react";
import Image from "next/image";

export default function LatestArticlesSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const articles = [
    {
      category: "WELLNESS",
      date: "April 20, 2026",
      title: "5 Simple Morning Habits to Boost Your Wellbeing",
      excerpt:
        "Start your day right with easy, refreshing habits that enhance your mood and energy.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    },
    {
      category: "NUTRITION",
      date: "April 15, 2026",
      title: "Healthy Eating on a Budget: Tips & Recipes",
      excerpt:
        "Explore affordable ways to eat nutritious meals and get delicious, budget-friendly recipes.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    },
    {
      category: "MINDFULNESS",
      date: "April 8, 2026",
      title: "A Beginners Guide to Meditation & Relaxation",
      excerpt:
        "Discover simple techniques to reduce stress and find inner peace through meditation.",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Newsletter + Articles combined section with teal background */}
      <div className="bg-primary relative">
        {/* Decorative circular pattern */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <svg className="w-full h-full" viewBox="0 0 600 600" fill="none">
            {[...Array(15)].map((_, i) => (
              <circle
                key={i}
                cx="500"
                cy="200"
                r={50 + i * 40}
                stroke="white"
                strokeWidth="1"
                fill="none"
                opacity={0.4 - i * 0.02}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16 relative z-10">
          {/* Newsletter Section */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join To Our Newsletter
            </h2>
            <p className="text-white/90 text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur. Convallis est urna
              adipiscing fringilla nulla elem lorem non mauris. Ultrices aliquet
              et quam adipiscing feugiat interdum mattis. Placerat donec risus
              elem sed et. In ullamcorper ipsum.
            </p>

            {/* Newsletter Form */}
            <form className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="flex-1 px-6 py-3.5 rounded-full bg-transparent border-2 border-white/40 text-white placeholder-white/60 focus:outline-none focus:border-white/70 transition"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-secondary hover:bg-teal-400 text-white font-semibold rounded-full transition whitespace-nowrap"
                >
                  Subscribe Us
                </button>
              </div>
            </form>
          </div>

          {/* Latest Articles Header */}
          <div className="text-center mt-20 mb-8">
            <div className="w-20 h-1 bg-white/30 mx-auto mb-20"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Latest Articles
            </h2>
            <p className="text-white/70 text-base">
              Discover our latest tips and insights to help you on your wellness
              journey.
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid - White Background */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden cursor-pointer">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-0">
                    <span className="bg-primary text-white text-xs font-semibold px-4 py-1.5 rounded-tr-xl rounded-br-xl uppercase">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <button className="flex cursor-pointer items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                    Read More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mb-6">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition ${
                  activeSlide === index ? "bg-primary w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* View All Posts Button */}
          <div className="text-center">
            <button className="bg-primary hover:bg-teal-700 text-white px-10 py-3.5 rounded-full font-semibold transition flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl">
              View All Posts
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
