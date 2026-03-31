import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaHeadset } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-3 bg-black/10 backdrop-blur-sm px-5 py-2 rounded-full mb-6 mt-4">
                        <FaHeadset className="text-primary" />
                        <span className="text-sm font-bold tracking-wider uppercase text-white-300">Get in Touch</span>
                    </div>
                    <p className="text-xl font-bold text-black-400 max-w-md mx-auto">We'd love to hear from you</p>
                    <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-6" />
                </div>

            <section className="py-16 md:py-20 bg-white flex-grow">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                            {/* Left: Contact Info + WhatsApp */}
                            <div className="space-y-5">
                                <ContactItem
                                    icon={<FaMapMarkerAlt />}
                                    title="Our Location"
                                    detail="Mahadev Mangal Karyalay, Siddheshwar Galli, Raibag-591317"
                                />
                                <ContactItem
                                    icon={<FaPhone />}
                                    title="Phone"
                                    detail="+91 9945634099"
                                    href="tel:+919945634099"
                                />
                                <ContactItem
                                    icon={<FaEnvelope />}
                                    title="Email"
                                    detail="prartanajd1703@gmail.com"
                                    href="mailto:prartanajd1703@gmail.com"
                                />

                                {/* WhatsApp Button */}
                                <div className="pt-4">
                                    <a
                                        href="https://wa.me/919945634099"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#25D366] text-white px-6 py-3.5 rounded-xl hover:bg-[#1DA851] transition-all duration-300 flex items-center justify-center font-bold text-lg w-full sm:w-auto shadow-lg shadow-green-500/20 hover:shadow-green-500/40 active:scale-[0.97] group"
                                    >
                                        <FaWhatsapp className="mr-3 group-hover:scale-110 transition-transform" size={24} /> Chat on WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* Right: Map */}
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.460817385956!2d74.76777360000001!3d16.4910221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0c5002ac906e5%3A0xd2d2fa73fe7de92f!2sRaibag%20Taekwondo%20Centre%20-%20RTC!5e0!3m2!1sen!2sin!4v1743537987259!5m2!1sen!2sin"
                                    width="100%"
                                    height="420"
                                    style={{ border: 0 }}
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

const ContactItem = ({ icon, title, detail, href }) => (
    <div className="flex items-start group p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
        <div className="bg-gradient-to-br from-red-50 to-red-100 p-3.5 rounded-xl mr-4 text-primary text-lg group-hover:scale-110 transition-transform duration-300 shadow-sm">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-secondary text-lg mb-0.5">{title}</h4>
            {href ? (
                <a href={href} className="text-gray-500 hover:text-primary transition-colors">{detail}</a>
            ) : (
                <p className="text-gray-500">{detail}</p>
            )}
        </div>
    </div>
);

export default Contact;
