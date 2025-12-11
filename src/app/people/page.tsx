'use client';

import { useState, useEffect } from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import the heavy D3 component
const ForceNetworkGraph = dynamic(() => import('../../components/ForceNetworkGraph'), {
    loading: () => <div className="flex items-center justify-center h-96"><p className="text-gray-500">Loading network graph...</p></div>,
    ssr: false
});

interface Person {
    id: string;
    name: string;
    designation: string;
    description: string;
    picture: string;
    email: string;
    isLead: boolean;
}

export default function People() {
    const [people, setPeople] = useState<Person[]>([]);
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const response = await fetch('./data/people.json');
                const data = await response.json();
                setPeople(data);
            } catch (error) {
                console.error('Error fetching people:', error);
            }
        };

        fetchPeople();
    }, []);

    return (
        <LazyMotion features={domAnimation}>
            <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
                            Our People
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Meet the passionate researchers and developers working to make AI sustainable for India.
                        </p>
                    </m.div>

                    {/* D3 Force Network Graph (Visible on medium screens and up) */}
                    <div className="hidden md:block">
                        <ForceNetworkGraph
                            people={people}
                            onPersonClick={setSelectedPerson}
                            width={800}
                            height={600}
                        />
                    </div>

                    {/* Mobile-friendly grid view (Visible on small screens) */}
                    <div className="grid grid-cols-1 gap-8 md:hidden">
                        {people.map((person) => (
                            <m.div
                                key={person.id}
                                className="text-center cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setSelectedPerson(person)}
                            >
                                <div className={`w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg border-4 ${person.isLead ? 'border-green-600' : 'border-gray-200'} mb-3`}>
                                    <Image
                                        src={person.picture}
                                        alt={person.name}
                                        width={96}
                                        height={96}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="font-medium text-gray-900">{person.name}</p>
                                <p className="text-sm text-orange-600">{person.designation}</p>
                            </m.div>
                        ))}
                    </div>

                    {/* Person Detail Modal */}
                    <AnimatePresence>
                        {selectedPerson && (
                            <m.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center z-50"
                                onClick={() => setSelectedPerson(null)}
                            >
                                <m.div
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "100%", opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="bg-white rounded-t-3xl sm:rounded-2xl max-w-2xl w-full sm:my-auto max-h-[100vh] sm:max-h-[80vh] overflow-y-auto shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="p-4 sm:p-8">
                                        <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6">
                                            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 w-full">
                                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-lg border-4 flex-shrink-0">
                                                    <Image
                                                        src={selectedPerson.picture}
                                                        alt={selectedPerson.name}
                                                        width={96}
                                                        height={96}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1 text-center sm:text-left">
                                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                                                        {selectedPerson.name}
                                                    </h2>
                                                    <p className="text-orange-600 font-semibold text-base sm:text-lg mb-2">
                                                        {selectedPerson.designation}
                                                    </p>
                                                    <a
                                                        href={`mailto:${selectedPerson.email}`}
                                                        className="text-green-600 hover:text-green-700 transition-colors text-sm sm:text-base break-all"
                                                    >
                                                        {selectedPerson.email}
                                                    </a>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => setSelectedPerson(null)}
                                                className="text-gray-400 hover:text-gray-600 text-2xl sm:text-3xl font-bold mt-2 sm:mt-0 self-end sm:self-start"
                                            >
                                                &times;
                                            </button>
                                        </div>
                                        <div className="text-gray-700 leading-relaxed prose text-sm sm:text-base">
                                            <p>{selectedPerson.description}</p>
                                        </div>
                                    </div>
                                </m.div>
                            </m.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </LazyMotion>
    );
}