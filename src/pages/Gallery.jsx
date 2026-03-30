const existingImages = [
    { id: 'g1', imageUrl: '/gallery1.jpeg', title: 'Action Shot', category: 'Training' },
    { id: 'g2', imageUrl: '/gallery2.jpeg', title: 'Sparring', category: 'Competition' },
    { id: 'g3', imageUrl: '/gallery3.jpeg', title: 'Form Practice', category: 'Technique' },
    { id: 'g4', imageUrl: '/gallery4.jpeg', title: 'Group Class', category: 'Academy' },
    { id: 1, imageUrl: '/1.jpeg', title: 'Academy Moment', category: 'Training' },
    { id: 2, imageUrl: '/2.jpeg', title: 'Academy Moment', category: 'Training' },
    { id: 3, imageUrl: '/3.jpeg', title: 'Academy Moment', category: 'Training' },
    { id: 4, imageUrl: '/4.jpeg', title: 'Academy Moment', category: 'Training' },
    { id: 5, imageUrl: '/5.jpeg', title: 'Academy Moment', category: 'Training' },
    { id: 6, imageUrl: '/6.jpeg', title: 'Academy Moment', category: 'Training' },
    { id: 7, imageUrl: '/7.jpeg', title: 'Academy Moment', category: 'Training' },
    { id: 8, imageUrl: '/8.jpeg', title: 'Academy Moment', category: 'Training' },
    { id: 9, imageUrl: '/9.jpeg', title: 'Academy Moment', category: 'Training' },
    { id: 10, imageUrl: '/10.jpeg', title: 'Academy Moment', category: 'Training' },
    { id: 11, imageUrl: '/11.jpeg', title: 'Academy Moment', category: 'Training' },
];

const galleryFolderFiles = [
    "WhatsApp Image 2026-03-30 at 8.04.49 PM.jpeg",
    "WhatsApp Image 2026-03-30 at 8.04.50 PM (1).jpeg",
    "WhatsApp Image 2026-03-30 at 8.04.50 PM (2).jpeg",
    "WhatsApp Image 2026-03-30 at 8.04.50 PM (3).jpeg",
    "WhatsApp Image 2026-03-30 at 8.04.50 PM.jpeg",
    "WhatsApp Image 2026-03-30 at 8.04.51 PM (1).jpeg",
    "WhatsApp Image 2026-03-30 at 8.04.51 PM (2).jpeg",
    "WhatsApp Image 2026-03-30 at 8.04.51 PM (3).jpeg",
    "WhatsApp Image 2026-03-30 at 8.04.51 PM.jpeg",
    "WhatsApp Image 2026-03-30 at 8.04.52 PM (1).jpeg",
    "WhatsApp Image 2026-03-30 at 8.04.52 PM (2).jpeg",
    "WhatsApp Image 2026-03-30 at 8.04.52 PM.jpeg",
    "WhatsApp Image 2026-03-30 at 8.04.53 PM (1).jpeg",
    "WhatsApp Image 2026-03-30 at 8.04.53 PM (2).jpeg",
    "WhatsApp Image 2026-03-30 at 8.04.53 PM.jpeg"
].map((filename, index) => ({
    id: `folder-${index}`,
    imageUrl: `/gallery/${filename}`,
    title: 'Training Details',
    category: 'Gallery Edition'
}));

const images = [...existingImages, ...galleryFolderFiles];

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
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {images.map((img) => (
                                <div key={img.id} className="group relative overflow-hidden rounded-lg shadow-md border-2 border-gray-100 aspect-square bg-gray-50">
                                    <img
                                        src={img.imageUrl}
                                        alt={img.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                                        onError={(e) => { e.target.onerror = null; e.target.src = '/logo1.png'; }}
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
