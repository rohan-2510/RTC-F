import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Coach', path: '/coach' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between relative">
                {/* Logo - Anchored conceptually left */}
                <div className="w-full sm:w-1/4 md:w-1/3 text-center sm:text-left mb-3 sm:mb-0 z-10">
                    <h2 className="text-2xl font-extrabold text-secondary">R<span className="text-primary">T</span>C</h2>
                </div>

                {/* Nav Links — Formally Centered */}
                <div className="w-full sm:w-2/4 md:w-1/3 flex space-x-5 sm:space-x-8 items-center justify-center z-10">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm sm:text-base font-bold transition px-1 sm:px-0 ${isActive(link.path)
                                ? 'text-primary border-b-2 border-primary'
                                : 'text-secondary hover:text-primary'
                                }`}
                        >
                            {link.name}
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
