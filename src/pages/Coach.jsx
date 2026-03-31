import React from 'react';
import { FaGraduationCap, FaMedal, FaTrophy, FaHandshake, FaQuoteLeft } from 'react-icons/fa';

const Coach = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Banner */}
            <section className="bg-white py-20 md:py-28 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, #DC2626 1px, transparent 1px), radial-gradient(circle at 80% 50%, #DC2626 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }} />

                <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
                    {/* The 3 Images Horizontal Container */}
                    <div className="flex flex-row justify-center gap-4 md:gap-12 lg:gap-20 mb-10 w-full max-w-7xl flex-wrap sm:flex-nowrap">
                        {[
                            "/Coach.jpeg",
                            "/coach3.jpeg",
                            "/coach2.jpeg"
                        ].map((src, idx) => (
                            <div key={idx} className="relative group">
                                <img
                                    src={src}
                                    alt={`Master Jaidipp Desae ${idx + 1}`}
                                    className="h-56 md:h-[400px] w-auto rounded-xl border-2 border-gray-200 object-contain shadow-lg transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:border-primary/40"
                                    onError={(e) => { e.target.onerror = null; e.target.src = '/logo1.png'; }}
                                />
                                {/* Reflection effect */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
                            </div>
                        ))}
                    </div>

                    {/* Formatted Text Centered Below */}
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-3 uppercase tracking-tight text-secondary font-display">Master Jaidipp Desae</h1>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-px w-12 bg-primary/40" />
                        <p className="text-xl md:text-2xl text-primary font-bold tracking-wider">3rd Dan Black Belt</p>
                        <div className="h-px w-12 bg-primary/40" />
                    </div>

                    <blockquote className="mt-4 max-w-2xl bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 relative">
                        <FaQuoteLeft className="text-primary/15 text-5xl absolute top-4 left-6" />
                        <p className="italic text-xl text-gray-600 leading-relaxed relative z-10">
                            "My mission is to empower every student with the skills, discipline, and confidence to succeed both on and off the mat."
                        </p>
                        <footer className="text-sm font-bold text-secondary not-italic mt-5 flex items-center justify-center gap-2">
                            <div className="w-8 h-px bg-primary" />
                            Master Jaidipp Desae
                        </footer>
                    </blockquote>
                </div>
            </section>

            {/* Bio Section */}
            <section className="py-16 md:py-20 bg-light">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-3xl font-bold text-secondary mb-6 font-display">
                            The Journey
                            <div className="w-16 h-1 bg-primary rounded-full mt-3" />
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Master Jaidipp Desae is the heart and soul of the Raibag Taekwondo Center. With over 15 years of dedicated teaching experience, he has trained thousands of students ranging from absolute beginners to national-level competitors.
                        </p>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            His philosophy blends the ancient, disciplined art of traditional Taekwondo with modern sports science, ensuring every student develops physical power alongside unshakeable mental fortitude.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
                            <CredentialCard icon={<FaGraduationCap />} title="WTF Certified" desc="World Taekwondo Federation globally certified Instructor." />
                            <CredentialCard icon={<FaTrophy />} title="National Level" desc="Former National Level Competitor with multiple accolades." />
                            <CredentialCard icon={<FaHandshake />} title="Youth Development" desc="Specializes in building unparalleled confidence in children and teens." />
                            <CredentialCard icon={<FaMedal />} title="15+ Years" desc="Decades of dedicated coaching and martial arts leadership experience." />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const CredentialCard = ({ icon, title, desc }) => (
    <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 group">
        <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 rounded-xl text-primary text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-secondary text-lg mb-1">{title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default Coach;
