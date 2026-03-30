import React, { useState } from 'react';
import { FaUserNinja, FaTimes } from 'react-icons/fa';

const CoachWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleWidget = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Coach Details Popup */}
            {isOpen && (
                <div className="bg-white rounded-xl shadow-2xl mb-4 p-8 w-96 md:w-[450px] border-t-4 border-primary transition-all duration-300 transform origin-bottom-right">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-secondary">Meet Our Head Coach</h3>
                        <button onClick={toggleWidget} className="text-gray-400 hover:text-primary transition">
                            <FaTimes size={24} />
                        </button>
                    </div>

                    <div className="flex flex-col items-center mb-6">
                        <img
                            src="/Coach.jpeg"
                            alt="Head Coach"
                            className="w-32 h-32 rounded-full border-4 border-primary object-cover object-top mb-4 shadow-md"
                            onError={(e) => { e.target.onerror = null; e.target.src = '/coach-photo-placeholder.txt'; }} // Fallback if image doesn't exist on all paths
                        />
                        <h4 className="text-xl font-extrabold text-secondary">Master Jaidipp Desae</h4>
                        <p className="text-primary text-base font-semibold">4th Dan Black Belt</p>
                    </div>

                    <div className="space-y-3 text-gray-700 text-base mb-6 font-medium">
                        <p className="flex items-start"><span className="text-primary mr-2">•</span><span>15+ yrs teaching experience</span></p>
                        <p className="flex items-start"><span className="text-primary mr-2">•</span><span>WTF Certified Instructor</span></p>
                        <p className="flex items-start"><span className="text-primary mr-2">•</span><span>National Level Competitor</span></p>
                    </div>
                    <div className="bg-light p-4 rounded italic text-sm text-gray-600 border-l-4 border-primary">
                        "Empowering students with skills, discipline, and confidence on and off the mat."
                    </div>
                </div>
            )}

            {/* Circular Toggle Button */}
            <button
                onClick={toggleWidget}
                className="bg-primary hover:bg-black text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center focus:outline-none ring-4 ring-white"
                title="View Head Coach Details"
            >
                {isOpen ? <FaTimes size={28} /> : <FaUserNinja size={28} />}
            </button>
        </div>
    );
};

export default CoachWidget;
