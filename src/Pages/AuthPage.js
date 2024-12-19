import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import { motion, AnimatePresence } from "framer-motion";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {/* Main container */}
      <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left section */}
        <motion.div
          className="w-1/2 p-6 bg-blue-600 text-white flex flex-col justify-center"
          variants={leftVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-4">
            Welcome to Mini Social Network
          </h1>
          <p className="text-lg italic font-thin text-center">
            "Connecting people and ideas, one step at a time."
            <div className="flex justify-center mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
            </div>
          </p>
        </motion.div>

        {/* Right section with form */}
        <motion.div
          className="w-1/2 p-6"
          variants={rightVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AuthPage;
