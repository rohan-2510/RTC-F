import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownTimer, setDropdownTimer] = useState(null);
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/login');
        setIsOpen(false);
    };

    const closeMenu = () => setIsOpen(false);

    // Handle dropdown hover with delay
    const handleDropdownEnter = () => {
        if (dropdownTimer) {
            clearTimeout(dropdownTimer);
            setDropdownTimer(null);
        }
        setIsDropdownOpen(true);
    };

    const handleDropdownLeave = () => {
        const timer = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 1000);
        setDropdownTimer(timer);
    };

    // Check if a link is active
    const isActive = (path) => {
        return location.pathname === path;
    };

    // Common links - filter out Contact for admin users
    const allLinks = [
        { name: 'Home', path: '/' },

        { name: 'Schedule', path: '/schedule' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    // Filter links based on user role
    const links = allLinks.filter(link => {
        // Hide Contact page for admin users
        if (link.path === '/contact' && user?.role === 'admin') {
            return false;
        }
        return true;
    });

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-primary flex items-center" onClick={closeMenu}>
                    RTC
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`font-medium transition ${isActive(link.path)
                                ? 'text-primary border-b-2 border-primary'
                                : 'text-secondary hover:text-primary'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {isAuthenticated ? (
                        <div
                            className="relative"
                            onMouseEnter={handleDropdownEnter}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <button className="flex items-center space-x-1 text-secondary hover:text-primary focus:outline-none">
                                <FaUserCircle size={24} />
                                <span className="font-medium">{user?.name?.split(' ')[0]}</span>
                            </button>
                            {/* Dropdown */}
                            <div className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100 transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                                }`}>
                                <Link
                                    to={user?.role === 'admin' ? '/admin' : '/dashboard'}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex space-x-3">
                            <Link to="/login" className="text-primary hover:text-red-700 font-medium px-3 py-2">
                                Login
                            </Link>
                            <Link to="/register" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                                Join Now
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-secondary focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
                    <div className="flex flex-col px-4 py-4 space-y-3">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium py-2 border-b border-gray-50 ${isActive(link.path)
                                    ? 'text-primary bg-red-50 px-3 rounded-md'
                                    : 'text-secondary hover:text-primary'
                                    }`}
                                onClick={closeMenu}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {isAuthenticated ? (
                            <>
                                <Link
                                    to={user?.role === 'admin' ? '/admin' : '/dashboard'}
                                    className="text-secondary hover:text-primary font-medium py-2 border-b border-gray-50"
                                    onClick={closeMenu}
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="text-left text-red-600 font-medium py-2"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <div className="flex flex-col space-y-3 mt-2">
                                <Link
                                    to="/login"
                                    className="text-center text-primary border border-primary py-2 rounded-md font-medium"
                                    onClick={closeMenu}
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="text-center bg-primary text-white py-2 rounded-md font-medium"
                                    onClick={closeMenu}
                                >
                                    Join / Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
