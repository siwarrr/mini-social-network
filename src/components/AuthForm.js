import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

const AuthForm = ({ isLogin, setIsLogin }) => { 
    const { login, register } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            if (isLogin) {
                await login(email, password);
            } else {
                await register(email, password);
            }
        } catch (err) {
            setError(err.message || "An error occurred");
        }
    };

    // Variants for Framer Motion
    const formVariants = {
        hidden: { opacity: 0, x: isLogin ? -50 : 50 }, // Start: shifted to the left/right
        visible: { opacity: 1, x: 0 }, // Appearance: centered
        exit: { opacity: 0, x: isLogin ? 50 : -50 } // Output: shifted to right/left
    };

    return (
        <motion.div
          className="p-6"
          variants={formVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl font-bold mb-4 text-center">
                {isLogin ? "Sign in to your account" : "Create an account"}
            </h2>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="sr-only block text-gray-700 font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password" className="sr-only block text-gray-700 font-medium">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                    {isLogin ? "Sign In" : "Register"}
                </button>
            </form>

            <p className="text-center mt-4 text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-blue-600 font-medium hover:underline"
                >
                    {isLogin ? "Register" : "Sign In"}
                </button>
            </p>
        </motion.div>
    );
};

export default AuthForm;
