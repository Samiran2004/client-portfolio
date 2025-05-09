import React from 'react';
import {
  GraduationCap,
  Calendar,
  FileText,
  Briefcase,
  ArrowRight,
} from 'lucide-react';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Embedded animation style */}
      <style>{`
        @keyframes grow {
          0% { width: 0; opacity: 0; }
          100% { width: 5rem; opacity: 1; }
        }
        .animate-grow {
          animation: grow 0.8s ease-out forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Fancy About Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 tracking-wide">
            About
          </h2>
          <div className="mt-2 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-grow" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Engineer silhouette"
                className="rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
              />
              <img
                src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Engineer in lab"
                className="rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Dr. Nitai Chandra Adak, Ph.D.
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dr. Adak’s research spans experimental mechanics of advanced multifunctional structural
              composites, filament wound carbon fiber reinforced epoxy composites for Type-IV cylinders, and
              predictive modeling for mechanical deformation behavior. His notable work includes graphene
              hybridized nanocomposites for EMI shielding, epoxy-based structural electrolytes for energy
              storage, thermally stable fiber composites for high-temperature applications, and Type-IV hydrogen
              storage cylinders. Currently, his interests lie in understanding 3D printed FRP composites across
              diverse loading conditions, and in developing magnetoelectric nanocomposite inks for wearable
              electronics and soft robotics.
            </p>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <Credential icon={<GraduationCap size={28} />} text="Ph.D. in Mechanical Engineering" />
              <Credential icon={<Calendar size={28} />} text="15+ Years Experience" />
              <Credential icon={<FileText size={28} />} text="50+ Published Papers" />
              <Credential icon={<Briefcase size={28} />} text="Industry Consultant" />
            </div>

            {/* Read Bio Button */}
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 rounded-full border border-gray-800 text-gray-800 font-medium group hover:bg-gray-800 hover:text-white hover:shadow-xl transition duration-300"
              >
                Read Full Biography
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Credential Component
const Credential = ({ icon, text }) => (
  <div className="flex items-start space-x-4">
    <div className="text-gray-800">{icon}</div>
    <p className="text-gray-800 font-medium">{text}</p>
  </div>
);

export default AboutSection;
