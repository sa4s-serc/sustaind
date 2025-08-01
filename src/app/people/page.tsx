'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ForceNetworkGraph from '../../components/ForceNetworkGraph';

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
                const response = await fetch('/data/people.json');
                const data = await response.json();
                setPeople(data);
            } catch (error) {
                console.error('Error fetching people:', error);
            }
        };

        fetchPeople();
    }, []);

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
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
                </motion.div>

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
                <div className="grid grid-cols-2 gap-8 md:hidden">
                    {people.map((person) => (
                        <motion.div
                            key={person.id}
                            className="text-center cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedPerson(person)}
                        >
                            <div className={`w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg border-4 ${person.isLead ? 'border-green-600' : 'border-gray-200'} mb-3`}>
                                <img
                                    src={person.picture}
                                    alt={person.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="font-medium text-gray-900">{person.name}</p>
                            <p className="text-sm text-orange-600">{person.designation}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Person Detail Modal */}
                <AnimatePresence>
                    {selectedPerson && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-opacity-60 flex items-center justify-center p-4 z-50"
                            onClick={() => setSelectedPerson(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex items-start space-x-6">
                                            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 flex-shrink-0">
                                                <img
                                                    src={selectedPerson.picture}
                                                    alt={selectedPerson.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h2 className="text-3xl font-bold text-gray-900 mb-1">
                                                    {selectedPerson.name}
                                                </h2>
                                                <p className="text-orange-600 font-semibold text-lg mb-2">
                                                    {selectedPerson.designation}
                                                </p>
                                                <a
                                                    href={`mailto:${selectedPerson.email}`}
                                                    className="text-green-600 hover:text-green-700 transition-colors"
                                                >
                                                    {selectedPerson.email}
                                                </a>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSelectedPerson(null)}
                                            className="text-gray-400 hover:text-gray-600 text-3xl font-bold"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                    <div className="text-gray-700 leading-relaxed prose">
                                        <p>{selectedPerson.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}