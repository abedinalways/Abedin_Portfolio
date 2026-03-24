import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 lg:px-[12%] scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <small className="text-purple-600 font-semibold tracking-wider uppercase text-xs">
            Career Journey
          </small>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[SUSE] mt-2 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-gray-600 font-[Raleway] text-lg max-w-2xl mx-auto">
            My professional journey as a frontend developer, building modern,
            responsive, and scalable web applications.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-300 rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 font-[Ovo]">
                Junior Front-End Developer
              </h3>
              <p className="text-purple-600 font-semibold text-sm sm:text-base mt-1">
                Softvence Delta
              </p>
            </div>

            <div className="inline-flex items-center justify-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700 w-fit">
              6 Months
            </div>
          </div>

          <p className="text-gray-600 font-[Raleway] text-sm sm:text-base leading-relaxed mb-6">
            Built responsive and user-friendly web interfaces using modern
            front-end technologies while contributing to scalable and
            high-performance web applications.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-4 hover:bg-purple-50 transition duration-300">
              <h4 className="font-semibold text-gray-800 mb-2">
                UI Development
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Built responsive and user-friendly web interfaces using modern
                front-end technologies.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4 hover:bg-purple-50 transition duration-300">
              <h4 className="font-semibold text-gray-800 mb-2">
                API Integration
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Integrated APIs and ensured smooth, high-performance application
                functionality.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4 hover:bg-purple-50 transition duration-300">
              <h4 className="font-semibold text-gray-800 mb-2">
                Team Collaboration
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Collaborated with cross-functional teams to deliver clean,
                scalable, and pixel-perfect user interfaces.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4 hover:bg-purple-50 transition duration-300">
              <h4 className="font-semibold text-gray-800 mb-2">
                Testing & Optimization
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Assisted in testing, debugging, and optimizing web applications
                for better performance and usability.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
