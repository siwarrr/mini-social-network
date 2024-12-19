import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
    const { user, logout } = useAuth();

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6">
            <h1>Welcome, {user?.email}!</h1>
            <p>This is the home page</p>
            <button 
                onClick={logout}
            >
                Logout
            </button>
        </div>
    );
};

export default Home;