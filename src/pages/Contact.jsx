import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
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
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                            {/* Left: Contact Info + WhatsApp */}
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-light p-3 rounded-full mr-4 text-primary">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Our Location</h4>
                                        <p className="text-gray-600">Mahadev Mangal Karyalay, Siddheshwar Galli, Raibag-591317</p>
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

                                {/* WhatsApp Button */}
                                <div className="pt-2">
                                    <a
                                        href="https://wa.me/919945634099"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition flex items-center justify-center font-bold text-lg w-full sm:w-auto"
                                    >
                                        <FaWhatsapp className="mr-2" size={24} /> Chat on WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* Right: Map */}
                            <div>
                                <iframe
                                    src="https://maps.google.com/maps?q=16.490847,74.769178&z=17&output=embed"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0, borderRadius: '8px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
