import { useState } from "react";
import { motion } from "framer-motion"; 
import { FaArrowRight } from "react-icons/fa";
import DImg from "../assets/4d image.jpg";
import hybrid from "../assets/hybrid.jpg";
import magnet from "../assets/magnet.jpg";
import hydrogen from "../assets/hydrogen.jpg";
import epoxy from "../assets/epoxy.jpg";
import graphene from "../assets/graphene.jpg";

const projects = [
  {
    id: 101,
    title: "4D Printed Thermo-Responsive Hydrogel Actuators",
    category: "4D Printing",
    description:
      "Design and analysis of smart actuators using 4D printing techniques for solar steam generation, with thermo-aqueous coupling modeling and finite element analysis.",
    image: DImg,
  },
  {
    id: 102,
    title: "Graphene Hybrid Composites for EMI Shielding",
    category: "Hybrid",
    description:
      "Developed high-performance nanocomposites for electromagnetic interference shielding by integrating graphene into carbon fiber epoxy structures.",
    image: hybrid,
  },
  {
    id: 103,
    title: "Magnetoelectric Nanocomposite Inks for Wearable Electronics",
    category: "Hybrid",
    description:
      "Synthesized and patented 3D-printable magnetoelectric inks for additive manufacturing of wearable electronics and soft robotics.",
    image: magnet,
  },
  {
    id: 104,
    title: "Type-IV Hydrogen Storage Composite Cylinder",
    category: "Hydrogen",
    description:
      "Designed and tested filament-wound high-pressure FRP composite cylinders suitable for hydrogen storage under varying mechanical loads.",
    image: hydrogen,
  },
  {
    id: 105,
    title: "Epoxy-Based Solid Electrolytes for Energy Storage",
    category: "Hybrid",
    description:
      "Developed multifunctional polymer composites with solid-state electrolytes, targeting applications in structural batteries and supercapacitors.",
    image: epoxy,
  },
  {
    id: 106,
    title: "Graphene-Based Bulletproof Laminate",
    category: "Graphene",
    description:
      "Developed advanced composite laminate with graphene for mob control vehicles, transferred to DRDO for tactical use.",
    image: graphene,
  },
];

const categories = ["All", "Hybrid", "Hydrogen", "Graphene"];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ProjectCard = ({ project }) => (
  <motion.div
    variants={fadeInUp}
    className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6 text-left">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>
      <span className="inline-block bg-blue-50 text-primary text-xs px-3 py-1 rounded-full">
        {project.category}
      </span>
    </div>
  </motion.div>
);

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Research Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Innovative research projects spanning various domains of
              mechanical engineering and advanced materials
            </p>
          </motion.div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div className="mt-12 text-center" variants={fadeInUp}>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            View All Projects
            <FaArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}