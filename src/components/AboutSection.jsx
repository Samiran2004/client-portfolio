import {
  GraduationCap,
  Calendar,
  FileText,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { profileData } from "../constants/portfolioData";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const CredentialItem = ({ icon, text, label }) => (
  <motion.div
    variants={fadeInUp} 
    className="flex flex-col gap-2 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
  >
    <div className="text-primary bg-blue-50 p-3 rounded-lg w-fit">{icon}</div>
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-gray-900 font-semibold line-clamp-2">{text}</p>
    </div>
  </motion.div>
);

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-heading">
            About
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Learn more about my professional journey and expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <motion.img
                src={
                  profileData.profileImage ||
                  "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt="Professional Profile"
                className="relative w-full h-[600px] object-cover object-center rounded-2xl shadow-md cursor-pointer"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-2 lg:order-1 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {profileData.name}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {profileData.summary}
              </p>
            </motion.div>

            {/* Credentials Grid */}
            <motion.div
              className="grid sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <GraduationCap className="w-6 h-6" />,
                  text: profileData.education[0].degree,
                  label: "Education",
                },
                {
                  icon: <Calendar className="w-6 h-6" />,
                  text: profileData.workHistory[0].period,
                  label: "Experience",
                },
                {
                  icon: <FileText className="w-6 h-6" />,
                  text: "50+ Published Papers",
                  label: "Publications",
                },
                {
                  icon: <Briefcase className="w-6 h-6" />,
                  text: profileData.currentPosition,
                  label: "Current Role",
                },
              ].map((item, index) => (
                <CredentialItem key={index} {...item} />
              ))}
            </motion.div>

            {/* Contact Information */}
            <motion.div className="space-y-3" variants={fadeInUp}>
              <div className="card shadow-lg p-6 border border-gray-100">
                <p className="text-gray-300 flex items-center gap-2">
                  <span className="font-semibold text-gray-700">Email :</span>
                  <span className="text-primary">
                    {profileData.contact.email}
                  </span>
                </p>
                <p className="text-gray-300 flex items-center gap-2">
                  <span className="font-semibold text-gray-700">Phone :</span>
                  <span className="text-primary">
                    {profileData.contact.phone}
                  </span>
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <a
                href="#contact"
                className="btn btn-primary btn-lg gap-2 hover:gap-3 transition-all duration-300"
              >
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
