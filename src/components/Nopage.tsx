import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation (if using React Router)
import { motion } from "framer-motion"; // For animation (install it using `npm i framer-motion`)
import Footer from "./Footer";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-black text-white text-center p-4">
        {/* Animated Title */}
        <motion.h1
          className="max-sm:text-5xl text-9xl font-bold mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          404 Not Found
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>

        {/* Animated Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-sm transition"
          onClick={handleGoHome}
        >
          Go Home
        </motion.button>

        {/* Decorative Animation */}
        <motion.div
          className="absolute bottom-10 text-gray-600 text-sm"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Tip: Try checking the URL or head back to safety!
        </motion.div>
      </div>
      <Footer/>
    </>
  );
};

export default NotFound;
