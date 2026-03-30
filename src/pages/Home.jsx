import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFistRaised, FaHeart, FaBrain, FaChild, FaUserShield, FaMedal, FaChartLine, FaBullseye, FaUsers, FaUserTie, FaTrophy, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const heroImages = [
    '/slide1.jpeg',
    '/slide2.jpeg',
    '/slide3.jpeg',
    '/slide4.jpeg'
];

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 2000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-light relative min-h-[90vh] lg:min-h-[85vh] flex flex-col lg:block items-center overflow-hidden lg:pt-0">
                {/* Background Image Slider (Native ratio on mobile, Anchored right on desktop) */}
                <div className="relative w-full lg:absolute lg:top-0 lg:right-0 lg:w-[56%] lg:h-[85%] z-0 bg-light shadow-inner lg:shadow-none mb-8 lg:mb-0">

                    {/* Ghost image natively expands the parent container to the exact true height/width aspect ratio of the photos */}
                    <img src={heroImages[0]} alt="Spacer" className="w-full h-auto invisible block pointer-events-none lg:hidden" />

                    {heroImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <img
                                src={image}
                                alt={`Hero Background ${index + 1}`}
                                className="w-full h-full object-cover lg:object-fill opacity-100"
                            />
                        </div>
                    ))}
                </div>

                <div className="container mx-auto px-4 relative z-10 pt-8 pb-28 lg:py-32 flex flex-col lg:block">
                    {/* Text block (Flows naturally on mobile, contained to left on desktop) */}
                    <div className="w-full lg:w-3/5 xl:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left z-10 lg:-translate-y-32">
                        <img src="/logo1.png" alt="Logo" className="h-32 md:h-36 mb-0 drop-shadow-md transition-transform hover:scale-105 translate-x-2 sm:translate-x-0 lg:-translate-x-6" />
                        <h3 className="text-primary font-extrabold mb-2 uppercase tracking-wider drop-shadow-sm">Welcome to</h3>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-secondary uppercase drop-shadow-sm">
                            Raibag <span className="text-primary">Taekwondo</span> Center
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-lg leading-relaxed drop-shadow-sm">
                            Building Discipline, Strength &amp; Confidence. Join the best martial arts training center in the city.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 mb-12">
                            <Link to="/contact" className="btn-primary text-lg px-8 py-3 shadow hover:shadow-primary/50">
                                Join Now
                            </Link>
                            <a href="#programs" className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-md hover:bg-primary hover:text-white transition duration-300 font-semibold text-lg shadow">
                                Explore Programs
                            </a>
                            <Link to="/coach" className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-md hover:bg-primary hover:text-white transition duration-300 font-semibold text-lg shadow">
                                Know your Coach
                            </Link>

                        </div>

                        {/* Stats Cards & Social Links */}
                        <div className="flex flex-row justify-center lg:justify-start items-center gap-2 sm:gap-6 w-full mt-4 flex-wrap sm:flex-nowrap">
                            <div className="bg-white px-3 sm:px-5 py-3 rounded-lg shadow-md flex items-center gap-2 sm:gap-3 border border-gray-100 min-w-fit">
                                <FaBullseye className="text-primary text-xl drop-shadow-sm" />
                                <p className="text-gray-600 text-xs font-semibold whitespace-nowrap tracking-wide"><span className="text-secondary font-extrabold text-base sm:text-lg mr-1">500+</span> Students</p>
                            </div>

                            {/* Social Media Links */}
                            <div className="flex items-center space-x-4 sm:space-x-8 bg-white/80 backdrop-blur-sm px-3 sm:px-5 py-3 rounded-lg border border-gray-100 shadow-sm">
                                <a href="https://www.facebook.com/share/17sTqNP3id/" aria-label="Facebook" className="text-[#1877F2] transition-colors transform hover:scale-110"><FaFacebook size={31} /></a>
                                <a href="https://www.instagram.com/raibag_taekwondo_center?igsh=eDJhMG1iMnE5eTRv" aria-label="Instagram" className="text-[#E4405F] transition-colors transform hover:scale-110"><FaInstagram size={31} /></a>
                                <a href="https://youtube.com/@raibagtaekwondocentre?si=BY98ZSDtxUB2blx2" aria-label="YouTube" className="text-[#FF0000] transition-colors transform hover:scale-110"><FaYoutube size={31} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating Impact Stats Banner */}
            <section className="relative -mt-16 z-30 px-4">
                <div className="container mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 divide-x-0 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gray-100">
                            <div className="flex flex-col items-center justify-center text-center group cursor-default pt-4 lg:pt-0">
                                <div className="bg-red-50 text-primary w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                    <FaUsers />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-extrabold text-secondary mb-1 tracking-tight">1,500<span className="text-primary">+</span></h3>
                                <p className="text-gray-500 font-bold uppercase tracking-wider text-xs md:text-sm">Kids Trained</p>
                            </div>

                            <div className="flex flex-col items-center justify-center text-center group cursor-default pt-4 lg:pt-0">
                                <div className="bg-red-50 text-primary w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                    <FaUserTie />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-extrabold text-secondary mb-1 tracking-tight">1<span className="text-primary"></span></h3>
                                <p className="text-gray-500 font-bold uppercase tracking-wider text-xs md:text-sm">Professional Coach</p>
                            </div>

                            <div className="flex flex-col items-center justify-center text-center group cursor-default pt-4 lg:pt-0">
                                <div className="bg-red-50 text-primary w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                    <FaTrophy />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-extrabold text-secondary mb-1 tracking-tight">15<span className="text-primary">+</span></h3>
                                <p className="text-gray-500 font-bold uppercase tracking-wider text-xs md:text-sm">Years Experience</p>
                            </div>
                        </div>
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
            <section id="programs" className="py-16 bg-light">
                <div className="container mx-auto px-4">
                    <h2 className="heading-section">Our Programs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ProgramCard image="/Children.jpeg" icon={<FaChild />} title="Kids Program" desc="Fun and engaging classes for children aged 7-12, focusing on discipline and coordination." />
                        <ProgramCard image="/Teens.jpeg" icon={<FaUserShield />} title="Teens & Adults" desc="Comprehensive training for teens and adults to build strength and self-defense skills." />
                        <ProgramCard image="/Camp.jpeg" icon={<FaMedal />} title="Summer Camp" desc="An intensive taekwondo summer camp focused on skill development, discipline, fitness, and tournament preparation." />
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
                        <Testimonial text="RTC Taekwondo has changed my life. I am more confident and focused." author="Partana J Desae" role="Student" />
                        <Testimonial text="Great instructors and a welcoming community." author="Karan J Desae" role="Student" />
                        <Testimonial text="The discipline I learned here helped me achieve my black belt and excel in my career." author="Emily R." role="Alumni" />
                    </div>
                </div>
            </section>

        </div>
    );
};

const ProgramCard = ({ image, icon, title, desc }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden border-t-4 border-primary group flex flex-col h-full relative">
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
            {image ? (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
            ) : null}
            {/* Fallback explicit text when image fails or isn't there */}
            <div className="absolute inset-0 flex-col items-center justify-center text-gray-400 bg-gray-100 hidden">
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-300 border-2 border-dashed border-gray-300 p-2 rounded">Replace With Image</span>
            </div>

            {/* Icon Floating Badge */}
            <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg text-primary text-2xl z-10 transition-transform duration-300 group-hover:-translate-y-1">
                {icon}
            </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-3 text-secondary">{title}</h3>
            <p className="text-gray-600 mb-4">{desc}</p>
        </div>
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
