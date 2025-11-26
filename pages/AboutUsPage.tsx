import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import ImageLoader from '../components/ImageLoader';

// Icons for the values section
const TrustIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </svg>
);

const DiamondIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
    </svg>
);


const CommunityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const teamMembers = [
    {
        name: 'Asha Wanjiku',
        role: 'Lead Agent & Founder',
        imageUrl: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Feaefe252-6b13-48ca-9624-0185ae2d836a.png',
    },
    {
        name: 'Brian Kipchoge',
        role: 'Head of Operations',
        imageUrl: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fef913432-3ecb-4aa5-b505-98b5e5435e99.png',
    },
    {
        name: 'Fatima Njoroge',
        role: 'Client Relations Manager',
        imageUrl: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fcad3357b-86ac-4971-84ab-cf0f3275da24.png',
    },
];

const AboutUsPage: React.FC = () => {
    return (
        <div className="relative bg-brand-sand">
             <div 
                className="fixed inset-0 bg-cover bg-center -z-10" 
                style={{ backgroundImage: "url('https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/52c8cf7b-d497-43ef-a7f5-7922ba623ea7/segments/4:4:1/Lucid_Origin_Exterior_Image_Illustrate_a_modern_apartment_comp_3.jpg')"}}
                aria-hidden="true"
            >
              <div className="absolute inset-0 bg-brand-sand/30 backdrop-blur-sm"></div>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 relative">
                 <div className="max-w-4xl mx-auto opacity-0 animate-fadeInUp">
                    <BackButton className="mb-8" />

                    <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg space-y-16">
                        
                        {/* Header */}
                        <header className="text-center">
                            <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-4">Welcome to Nyumbani Spaces</h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                More than a platform, we are your partners in finding a place where you truly feel at home.
                            </p>
                        </header>

                        {/* Our Story Section */}
                        <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <h2 className="text-3xl font-bold text-brand-green">Our Story</h2>
                                <p>
                                    'Nyumbani' means 'at home' in Swahili, and that feeling is the foundation of our existence. We began with a simple mission: to transform the often-complex journey of finding a property in Kenya into an inspiring and seamless experience.
                                </p>
                                <p>
                                   Founded by a team of passionate real estate professionals and design enthusiasts, Nyumbani Spaces was created to celebrate the unique beauty of Kenyan architecture and connect people with spaces they'll love. We are committed to integrity, local expertise, and a deep appreciation for the meaning of 'home'.
                                </p>
                            </div>
                            <div className="rounded-lg shadow-xl overflow-hidden aspect-square">
                                <ImageLoader
                                    containerClassName="w-full h-full"
                                    src="https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/b9463e88-3fbc-4192-87c5-1d717adfced5/segments/4:4:1/Lucid_Origin_Living_Room_Image_Create_a_welcoming_living_room__3.jpg"
                                    alt="Modern Kenyan living room"
                                />
                            </div>
                        </section>
                        
                        {/* Our Values Section */}
                        <section>
                            <h2 className="text-3xl font-bold text-brand-green text-center mb-10">Our Core Values</h2>
                            <div className="grid sm:grid-cols-3 gap-8 text-center">
                                <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg">
                                    <TrustIcon />
                                    <h3 className="text-xl font-semibold text-brand-dark mb-2">Trust & Integrity</h3>
                                    <p className="text-gray-600">We build relationships on honesty and transparency, ensuring you feel secure every step of the way.</p>
                                </div>
                                <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg">
                                    <DiamondIcon />
                                    <h3 className="text-xl font-semibold text-brand-dark mb-2">Curated Quality</h3>
                                    <p className="text-gray-600">Every listing is carefully selected to meet our high standards, ensuring you only see the best.</p>
                                </div>
                                <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg">
                                    <CommunityIcon />
                                    <h3 className="text-xl font-semibold text-brand-dark mb-2">Community Focus</h3>
                                    <p className="text-gray-600">We are deeply rooted in Kenya, celebrating local talent and fostering a community of homeowners.</p>
                                </div>
                            </div>
                        </section>

                        {/* Meet the Team Section */}
                        <section>
                            <h2 className="text-3xl font-bold text-brand-green text-center mb-10">Meet Our Team</h2>
                            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 -mt-6">
                                The dedicated professionals ensuring your journey home is a remarkable one.
                            </p>
                            <div className="grid sm:grid-cols-3 gap-8">
                                {teamMembers.map((member) => (
                                    <div key={member.name} className="text-center group">
                                        <div className="relative w-32 h-32 mx-auto mb-4">
                                            <ImageLoader
                                                containerClassName="w-full h-full rounded-full shadow-lg"
                                                imageClassName="rounded-full"
                                                src={member.imageUrl}
                                                alt={member.name}
                                            />
                                            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-brand-green-light transition-all duration-300"></div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-brand-dark">{member.name}</h3>
                                        <p className="text-brand-green">{member.role}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;