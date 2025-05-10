import { motion } from "framer-motion";
import { Book, Users, Award } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const TeachingSection = () => {
  return (
    <section
      id="teaching"
      className="py-14 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header with Image */}
        <div className="flex flex-col items-center mb-8">
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Teaching
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Empowering future engineers through knowledge sharing and
              mentorship
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="sticky top-24">
              <motion.img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Teaching Journey"
                className="rounded-2xl shadow-lg object-cover h-[400px] w-full cursor-pointer"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              />
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800">
                  Teaching Philosophy
                </h4>
                <p className="text-gray-600 text-sm">
                  Inspiring the next generation
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-primary">
                Teaching Philosophy
              </h3>
              <p className="text-lg leading-relaxed">
                My teaching approach bridges theoretical knowledge with
                practical applications, empowering students to solve real-world
                engineering challenges.
              </p>
              <p className="text-lg leading-relaxed">
                I believe in creating an inclusive, collaborative learning
                environment where critical thinking and innovation are
                encouraged through hands-on projects and industry-relevant case
                studies.
              </p>
            </div>

            {/* Methods */}
            <div className="space-y-8">
              {[
                {
                  title: "Project-Based Learning",
                  desc: "Engaging students with real-world engineering challenges",
                  icon: <Book className="w-10 h-10 text-indigo-500" />,
                },
                {
                  title: "Collaborative Learning",
                  desc: "Fostering teamwork and communication skills",
                  icon: <Users className="w-10 h-10 text-indigo-500" />,
                },
                {
                  title: "Industry Integration",
                  desc: "Connecting classroom concepts with industry practices",
                  icon: <Award className="w-10 h-10 text-indigo-500" />,
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
                    <h4 className="text-xl font-bold text-indigo-600 mb-1">
                      {method.title}
                    </h4>
                    <p className="text-gray-600">{method.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
