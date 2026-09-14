import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faAngular,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { SiMongodb } from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: <FontAwesomeIcon icon={faJs} />,
    color: "text-yellow-400",
  },
  {
    name: "React",
    icon: <FontAwesomeIcon icon={faReact} />,
    color: "text-cyan-400",
  },
  {
    name: "Angular",
    icon: <FontAwesomeIcon icon={faAngular} />,
    color: "text-red-500",
  },
  {
    name: "Node.js",
    icon: <FontAwesomeIcon icon={faNodeJs} />,
    color: "text-green-600",
  },
  {
    name: "HTML5",
    icon: <FontAwesomeIcon icon={faHtml5} />,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: <FontAwesomeIcon icon={faCss3Alt} />,
    color: "text-blue-500",
  },
  {
    name: "Git",
    icon: <FontAwesomeIcon icon={faGitAlt} />,
    color: "text-orange-600",
  },
  {
    name: "Bootstrap",
    icon: <FontAwesomeIcon icon={faBootstrap} />,
    color: "text-purple-600",
  },
  {
    name: "Express.js",
    icon: <span className="font-bold">ex</span>,
    color: "text-gray-800 dark:text-gray-200",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="border-l border-gray-200 bg-white px-10 py-20 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900"
    >
      {/* Title */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-2 font-medium text-orange-500">MY SKILLS</p>

        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Skills
        </h2>
      </motion.div>

      {/* Skills */}
      <motion.div
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={cardVariants}
            whileHover={{
              y: -6,
              scale: 1.03,
            }}
            transition={{
              duration: 0.2,
            }}
            className="flex h-24 cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm transition-colors duration-300 hover:border-orange-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <div className={`mb-2 text-3xl ${skill.color}`}>{skill.icon}</div>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
