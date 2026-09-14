import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-white px-10 py-20 transition-colors duration-300 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-full">
        {/* Title */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-medium text-orange-500">MY JOURNEY</p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative border-l-2 border-orange-200 pl-8 dark:border-orange-500/30"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Full Stack Developer */}
          <motion.div variants={itemVariants} className="relative mb-10">
            <motion.span
              className="absolute -left-10.25 top-1 h-5 w-5 rounded-full border-4 border-white bg-orange-500 dark:border-gray-900"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />

            <motion.div
              whileHover={{ y: -4, x: 3 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-orange-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-orange-500/40"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Full Stack Developer
                </h3>

                <span className="text-sm font-medium text-orange-500">
                  2024 - Present
                </span>
              </div>

              <p className="mb-3 font-medium text-gray-600 dark:text-gray-300">
                Freelance
              </p>

              <p className="leading-7 text-gray-500 dark:text-gray-400">
                Building modern and responsive web applications using React,
                Angular, Node.js, Express.js, and MongoDB.
              </p>
            </motion.div>
          </motion.div>

          {/* Angular Trainee */}
          <motion.div variants={itemVariants} className="relative mb-10">
            <motion.span
              className="absolute -left-10.25 top-1 h-5 w-5 rounded-full border-4 border-white bg-orange-500 dark:border-gray-900"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />

            <motion.div
              whileHover={{ y: -4, x: 3 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-orange-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-orange-500/40"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Angular Trainee
                </h3>

                <span className="text-sm font-medium text-orange-500">
                  Jan 2026 - Mar 2026
                </span>
              </div>

              <p className="mb-3 font-medium text-gray-600 dark:text-gray-300">
                Tobaz
              </p>

              <p className="leading-7 text-gray-500 dark:text-gray-400">
                Trained in building web applications using Angular, TypeScript,
                RxJS, APIs, and modern frontend development practices.
              </p>
            </motion.div>
          </motion.div>

          {/* Sales Accountant */}
          <motion.div variants={itemVariants} className="relative mb-10">
            <motion.span
              className="absolute -left-10.25 top-1 h-5 w-5 rounded-full border-4 border-white bg-orange-500 dark:border-gray-900"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />

            <motion.div
              whileHover={{ y: -4, x: 3 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-orange-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-orange-500/40"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Sales Accountant
                </h3>

                <span className="text-sm font-medium text-orange-500">
                  Mar 2022 - Dec 2023
                </span>
              </div>

              <p className="mb-3 font-medium text-gray-600 dark:text-gray-300">
                Mayar Innovation — Jeddah
              </p>

              <p className="leading-7 text-gray-500 dark:text-gray-400">
                Managed sales accounting operations and financial records while
                supporting daily business processes.
              </p>
            </motion.div>
          </motion.div>

          {/* Graphic Designer */}
          <motion.div variants={itemVariants} className="relative">
            <motion.span
              className="absolute -left-10.25 top-1 h-5 w-5 rounded-full border-4 border-white bg-orange-500 dark:border-gray-900"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />

            <motion.div
              whileHover={{ y: -4, x: 3 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-orange-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-orange-500/40"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Graphic Designer
                </h3>

                <span className="text-sm font-medium text-orange-500">
                  Mar 2019 - Jan 2022
                </span>
              </div>

              <p className="mb-3 font-medium text-gray-600 dark:text-gray-300">
                Deluxe Development — Cairo
              </p>

              <p className="leading-7 text-gray-500 dark:text-gray-400">
                Created visual designs and marketing materials while working on
                branding and creative content.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
