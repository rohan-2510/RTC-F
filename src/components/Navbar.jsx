import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    const links = [
        { name: 'Home', to: '#home' },
        { name: 'Schedule', to: '#schedule' },
        { name: 'Gallery', to: '#gallery' },
        { name: 'Contact', to: '#contact' },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <HashLink smooth to="#home" className="text-2xl font-bold text-primary flex items-center" onClick={closeMenu}>
                    RTC
                </HashLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    {links.map((link) => (
                        <HashLink
                            key={link.name}
                            smooth
                            to={link.to}
                            className="font-medium transition text-secondary hover:text-primary"
                        >
                            {link.name}
                        </HashLink>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-secondary focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
                    <div className="flex flex-col px-4 py-4 space-y-3">
                        {links.map((link) => (
                            <HashLink
                                key={link.name}
                                smooth
                                to={link.to}
                                className="font-medium py-2 border-b border-gray-50 text-secondary hover:text-primary"
                                onClick={closeMenu}
                            >
                                {link.name}
                            </HashLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
