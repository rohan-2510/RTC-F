const Schedule = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-secondary text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Class Schedule</h1>
                    <p className="text-xl text-gray-300">Join us for our regular training sessions.</p>
                </div>
            </section>

            <section className="py-16 bg-light flex-grow">
                <div className="container mx-auto px-4">
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        We offer both morning and evening classes to fit your schedule.
                    </p>

                    <div className="max-w-4xl mx-auto">
                        {/* Weekday Schedule */}
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-t-4 border-red-600">
                            <div className="flex items-center justify-center mb-6">
                                <div className="bg-red-600 text-white rounded-full p-3 mr-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Monday to Saturday</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Morning Session */}
                                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-6 border-l-4 border-orange-500">
                                    <div className="flex items-center mb-4">
                                        <svg className="w-8 h-8 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        <h3 className="text-xl font-bold text-gray-800">Morning Session</h3>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-4xl font-bold text-orange-600">6:00 AM - 7:00 AM</p>
                                        <p className="text-gray-600 mt-2">1 Hour</p>
                                    </div>
                                </div>

                                {/* Evening Session */}
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-600">
                                    <div className="flex items-center mb-4">
                                        <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                        <h3 className="text-xl font-bold text-gray-800">Evening Session</h3>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-4xl font-bold text-blue-600">6:00 PM - 7:30 PM</p>
                                        <p className="text-gray-600 mt-2">1.5 Hours</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 bg-gray-50 rounded-lg p-4">
                                <p className="text-center text-gray-700">
                                    <span className="font-semibold">Note:</span> Both sessions are available Monday through Saturday. Choose the time that works best for you!
                                </p>
                            </div>
                        </div>

                        {/* Sunday Holiday */}
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-lg p-8 text-white">
                            <div className="flex items-center justify-center mb-4">
                                <svg className="w-10 h-10 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h2 className="text-3xl font-bold">Sunday</h2>
                            </div>
                            <p className="text-center text-2xl font-semibold">Holiday - Rest &amp; Recovery</p>
                            <p className="text-center mt-3 text-green-100">
                                Take time to rest and let your body recover. We'll see you on Monday!
                            </p>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                            <div className="flex items-start">
                                <svg className="w-6 h-6 text-red-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-2">Important Information</h3>
                                    <ul className="text-gray-700 space-y-1">
                                        <li>• Please arrive 10 minutes early for warm-up</li>
                                        <li>• Bring your own water bottle</li>
                                        <li>• Wear appropriate training gear</li>
                                        <li>• Contact us for trial class bookings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Schedule;
