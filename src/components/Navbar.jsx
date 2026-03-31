import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Coach', path: '/coach' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5' 
                : 'bg-white shadow-md'
        }`}>
            <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between relative">
                {/* Logo - Anchored conceptually left */}
                <div className="w-full sm:w-1/4 md:w-1/3 text-center sm:text-left mb-3 sm:mb-0 z-10">
                    <Link to="/" className="inline-block">
                        <h2 className="text-2xl font-extrabold text-secondary font-display tracking-wider hover:text-primary transition-colors duration-300">
                            R<span className="text-primary">T</span>C
                        </h2>
                    </Link>
                </div>

                {/* Nav Links — Formally Centered */}
                <div className="w-full sm:w-2/4 md:w-1/3 flex space-x-5 sm:space-x-8 items-center justify-center z-10">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm sm:text-base font-bold transition-all duration-200 px-1 sm:px-0 relative
                                ${isActive(link.path)
                                ? 'text-primary'
                                : 'text-secondary/80 hover:text-primary'
                                }`}
                        >
                            {link.name}
                            {/* Animated underline */}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                                isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                            }`} />
                        </Link>
                    ))}
                </div>

                {/* Empty block to provide explicit geometric balance for the center block */}
                <div className="hidden sm:block sm:w-1/4 md:w-1/3"></div>
            </div>
        </nav>
    );
};

export default Navbar;
