const images = [
    // Add your image URLs here, for example:
    // { id: 1, imageUrl: 'https://your-bucket.s3.amazonaws.com/photo1.jpg', title: 'Training Session', category: 'Training' },
    { id: 1, imageUrl: 'https://i.imgur.com/hcEuEBC.jpeg', title: 'Sarkar', category: 'Taekwondo' }
];

const Gallery = () => {
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {images.map((img) => (
                                <div key={img.id} className="group relative overflow-hidden rounded-lg shadow-md aspect-square bg-gray-200">
                                    <img
                                        src={img.imageUrl}
                                        alt={img.title}
                                        className="w-full h-center object-cover transform group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-end">
                                        <div className="p-4 w-full translate-y-full group-hover:translate-y-0 transition duration-300">
                                            <h3 className="text-white font-bold text-lg">{img.title}</h3>
                                            <p className="text-gray-300 text-sm">{img.category}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Gallery;
