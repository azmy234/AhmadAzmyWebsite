import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50 px-10 py-20 transition-colors duration-300 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-medium text-orange-500">GET IN TOUCH</p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500 dark:text-gray-400">
            Have a project or opportunity in mind? Feel free to contact me.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Contact Information
            </h3>

            {/* Email */}
            <motion.div
              className="mb-5 flex items-center gap-4"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-500/10 dark:text-orange-400"
              >
                <Mail size={22} />
              </motion.div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </p>

                <a
                  href="mailto:ahmadazmy2025@gmail.com"
                  className="font-medium text-gray-800 transition hover:text-orange-500 dark:text-gray-200"
                >
                  ahmadazmy2025@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="mb-5 flex items-center gap-4"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-500/10 dark:text-orange-400"
              >
                <Phone size={22} />
              </motion.div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Phone
                </p>

                <a
                  href="tel:+201555381665"
                  className="font-medium text-gray-800 transition hover:text-orange-500 dark:text-gray-200"
                >
                  +20 15 55 38 166 5
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-500/10 dark:text-orange-400"
              >
                <MapPin size={22} />
              </motion.div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Location
                </p>

                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Cairo, Egypt
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            whileHover={{ y: -3 }}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800"
          >
            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-orange-500/20"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-orange-500/20"
              />
            </div>

            {/* Message */}
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>

              <textarea
                id="message"
                rows="5"
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-orange-500/20"
              ></textarea>
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
            >
              Send Message
              <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <Send size={18} />
              </motion.span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
