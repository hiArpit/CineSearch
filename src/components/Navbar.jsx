import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav style={{ backgroundColor: "#032541" }} className="p-4">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center justify-between w-full sm:w-auto">
                    {/* Logo and Icon */}
                    <div className="flex items-center">
                        <i className="fas fa-film text-white text-2xl mr-2"></i>
                        <h1 className="text-white text-2xl font-bold">CineSearch</h1>
                    </div>
                    {/* Hamburger Menu */}
                    <div className="block sm:hidden ml-auto">
                        <button onClick={toggleMenu} className="text-white text-2xl">
                            ☰
                        </button>
                    </div>
                </div>
                {/* Navigation Links */}
                <div className={`flex flex-col sm:flex-row ${isOpen ? 'block' : 'hidden'} sm:block mt-4 sm:mt-0`}>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            `text-white px-4 py-2 ${isActive ? 'bg-blue-600 rounded' : ''}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/favorites" 
                        className={({ isActive }) => 
                            `text-white px-4 py-2 ${isActive ? 'bg-blue-600 rounded' : ''}`
                        }
                    >
                        Favorites
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
