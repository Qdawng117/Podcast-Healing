import React from "react";
import { FaSearch } from "react-icons/fa";
import "../../styles/Header.css";

const Header = () => {
    return (
        <header className="header">
            {/* Logo và Search Bar ở giữa */}
            <div className="header-center">
                {/* Logo */}
                <a href="/" className="logo-link">
                    <img src="/logo.png" alt="Logo" className="logo-img" />
                </a>

                {/* Search Bar */}
                <div className="search-bar">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Bạn muốn phát nội dung gì?" />
                </div>
            </div>

            {/* Navigation links */}
            <nav className="header-right">
                <a href="/admin">Admin</a>
                <a href="/login">Log in</a>
            </nav>
        </header>
    );
};

export default Header;
