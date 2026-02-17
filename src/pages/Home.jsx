import { Link } from 'react-router-dom';
import { FaFistRaised, FaHeart, FaBrain, FaChild, FaUserShield, FaMedal } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-secondary text-white py-20 lg:py-32 relative overflow-hidden">
                {/* Background Overlay or Image could go here */}
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white uppercase tracking-wider">
                        Raibag <span className="text-primary">Taekwondo</span> Center
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200">
                        Building Discipline, Strength & Confidence. Join the best martial arts training center in the city.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/register" className="btn-primary text-lg px-8 py-3">
                            Join Now
                        </Link>
                        <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-secondary transition duration-300 font-semibold text-lg">
                            Book Free Trial
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features / Why Choose Us */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="heading-section">Why Choose RTC?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-light rounded-lg shadow-sm hover:shadow-md transition">
                            <div className="text-primary text-5xl mb-4 flex justify-center"><FaFistRaised /></div>
                            <h3 className="text-xl font-bold mb-2">Self Defense</h3>
                            <p className="text-gray-600">Learn practical self-defense techniques to protect yourself and your loved ones.</p>
                        </div>
                        <div className="p-6 bg-light rounded-lg shadow-sm hover:shadow-md transition">
                            <div className="text-primary text-5xl mb-4 flex justify-center"><FaHeart /></div>
                            <h3 className="text-xl font-bold mb-2">Physical Fitness</h3>
                            <p className="text-gray-600">Improve your strength, flexibility, and cardiovascular health with our rigorous training.</p>
                        </div>
                        <div className="p-6 bg-light rounded-lg shadow-sm hover:shadow-md transition">
                            <div className="text-primary text-5xl mb-4 flex justify-center"><FaBrain /></div>
                            <h3 className="text-xl font-bold mb-2">Mental Discipline</h3>
                            <p className="text-gray-600">Develop focus, patience, and confidence that translates to all areas of life.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Preview */}
            <section className="py-16 bg-light">
                <div className="container mx-auto px-4">
                    <h2 className="heading-section">Our Programs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ProgramCard
                            icon={<FaChild />}
                            title="Kids Program"
                            desc="Fun and engaging classes for children aged 7-12, focusing on discipline and coordination."
                        />
                        <ProgramCard
                            icon={<FaUserShield />}
                            title="Teens & Adults"
                            desc="Comprehensive training for teens and adults to build strength and self-defense skills."
                        />
                        <ProgramCard
                            icon={<FaMedal />}
                            title="Summer Camp"
                            desc="An intensive taekwondo summer camp focused on skill development, discipline, fitness, and tournament preparation.Advanced training for those wishing to compete in local and national tournaments."
                        />
                    </div>
                </div>
            </section>

            {/* Coach Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="heading-section">Meet Our Head Coach</h2>
                    <div className="max-w-4xl mx-auto bg-light rounded-lg shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                            <div className="flex justify-center items-center">
                                <img
                                    src="/coach-photo.jpg"
                                    alt="Head Coach"
                                    className="rounded-lg shadow-md w-full h-auto object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-3xl font-bold mb-2 text-secondary">Master Jaiddip Desae</h3>
                                <p className="text-primary font-semibold mb-4">4th Dan Black Belt | Head Instructor</p>
                                <div className="space-y-3 text-gray-700">
                                    <p className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span>15+ years of teaching experience</span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span>Certified by World Taekwondo Federation (WTF)</span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span>Former National Level Competitor</span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span>Specialized in youth development and self-defense training</span>
                                    </p>
                                </div>
                                <p className="mt-4 text-gray-600 italic">
                                    "My mission is to empower every student with the skills, discipline, and confidence to succeed both on and off the mat."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-secondary text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
                        Student Stories
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Testimonial
                            text="RTC Taekwondo has changed my life. I more confident and focused."
                            author="Partana J Desae"
                            role="Student"
                        />
                        <Testimonial
                            text="Great instructors and a welcoming community. "
                            author="Karan J Desae"
                            role="Student"
                        />
                        <Testimonial
                            text="The discipline I learned here helped me achieve my black belt and excel in my career."
                            author="Emily R."
                            role="Alumni"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">Book a free trial class today and see the difference for yourself.</p>
                    <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 font-bold text-lg">
                        Get Started Today
                    </Link>
                </div>
            </section>
        </div>
    );
};

const ProgramCard = ({ icon, title, desc }) => (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition border-t-4 border-primary">
        <div className="text-4xl text-primary mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{desc}</p>
    </div>
);

const Testimonial = ({ text, author, role }) => (
    <div className="bg-dark p-6 rounded-lg text-gray-300 italic relative">
        <div className="text-4xl text-primary absolute top-4 left-4 opacity-30">"</div>
        <p className="mb-4 relative z-10">{text}</p>
        <div className="font-bold text-white not-italic">- {author}</div>
        <div className="text-sm text-gray-500 not-italic">{role}</div>
    </div>
);

export default Home;
