import { useState } from 'react';
import api from '../utils/api';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const { name, email, subject, message } = formData;

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            await api.post('/public/contact', formData);
            setSuccess('Message sent successfully! We will get back to you soon.');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.errors?.[0]?.msg || 'Failed to send message. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-secondary text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-300">We'd love to hear from you.</p>
                </div>
            </section>

            <section className="py-16 bg-white flex-grow">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Info & Map */}
                        <div>
                            <h2 className="heading-section text-left mb-8">Get In Touch</h2>
                            <div className="space-y-6 mb-8">
                                <div className="flex items-start">
                                    <div className="bg-light p-3 rounded-full mr-4 text-primary">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Our Location</h4>
                                        <p className="text-gray-600">Mahadev Mangal Karyalay, Siddheshwar Galli,Raibag-591317</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-light p-3 rounded-full mr-4 text-primary">
                                        <FaPhone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Phone</h4>
                                        <p className="text-gray-600">+91 9945634099</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-light p-3 rounded-full mr-4 text-primary">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Email</h4>
                                        <p className="text-gray-600">prartanajd1703@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Embed - Using placeholder for now */}
                                <iframe
                                    src="https://maps.google.com/maps?q=16.490847,74.769178&z=17&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>

                            {/* WhatsApp Button */}
                            <div className="mt-8">
                                <a
                                    href="https://wa.me/1234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition flex items-center justify-center font-bold text-lg w-full sm:w-auto"
                                >
                                    <FaWhatsapp className="mr-2" size={24} /> Chat on WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-light p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 text-secondary">Send a Message</h3>

                            {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">{success}</div>}
                            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full bg-primary text-white py-3 rounded-md font-bold transition duration-300 flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-700'}`}
                                >
                                    {loading ? 'Sending...' : <><FaPaperPlane className="mr-2" /> Send Message</>}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
