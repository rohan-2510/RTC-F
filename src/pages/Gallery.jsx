import { useState, useEffect } from 'react';
import api from '../utils/api';
import { FaSpinner } from 'react-icons/fa';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const res = await api.get('/public/gallery');
                setImages(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchGallery();
    }, []);

    const categories = ['All', ...new Set(images.map(img => img.category))];

    const filteredImages = filter === 'All'
        ? images
        : images.filter(img => img.category === filter);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <FaSpinner className="animate-spin text-4xl text-primary" />
            </div>
        );
    }

    return (
        <div className="bg-light min-h-screen">
            {/* Header */}
            <section className="bg-secondary text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
                    <p className="text-xl text-gray-300">Moments from our training and events.</p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center mb-12 gap-4">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full font-semibold transition ${filter === cat
                                        ? 'bg-primary text-white shadow-md'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredImages.map((img) => (
                            <div key={img._id} className="group relative overflow-hidden rounded-lg shadow-md aspect-square bg-gray-200">
                                <img
                                    src={img.imageUrl}
                                    alt={img.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
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

                    {filteredImages.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            <p className="text-xl">No photos found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Gallery;
