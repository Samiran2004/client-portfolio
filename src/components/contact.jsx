import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-white via-slate-100 to-white text-slate-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Contact
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-700">Get In Touch</h3>
            <p className="text-lg leading-relaxed text-slate-700">
              Feel free to contact me for consulting, research collaborations,
              speaking engagements, or any questions you might have.
            </p>

            <div className="space-y-6">
              {[{
                icon: '📞',
                title: 'Phone',
                text: '(123) 456-7890'
              }, {
                icon: '✉️',
                title: 'Email',
                text: 'contact@drengineer.com'
              }, {
                icon: '📍',
                title: 'Office',
                text: `123 University Boulevard\nEngineering Building, Room 456\nBerkeley, CA 94720`
              }, {
                icon: '⏰',
                title: 'Office Hours',
                text: 'Monday - Friday: 9:00 AM - 5:00 PM\nOr by appointment'
              }].map(({ icon, title, text }) => (
                <div className="flex items-start gap-4" key={title}>
                  <div className="text-3xl">{icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600">{title}</h4>
                    <p className="whitespace-pre-line text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              {['linkedin', 'twitter', 'github', 'instagram'].map((platform, idx) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-600 hover:bg-purple-600 flex items-center justify-center text-white text-xl transition duration-300"
                >
                  {['in', 'X', 'GH', 'IG'][idx]}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-200"
          >
            <form id="contactForm" className="space-y-6">
              <div className="form-group">
                <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="block mb-2 font-semibold">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
