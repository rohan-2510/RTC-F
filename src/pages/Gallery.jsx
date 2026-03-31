import { useState } from 'react';

// Dynamically import all images from the public/gallery folder
const imageModules = import.meta.glob('/public/gallery/*.{jpeg,jpg,png,gif,webp,svg,JPG,JPEG,PNG}', { eager: true });

const images = Object.keys(imageModules).map((filePath, index) => {
    // Convert the file path to a valid public URL
    const publicUrl = filePath.replace('/public', '');
    return {
        id: `gallery-img-${index}`,
        imageUrl: publicUrl,
        title: `Gallery Image ${index + 1}`
    };
});

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-secondary text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
                    <p className="text-xl text-gray-300">Moments from our training and events.</p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 bg-light flex-grow">
                <div className="container mx-auto px-4">
                    {images.length === 0 ? (
                        <div className="text-center py-20 text-gray-500">
                            <p className="text-xl">Photos coming soon!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {images.map((img) => (
                                <div
                                    key={img.id}
                                    className="group relative overflow-hidden rounded-lg shadow-md border-2 border-gray-100 aspect-square bg-gray-50 cursor-pointer"
                                    onClick={() => setSelectedImage(img.imageUrl)}
                                >
                                    <img
                                        src={img.imageUrl}
                                        alt={img.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                                        onError={(e) => { e.target.onerror = null; e.target.src = '/logo1.png'; }}
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300"></div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Zoom Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl max-h-screen w-full flex justify-center">
                        <button
                            className="absolute top-2 right-2 md:-top-10 md:-right-10 text-white text-4xl hover:text-gray-300 z-50 cursor-pointer"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage}
                            alt="Zoomed"
                            className="max-w-full max-h-[90vh] object-contain rounded"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
