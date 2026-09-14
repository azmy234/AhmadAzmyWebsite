import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

// ================= ANIMATION VARIANTS =================

// [1] LEFT CONTENT
const leftContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const leftItemVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

// [2] CENTER IMAGE
const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
};

// [3] RIGHT CARDS
const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-gray-100 bg-white transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl grid-cols-1 items-center gap-10 px-8 py-12 lg:grid-cols-[1fr_1.1fr_0.9fr] lg:px-10">
        {/* =====================================================
            [1] LEFT CONTENT
        ===================================================== */}
        <motion.div
          className="relative z-10"
          variants={leftContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={leftItemVariants}
            className="mb-3 text-lg font-medium text-orange-500"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={leftItemVariants}
            className="mb-3 text-5xl font-bold leading-tight text-gray-900 dark:text-white xl:text-6xl"
          >
            Ahmad <span className="text-orange-500">Azmy</span>
          </motion.h1>

          <motion.h2
            variants={leftItemVariants}
            className="mb-5 text-2xl font-bold text-gray-900 dark:text-white"
          >
            Full Stack Web Developer
          </motion.h2>

          <motion.p
            variants={leftItemVariants}
            className="mb-7 max-w-lg text-base leading-7 text-gray-500 dark:text-gray-400"
          >
            I build modern, responsive and scalable web applications with clean
            code and great user experience.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={leftItemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="/Ahmed-Azmy-CV.pdf"
              className="flex items-center gap-2 rounded-lg border border-orange-500 px-6 py-3 text-sm font-semibold text-gray-800 transition hover:bg-orange-50 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <Download size={18} className="text-orange-500" />
              Download CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={leftItemVariants}
            className="mt-7 flex items-center gap-4"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Follow me on
            </span>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm font-bold text-gray-700 transition hover:border-orange-500 hover:text-orange-500 dark:border-gray-700 dark:text-gray-300"
            >
              G
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm font-bold text-gray-700 transition hover:border-orange-500 hover:text-orange-500 dark:border-gray-700 dark:text-gray-300"
            >
              in
            </a>

            <a
              href="#contact"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm font-bold text-gray-700 transition hover:border-orange-500 hover:text-orange-500 dark:border-gray-700 dark:text-gray-300"
            >
              @
            </a>
          </motion.div>
        </motion.div>

        {/* =====================================================
            [2] CENTER IMAGE
        ===================================================== */}
        <motion.div
          className="relative flex h-112.5 items-end justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Orange Circle */}
          <motion.div
            className="absolute top-16 h-64 w-64 rounded-full bg-orange-400 lg:h-72 lg:w-72"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Outer Circle */}
          <div className="absolute top-10 h-80 w-80 rounded-full border border-orange-200 dark:border-orange-300/30" />

          <div className="absolute top-4 h-96 w-96 rounded-full border border-orange-100 dark:border-orange-300/20" />

          {/* Dots */}
          <div className="absolute left-0 top-16 grid grid-cols-6 gap-5 opacity-60">
            {Array.from({ length: 24 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-orange-300"
              />
            ))}
          </div>

          {/* Small Decorative Shape */}
          <div className="absolute right-4 top-12 text-2xl text-orange-300">
            ×
          </div>

          {/* Profile */}
          <img
            src="/profile.png"
            alt="Ahmed Azmy"
            className="relative z-10 h-107.5 w-90 object-contain"
          />

          {/* Small Circle */}
          <div className="absolute bottom-16 left-8 h-3 w-3 rounded-full bg-orange-400" />
        </motion.div>

        {/* =====================================================
            [3] RIGHT CARDS
        ===================================================== */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={cardsContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="mb-4 text-3xl text-orange-500">💼</div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              2+
            </h3>

            <p className="mt-1 text-sm leading-5 text-gray-500 dark:text-gray-400">
              Years of
              <br />
              Experience
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="mb-4 text-3xl text-orange-500">&lt;/&gt;</div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              9+
            </h3>

            <p className="mt-1 text-sm leading-5 text-gray-500 dark:text-gray-400">
              Projects
              <br />
              Completed
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="mb-4 text-3xl text-orange-500">★</div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              100%
            </h3>

            <p className="mt-1 text-sm leading-5 text-gray-500 dark:text-gray-400">
              Client
              <br />
              Satisfaction
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="mb-4 text-3xl text-orange-500">🚀</div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Always
            </h3>

            <p className="mt-1 text-sm leading-5 text-gray-500 dark:text-gray-400">
              Learning &
              <br />
              Improving
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
