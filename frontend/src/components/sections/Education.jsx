import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Education = () => {
  return (
    <section
      id="education"
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
          <p className="mb-2 font-medium text-orange-500">
            EDUCATION & LEARNING
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Education & Courses
          </h2>
        </motion.div>

        <div className="space-y-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-orange-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-orange-500/40"
          >
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <p className="mb-2 text-sm font-medium text-orange-500">
                  EDUCATION
                </p>

                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Bachelor of Commerce
                </h3>

                <p className="mb-3 font-medium text-gray-600 dark:text-gray-300">
                  Al-Azhar University, Cairo
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Grade:{" "}
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Good
                  </span>
                </p>
              </div>

              <span className="whitespace-nowrap rounded-lg bg-orange-50 px-4 py-2 text-sm font-medium text-orange-500 dark:bg-orange-500/10 dark:text-orange-400">
                Sep 2015 - Jun 2019
              </span>
            </div>
          </motion.div>

          {/* Courses Title */}
          <motion.div
            className="pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Courses & Training
            </h3>
          </motion.div>

          {/* Courses */}
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Course 1 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-300 hover:border-orange-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-orange-500/40"
            >
              <p className="mb-2 text-sm font-medium text-orange-500">COURSE</p>

              <h4 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                Course Name
              </h4>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Training Provider
              </p>
            </motion.div>

            {/* Course 2 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-300 hover:border-orange-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-orange-500/40"
            >
              <p className="mb-2 text-sm font-medium text-orange-500">COURSE</p>

              <h4 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                Course Name
              </h4>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Training Provider
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          className="pt-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Additional Information
          </h3>

          <motion.div
            className="grid gap-6 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Languages */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-orange-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-orange-500/40"
            >
              <h4 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                Languages
              </h4>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    Arabic
                  </span>

                  <span className="rounded-md bg-orange-50 px-3 py-1 text-sm text-orange-500 dark:bg-orange-500/10 dark:text-orange-400">
                    Native
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    English
                  </span>

                  <span className="rounded-md bg-orange-50 px-3 py-1 text-sm text-orange-500 dark:bg-orange-500/10 dark:text-orange-400">
                    Intermediate
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-orange-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-orange-500/40"
            >
              <h4 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                Availability
              </h4>

              <p className="leading-7 text-gray-500 dark:text-gray-400">
                Available for freelance opportunities and remote work.
              </p>

              <motion.span
                className="mt-4 inline-block rounded-md bg-green-50 px-3 py-1 text-sm font-medium text-green-600 dark:bg-green-500/10 dark:text-green-400"
                animate={{
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Open to Work
              </motion.span>
            </motion.div>

            {/* Interests */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-orange-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-orange-500/40"
            >
              <h4 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                Interests
              </h4>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-orange-50 px-3 py-1 text-sm text-orange-500 dark:bg-orange-500/10 dark:text-orange-400">
                  Web Development
                </span>

                <span className="rounded-md bg-orange-50 px-3 py-1 text-sm text-orange-500 dark:bg-orange-500/10 dark:text-orange-400">
                  Learning
                </span>

                <span className="rounded-md bg-orange-50 px-3 py-1 text-sm text-orange-500 dark:bg-orange-500/10 dark:text-orange-400">
                  Technology
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
