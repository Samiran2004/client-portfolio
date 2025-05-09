import React from "react";

const Education = () => {
    return (
        <section id="education" className="py-16 bg-gray-50 relative">
            {/* Custom Keyframe Style */}
            <style>{`
        @keyframes wiggle {
          0%, 100% { transform: translateX(-50%) scaleX(1); }
          50% { transform: translateX(-50%) scaleX(1.2); }
        }
      `}</style>

            <div className="container mx-auto px-4">
                {/* Creative Heading */}
                <h2 className="text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 relative flex justify-center items-center">
                    Education
                    <span
                        className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-28 h-[6px] bg-blue-400 rounded-full"
                        style={{ animation: "wiggle 1.5s ease-in-out infinite" }}
                    ></span>
                </h2>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Academic Journey */}
                    <div className="order-1 lg:order-1">
                        <h3 className="text-2xl font-semibold mb-6 text-indigo-700">
                            Academic Journey
                        </h3>
                        <div className="relative pl-8 border-l-2 border-indigo-500">
                            {[
                                {
                                    date: "2015 - 2019",
                                    title: "Doctor of Philosophy",
                                    org: "Academy of Scientific and Innovative Research (AcSIR), CSIR-CMERI Campus",
                                    desc: "Thesis title: Development and characterization of carbon fiber reinforced epoxy composite by incorporating surface modified graphene",
                                },
                                {
                                    date: "2009 - 2013",
                                    title: "B.Tech in Mechanical Engineering",
                                    org: "West Bengal University of Technology",
                                    desc: "Focus: Thermodynamics and Energy Systems",
                                },
                                {
                                    date: "2006 - 2008",
                                    title: "Higher Secondary",
                                    org: "West Bengal Council of Higher Secondary Education",
                                    desc: "1st Division, 71.2%",
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="relative mb-12 group">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-4 top-2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300 z-10"></div>
                                    {/* Timeline Content */}
                                    <div className="bg-white rounded-lg shadow-md p-5 transition-transform duration-300 group-hover:-translate-y-1">
                                        <div className="text-sm text-gray-500">{item.date}</div>
                                        <h4 className="text-lg font-semibold text-indigo-700 mt-1">{item.title}</h4>
                                        <p className="text-gray-700">{item.org}</p>
                                        <p className="text-gray-600 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Educational Philosophy */}
                    <div className="order-2 lg:order-2">
                        <h3 className="text-2xl font-semibold mb-6 text-indigo-700">
                            Educational Philosophy
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            My teaching approach combines rigorous theoretical foundations with hands-on
                            practical applications. I believe in creating an inclusive learning environment
                            where students develop critical thinking skills through real-world problem solving.
                        </p>
                        <div className="relative group">
                            <img
                                className="rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                                src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Collaborative Learning Environment"
                            />
                            <div className="absolute bottom-2 left-2 bg-white/80 text-sm text-gray-800 px-3 py-1 rounded shadow-md">
                                Collaborative Learning Environment
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
