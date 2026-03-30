import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                    {/* Brand & About */}
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">RTC Taekwondo</h3>
                        <p className="text-gray-400 mb-4">
                            Building discipline, strength, and confidence through the art of Taekwondo. Join us to start your journey today.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/17sTqNP3id/" className="text-white hover:text-primary transition"><FaFacebook size={24} /></a>
                            <a href="https://www.instagram.com/raibag_taekwondo_center?igsh=eDJhMG1iMnE5eTRv" className="text-white hover:text-primary transition"><FaInstagram size={24} /></a>
                            <a href="https://youtube.com/@raibagtaekwondocentre?si=BY98ZSDtxUB2blx2" className="text-white hover:text-primary transition"><FaYoutube size={24} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 border-b-2 border-primary inline-block pb-1">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/schedule" className="text-gray-400 hover:text-white transition">Class Schedule</Link></li>
                            <li><Link to="/gallery" className="text-gray-400 hover:text-white transition">Gallery</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 border-b-2 border-primary inline-block pb-1">Our Programs</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Kids Taekwondo (7-12 yrs)</li>
                            <li className="text-gray-400">Teens &amp; Adults</li>
                            <li className="text-gray-400">Self Defense</li>
                            <li className="text-gray-400">Personality Development</li>
                            <li className="text-gray-400">Summer camp</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 border-b-2 border-primary inline-block pb-1">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start text-gray-400">
                                <FaMapMarkerAlt className="mt-1 mr-2 text-primary" />
                                <span>Mahadev Mangal Karyalay,<br />Siddheshwar Galli, Raibag-591317</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <FaPhone className="mr-2 text-primary" />
                                <span>+91 9945634099</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <FaEnvelope className="mr-2 text-primary" />
                                <span>prartanajd1703@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Raibag Taekwondo Center. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
