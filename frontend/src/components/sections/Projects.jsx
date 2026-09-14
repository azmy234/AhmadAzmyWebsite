import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    y: 40,
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

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white px-10 py-20 transition-colors duration-300 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-medium text-orange-500">MY WORK</p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Be Smile Dental Center */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-colors duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <motion.img
                src="/besmile.png"
                alt="Be Smile Dental Center"
                className="h-48 w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Be Smile Dental Center
              </h3>

              <p className="mb-4 text-sm leading-6 text-gray-500 dark:text-gray-400">
                A responsive dental center platform with appointment and doctor
                management features.
              </p>

              {/* Technologies */}
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-md bg-orange-50 px-3 py-1 text-xs font-medium text-orange-500 dark:bg-orange-500/10 dark:text-orange-400">
                  Angular
                </span>

                <span className="rounded-md bg-orange-50 px-3 py-1 text-xs font-medium text-orange-500 dark:bg-orange-500/10 dark:text-orange-400">
                  Node.js
                </span>

                <span className="rounded-md bg-orange-50 px-3 py-1 text-xs font-medium text-orange-500 dark:bg-orange-500/10 dark:text-orange-400">
                  Express
                </span>
              </div>

              {/* Live Project */}
              <motion.a
                href="https://besmiledent.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-2 font-medium text-orange-500 transition-colors hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                View Live Project
                <ArrowUpRight size={18} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
