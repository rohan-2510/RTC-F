import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaYoutube, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-secondary to-dark text-white pt-16 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

                    {/* Brand & About */}
                    <div>
                        <h3 className="text-2xl font-extrabold text-white mb-4 font-display">Raibag <span className='text-primary'> Taekwondo </span> Centre</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                            Building discipline, strength, and confidence through the art of Taekwondo. Join us to start your journey today.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/17sTqNP3id/" className="text-gray-400 hover:text-[#1877F2] transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"><FaFacebook size={22} /></a>
                            <a href="https://www.instagram.com/raibag_taekwondo_center?igsh=eDJhMG1iMnE5eTRv" className="text-gray-400 hover:text-[#E4405F] transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"><FaInstagram size={22} /></a>
                            <a href="https://youtube.com/@raibagtaekwondocentre?si=BY98ZSDtxUB2blx2" className="text-gray-400 hover:text-[#FF0000] transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"><FaYoutube size={22} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold mb-5 uppercase tracking-wider text-gray-300">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform">Home</Link></li>
                            <li><Link to="/coach" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform">Coach</Link></li>
                            <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform">Gallery</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="text-sm font-bold mb-5 uppercase tracking-wider text-gray-300">Our Programs</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-400 text-sm">Kids Taekwondo (7-12 yrs)</li>
                            <li className="text-gray-400 text-sm">Teens &amp; Adults</li>
                            <li className="text-gray-400 text-sm">Self Defense</li>
                            <li className="text-gray-400 text-sm">Personality Development</li>
                            <li className="text-gray-400 text-sm">Summer Camp</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-bold mb-5 uppercase tracking-wider text-gray-300">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start text-gray-400 text-sm">
                                <FaMapMarkerAlt className="mt-0.5 mr-3 text-primary shrink-0" />
                                <span>Mahadev Mangal Karyalay,<br />Siddheshwar Galli, Raibag-591317</span>
                            </li>
                            <li className="flex items-center text-gray-400 text-sm">
                                <FaPhone className="mr-3 text-primary shrink-0" />
                                <a href="tel:+919945634099" className="hover:text-white transition-colors">+91 9945634099</a>
                            </li>
                            <li className="flex items-center text-gray-400 text-sm">
                                <FaEnvelope className="mr-3 text-primary shrink-0" />
                                <a href="mailto:prartanajd1703@gmail.com" className="hover:text-white transition-colors">prartanajd1703@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Raibag Taekwondo Center. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
