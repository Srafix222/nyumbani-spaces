
import React, { useState } from 'react';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

interface PropertyPhoto {
    url: string;
    description: string;
}

const ListPropertyPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [propertyPhotos, setPropertyPhotos] = useState<PropertyPhoto[]>([]);
    const [newPhotoUrl, setNewPhotoUrl] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send data and propertyPhotos to an API.
        console.log("Submitting property with photos:", propertyPhotos);
        setSubmitted(true);
    };
    
    const handleAddPhotoUrl = () => {
        if (newPhotoUrl.trim() && (newPhotoUrl.startsWith('http://') || newPhotoUrl.startsWith('https://'))) {
            try {
                // Basic URL validation
                new URL(newPhotoUrl.trim());
                setPropertyPhotos(prev => [...prev, { url: newPhotoUrl.trim(), description: '' }]);
                setNewPhotoUrl("");
            } catch (error) {
                alert("Please enter a valid image URL.");
            }
        } else {
            alert("Please enter a valid image URL starting with http:// or https://.");
        }
    };

    const handleRemoveImage = (urlToRemove: string) => {
        setPropertyPhotos(prev => prev.filter(p => p.url !== urlToRemove));
    };

    const handleDescriptionChange = (urlToUpdate: string, newDescription: string) => {
        setPropertyPhotos(prev => prev.map(p => p.url === urlToUpdate ? { ...p, description: newDescription } : p));
    };


    if (submitted) {
        return (
            <div className="container mx-auto px-4 py-10 md:py-16">
                <div className="max-w-2xl mx-auto text-left">
                  <BackButton className="mb-8" />
                </div>
                <div className="bg-white p-12 rounded-lg shadow-lg max-w-2xl mx-auto opacity-0 animate-fadeInUp text-center">
                    <h1 className="text-3xl font-bold text-brand-green mb-4">Thank You!</h1>
                    <p className="text-gray-700 text-lg">Your property submission has been received. One of our agents will review the details and get in touch with you shortly.</p>
                </div>
            </div>
        );
    }

    const inputClasses = "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-green-light focus:border-brand-green-light sm:text-sm";
    const labelClasses = "block text-sm font-medium text-gray-700";

    return (
        <div>
            <div className="relative bg-gray-800 text-white py-20 rounded-b-lg overflow-hidden opacity-0 animate-fadeInUp">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.leonardo.ai/users/80f603df-4ae4-462c-8628-693ff5c5023c/generations/e9f26072-1025-4016-a617-c7453317737e/segments/3:4:1/Lucid_Origin_Design_an_inviting_and_upscale_image_of_a_luxurio_2.jpg')" }}></div>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">List Your Property</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">Ready to sell? Fill out the form below, and we'll help you find the right buyer.</p>
                </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                <div className="max-w-3xl mx-auto">
                    <BackButton className="mb-8" />

                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6 opacity-0 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                        {/* ... other form fields ... */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className={labelClasses}>Full Name</label>
                                <input type="text" name="name" id="name" required className={inputClasses} />
                            </div>
                            <div>
                                <label htmlFor="email" className={labelClasses}>Email Address</label>
                                <input type="email" name="email" id="email" required className={inputClasses} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                            <input type="tel" name="phone" id="phone" required className={inputClasses} />
                        </div>
                        <div>
                            <label htmlFor="address" className={labelClasses}>Property Address</label>
                            <input type="text" name="address" id="address" required className={inputClasses} placeholder="e.g., Argwings Kodhek Rd, Kilimani"/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="type" className={labelClasses}>Property Type</label>
                                <select id="type" name="type" required className={inputClasses}>
                                    <option>Apartment</option>
                                    <option>Bungalow</option>
                                    <option>Maisonette</option>
                                    <option>Villa</option>
                                    <option>Land</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="price" className={labelClasses}>Asking Price (KES)</label>
                                <input type="number" name="price" id="price" required className={inputClasses} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="description" className={labelClasses}>Property Description</label>
                            <textarea name="description" id="description" rows={4} required className={inputClasses} placeholder="Tell us more about your property..."></textarea>
                        </div>

                        <div>
                            <label className={labelClasses}>Property Photos</label>
                            <div className="mt-2 p-4 border-2 border-dashed border-gray-300 rounded-lg space-y-4">
                                {propertyPhotos.length > 0 && (
                                    <div className="space-y-4">
                                        {propertyPhotos.map((photo, index) => (
                                            <div key={index} className="flex gap-4 items-start">
                                                <div className="relative group w-24 h-24 flex-shrink-0">
                                                    <img src={photo.url} alt={`Property preview ${index + 1}`} className="w-full h-full object-cover rounded-md bg-gray-200" />
                                                    <button 
                                                        type="button"
                                                        onClick={() => handleRemoveImage(photo.url)}
                                                        className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                        aria-label="Remove image"
                                                    >
                                                        <CloseIcon className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <div className="flex-grow">
                                                    <textarea
                                                        value={photo.description}
                                                        onChange={(e) => handleDescriptionChange(photo.url, e.target.value)}
                                                        rows={3}
                                                        className={inputClasses + ' mt-0'}
                                                        placeholder="Add a short description for this image..."
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                
                                <div>
                                    <label htmlFor="photoUrl" className={`${labelClasses} text-xs`}>Image URL</label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input 
                                            type="url" 
                                            id="photoUrl" 
                                            value={newPhotoUrl}
                                            onChange={(e) => setNewPhotoUrl(e.target.value)}
                                            className={inputClasses + " flex-1 !mt-0 !rounded-r-none"}
                                            placeholder="https://example.com/image.jpg"
                                            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddPhotoUrl(); }}}
                                        />
                                        <Button 
                                            type="button" 
                                            variant="secondary" 
                                            onClick={handleAddPhotoUrl} 
                                            className="!rounded-l-none"
                                        >
                                            Add Photo
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Button type="submit" size="lg" className="w-full">
                                Submit Property for Review
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ListPropertyPage;