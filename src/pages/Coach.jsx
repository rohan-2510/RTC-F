import React from 'react';
import { FaGraduationCap, FaMedal, FaTrophy, FaHandshake } from 'react-icons/fa';

const Coach = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Banner */}
            <section className="bg-white py-24 flex flex-col items-center justify-center relative shadow-sm border-b border-gray-100">
                <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
                    {/* The 3 Images Horizontal Container */}
                    <div className="flex flex-row justify-center gap-4 md:gap-20 mb-8 w-full max-w-7xl flex-wrap sm:flex-nowrap">
                        {[
                            "/Coach.jpeg",
                            "/coach3.jpeg",
                            "/coach2.jpeg"
                        ].map((src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt={`Master Jaidipp Desae ${idx + 1}`}
                                className="h-56 md:h-[400px] w-auto rounded-lg border-[3px] border-primary object-contain shadow-lg transition-transform duration-300 hover:-translate-y-2"
                                onError={(e) => { e.target.onerror = null; e.target.src = '/logo1.png'; }}
                            />
                        ))}
                    </div>
                    
                    {/* Formatted Text Centered Below */}
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2 uppercase tracking-tight text-secondary">Master Jaidipp Desae</h1>
                    <p className="text-xl md:text-2xl text-primary font-bold tracking-wider">4th Dan Black Belt</p>
                    <blockquote className="mt-12 bg-light p-8 rounded-xl shadow-inner border-l-4 border-primary italic text-xl text-gray-700">
                        "My mission is to empower every student with the skills, discipline, and confidence to succeed both on and off the mat."
                        <footer className="text-sm font-bold text-secondary not-italic mt-4">— Master Jaidipp Desae</footer>
                    </blockquote>
                </div>
            </section>

            {/* Bio Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-light p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-3xl font-bold text-secondary mb-6 border-b-4 border-primary pb-2 inline-block">The Journey</h2>
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                            Master Jaidipp Desae is the heart and soul of the Raibag Taekwondo Center. With over 15 years of dedicated teaching experience, he has trained thousands of students ranging from absolute beginners to national-level competitors.
                        </p>
                        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                            His philosophy blends the ancient, disciplined art of traditional Taekwondo with modern sports science, ensuring every student develops physical power alongside unshakeable mental fortitude.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-50 transition-all hover:-translate-y-1 hover:shadow-md">
                                <FaGraduationCap className="text-primary text-3xl shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-secondary text-lg">WTF Certified</h4>
                                    <p className="text-gray-600">World Taekwondo Federation globally certified Instructor.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-50 transition-all hover:-translate-y-1 hover:shadow-md">
                                <FaTrophy className="text-primary text-3xl shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-secondary text-lg">National Level</h4>
                                    <p className="text-gray-600">Former National Level Competitor with multiple accolades.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-50 transition-all hover:-translate-y-1 hover:shadow-md">
                                <FaHandshake className="text-primary text-3xl shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-secondary text-lg">Youth Development</h4>
                                    <p className="text-gray-600">Specializes in building unparalleled confidence in children and teens.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-50 transition-all hover:-translate-y-1 hover:shadow-md">
                                <FaMedal className="text-primary text-3xl shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-secondary text-lg">15+ Years</h4>
                                    <p className="text-gray-600">Decades of dedicated coaching and martial arts leadership experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Coach;
