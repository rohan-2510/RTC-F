import { useState } from 'react';
import { FaImages, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Dynamically import all images from the src/gallery folder
const imageModules = import.meta.glob('/src/gallery/*.{jpeg,jpg,png,gif,webp,svg,JPG,JPEG,PNG}', { eager: true, import: 'default' });

const images = Object.keys(imageModules).map((filePath, index) => {
    return {
        id: `gallery-img-${index}`,
        imageUrl: imageModules[filePath],
        title: `Gallery Image ${index + 1}`
    };
});

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openImage = (index) => setSelectedIndex(index);
    const closeModal = () => setSelectedIndex(null);
    const goNext = () => setSelectedIndex((prev) => (prev + 1) % images.length);
    const goPrev = () => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="flex flex-col min-h-screen mt-8">
            {/* Header */}
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-display">Photo Gallery</h1>
                    <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
                </div>

            {/* Gallery Grid */}
            <section className="py-16 bg-light flex-grow">
                <div className="container mx-auto px-4">
                    {images.length === 0 ? (
                        <div className="text-center py-20 text-gray-400">
                            <FaImages className="text-6xl mx-auto mb-4 text-gray-300" />
                            <p className="text-xl font-medium">Photos coming soon!</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                                {images.map((img, index) => (
                                    <div
                                        key={img.id}
                                        className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl border border-gray-100 aspect-square bg-white cursor-pointer transition-all duration-500 hover:-translate-y-1"
                                        onClick={() => openImage(index)}
                                    >
                                        <img
                                            src={img.imageUrl}
                                            alt={img.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            onError={(e) => { e.target.onerror = null; e.target.src = '/logo1.png'; }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Lightbox Modal with Navigation */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                    onClick={closeModal}
                >
                    <div className="relative max-w-5xl max-h-screen w-full flex justify-center items-center">
                        {/* Close button */}
                        <button
                            className="absolute -top-2 right-0 md:-top-12 md:-right-2 text-white/70 hover:text-white text-3xl z-50 cursor-pointer bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                            onClick={closeModal}
                            aria-label="Close modal"
                        >
                            <FaTimes />
                        </button>

                        {/* Previous */}
                        <button
                            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-xl z-50 cursor-pointer bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-all"
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                            aria-label="Previous image"
                        >
                            <FaChevronLeft />
                        </button>

                        {/* Image */}
                        <img
                            src={images[selectedIndex].imageUrl}
                            alt={images[selectedIndex].title}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Next */}
                        <button
                            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-xl z-50 cursor-pointer bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-all"
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                            aria-label="Next image"
                        >
                            <FaChevronRight />
                        </button>

                        {/* Counter */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
                            {selectedIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
