import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white px-10 py-20 transition-colors duration-300 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl">
        {/* ============================================
            [1] FRAMER MOTION - SECTION TITLE
        ============================================ */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-medium text-orange-500">GET TO KNOW ME</p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* ============================================
              [2] FRAMER MOTION - LEFT CONTENT
          ============================================ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
              I'm Ahmed Azmy, a Full Stack Web Developer
            </h3>

            <p className="mb-4 leading-8 text-gray-600 dark:text-gray-400">
              I'm a passionate Full Stack Web Developer focused on building
              modern, responsive, and user-friendly web applications.
            </p>

            <p className="leading-8 text-gray-600 dark:text-gray-400">
              I enjoy turning ideas into real-world applications and
              continuously improving my skills in modern frontend and backend
              technologies.
            </p>
          </motion.div>

          {/* ============================================
              [3] FRAMER MOTION - QUICK INFO
          ============================================ */}
          <motion.div
            className="rounded-2xl border border-orange-100 bg-orange-50 p-8 transition-colors duration-300 dark:border-orange-500/20 dark:bg-gray-800"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            whileHover={{
              y: -5,
              scale: 1.01,
            }}
          >
            <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
              Quick Info
            </h3>

            {/* ============================================
                [4] FRAMER MOTION - INFO ITEMS
            ============================================ */}
            <motion.div
              className="space-y-4 text-gray-600 dark:text-gray-400"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  Role:
                </span>{" "}
                Full Stack Web Developer
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  Location:
                </span>{" "}
                Egypt
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  Specialization:
                </span>{" "}
                MERN Stack
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  Frontend:
                </span>{" "}
                React & Angular
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
