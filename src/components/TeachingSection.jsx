import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TeachingSection = () => {
    return (
        <section
            id="teaching"
            className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-100 text-gray-800"
        >
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-5xl font-extrabold text-center mb-16 text-indigo-700 drop-shadow-md"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    🚀 Teaching
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Text Section */}
                    <motion.div
                        className="lg:w-1/2 space-y-8"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div>
                            <h3 className="text-3xl font-semibold mb-4 text-purple-600">
                                Teaching Philosophy 💡
                            </h3>
                            <p className="text-lg leading-relaxed">
                                My teaching approach bridges theoretical knowledge with practical applications,
                                empowering students to solve real-world engineering challenges.
                            </p>
                            <p className="text-lg leading-relaxed">
                                I believe in creating an inclusive, collaborative learning environment where
                                critical thinking and innovation are encouraged through hands-on projects and
                                industry-relevant case studies.
                            </p>
                        </div>

                        {/* Methods */}
                        <div className="space-y-8">
                            {[
                                {
                                    title: 'Project-Based Learning',
                                    desc: 'Engaging students with real-world engineering challenges',
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-10 h-10 text-indigo-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="m16 10-4 4-4-4" />
                                        </svg>
                                    ),
                                },
                                {
                                    title: 'Collaborative Learning',
                                    desc: 'Fostering teamwork and communication skills',
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-10 h-10 text-indigo-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                                            <rect width="18" height="18" x="3" y="4" rx="2" />
                                            <circle cx="12" cy="10" r="2" />
                                            <line x1="8" x2="8" y1="2" y2="4" />
                                            <line x1="16" x2="16" y1="2" y2="4" />
                                        </svg>
                                    ),
                                },
                                {
                                    title: 'Industry Integration',
                                    desc: 'Connecting classroom concepts with industry practices',
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-10 h-10 text-indigo-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M12 2v8" />
                                            <path d="M4.93 10.93 10 16" />
                                            <path d="M14 16l5.07-5.07" />
                                            <path d="M8.93 19.07 12 16l3.07 3.07" />
                                            <path d="M19 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                                            <path d="M12 16v-4" />
                                        </svg>
                                    ),
                                },
                            ].map((method, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border-l-4 border-indigo-500"
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <div>{method.icon}</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-indigo-600 mb-1">{method.title}</h4>
                                        <p className="text-gray-600">{method.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.a
                            href="#"
                            className="inline-block mt-8 px-8 py-3 border-2 border-indigo-500 text-indigo-600 font-semibold rounded-full bg-white shadow-md hover:bg-indigo-500 hover:text-white transition duration-300"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            🌟 Explore Teaching Methods
                        </motion.a>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        className="lg:w-1/2"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="relative group overflow-hidden rounded-3xl shadow-xl">
                            <img
                                src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Collaborative learning environment"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
                            />
                            {/* Adjusted hover overlay */}
                            <div
                                className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 pointer-events-none"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TeachingSection;