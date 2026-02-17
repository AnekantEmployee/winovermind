import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-blue-50 flex items-center justify-center px-6">
      <div className="text-center">
        {/* 404 Number */}
        <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg hover:shadow-xl"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-3 rounded-full font-semibold transition shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-3">
          <div className="w-3 h-3 rounded-full bg-primary animate-bounce"></div>
          <div className="w-3 h-3 rounded-full bg-secondary animate-bounce delay-100"></div>
          <div className="w-3 h-3 rounded-full bg-teal-400 animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
}
