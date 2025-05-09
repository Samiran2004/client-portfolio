import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa"; // Correct import for the arrow icon

const projects = [
  {
    id: 101,
    title: "4D Printed Thermo-Responsive Hydrogel Actuators",
    category: "AI",
    description:
      "Design and analysis of smart actuators using 4D printing techniques for solar steam generation, with thermo-aqueous coupling modeling and finite element analysis.",
    image: "https://source.unsplash.com/400x300/?4dprinting,actuator",
  },
  {
    id: 102,
    title: "Graphene Hybrid Composites for EMI Shielding",
    category: "IoT",
    description:
      "Developed high-performance nanocomposites for electromagnetic interference shielding by integrating graphene into carbon fiber epoxy structures.",
    image: "https://source.unsplash.com/400x300/?graphene,composite",
  },
  {
    id: 103,
    title: "Magnetoelectric Nanocomposite Inks for Wearable Electronics",
    category: "AI",
    description:
      "Synthesized and patented 3D-printable magnetoelectric inks for additive manufacturing of wearable electronics and soft robotics.",
    image: "https://source.unsplash.com/400x300/?ink,wearable",
  },
  {
    id: 104,
    title: "Type-IV Hydrogen Storage Composite Cylinder",
    category: "Web",
    description:
      "Designed and tested filament-wound high-pressure FRP composite cylinders suitable for hydrogen storage under varying mechanical loads.",
    image: "https://source.unsplash.com/400x300/?hydrogen,cylinder",
  },
  {
    id: 105,
    title: "Epoxy-Based Solid Electrolytes for Energy Storage",
    category: "IoT",
    description:
      "Developed multifunctional polymer composites with solid-state electrolytes, targeting applications in structural batteries and supercapacitors.",
    image: "https://source.unsplash.com/400x300/?epoxy,battery",
  },
  {
    id: 106,
    title: "Graphene-Based Bulletproof Laminate",
    category: "Web",
    description:
      "Developed advanced composite laminate with graphene for mob control vehicles, transferred to DRDO for tactical use.",
    image: "https://source.unsplash.com/400x300/?bulletproof,laminate",
  },
];

const categories = ["All", "IoT", "Web", "AI"];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-blue-900 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore Our Innovative Projects
        </motion.h2>
        <p className="text-lg text-gray-600 mb-10">
          Revolutionizing Technology with Cutting-Edge Innovations
        </p>

        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold border transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:text-white ${
                selectedCategory === category
                  ? "bg-blue-700 text-white"
                  : "bg-white text-blue-700 border-blue-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-[1.05] hover:shadow-2xl hover:ring-4 hover:ring-blue-300 transition-all duration-500"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full border border-gray-800 text-gray-800 font-medium group hover:bg-gray-800 hover:text-white hover:shadow-xl transition duration-300"
          >
            View All Projects
            <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}