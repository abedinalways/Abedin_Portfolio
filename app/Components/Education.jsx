import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Lightbulb,
} from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeCard, setActiveCard] = useState(null);

  const educationData = [
    {
      id: 1,
      degree: 'M.Sc. in Farm Structure and Environmental Engineering',
      duration: '2017 - 2019',
      institution: 'Bangladesh Agricultural University (BAU)',
      location: 'Mymensingh',
      emoji: '📚',
      gradient: 'from-purple-500 to-blue-500',
      bgGradient: 'from-purple-50 to-blue-50',
      highlights: [
        'Completed advanced coursework in agricultural engineering with a focus on environmental sustainability',
        'Conducted research on innovative farm structures and their impact on agricultural productivity',
        'Developed expertise in modern irrigation systems, soil and water conservation, and smart farming technologies',
        'Pursuing advanced studies in smart farming technologies and AI integration in agriculture',
        'Research focus on sustainable agricultural engineering and modern irrigation systems',
        'Collaborative projects with faculty and industry experts on technology-driven farming',
      ],
      skills: [
        'Environmental Engineering',
        'Smart Farming',
        'AI Integration',
        'Sustainable Agriculture',
        'Research & Development',
      ],
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      id: 2,
      degree: 'B.Sc. in Agricultural Engineering & Technology',
      duration: '2012 - 2016',
      institution: 'Bangladesh Agricultural University (BAU)',
      location: 'Mymensingh',
      emoji: '🎓',
      gradient: 'from-purple-500 to-blue-500',
      bgGradient: 'from-purple-50 to-blue-50',
      highlights: [
        'Graduated with strong academic performance and practical research experience',
        'Focused on data analysis, technology integration, and sustainable agriculture solutions',
        'Developed a solid foundation in analytical thinking, problem-solving, and engineering concepts',
        'Participated in various workshops and seminars on agricultural technology and innovation',
        'Hands-on projects related to farm machinery, irrigation systems, and environmental engineering',
        'Collaborated with peers and faculty on research projects aimed at improving agricultural practices',
      ],
      skills: [
        'Data Analysis',
        'Technology Integration',
        'Problem Solving',
        'Agricultural Technology',
        'Research Projects',
      ],
      icon: <BookOpen className="w-6 h-6" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { delay: 0.4, duration: 0.5, type: 'spring', stiffness: 200 },
    },
  };

  return (
    <div id="education" className="py-16 px-4 sm:px-6 lg:px-[12%]">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={cardVariants} className="text-center mb-16">
          <small className="text-purple-600 font-semibold tracking-wider uppercase text-xs">
            Academic Journey
          </small>
          <h2 className="md:text-5xl text-3xl font-bold mt-2 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Educational Background
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            My academic foundation in Agricultural Engineering has shaped my
            analytical thinking and problem-solving approach, which I now apply
            to web development and technology solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-gradient-to-b from-purple-200 to-blue-200 rounded-full">
            <motion.div
              variants={timelineVariants}
              className="w-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"
            />
          </div>

          {/* Education Cards */}
          <div className="space-y-12 sm:space-y-16">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={cardVariants}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline Icon */}
                <motion.div
                  variants={iconVariants}
                  className={`absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-12 h-12 bg-gradient-to-r ${edu.gradient} rounded-full flex items-center justify-center text-white shadow-md z-10 `}
                >
                  {edu.icon}
                </motion.div>

                {/* Card Content */}
                <div
                  className={`ml-16 sm:ml-0 sm:w-1/2 ${
                    index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'
                  }`}
                >
                  <motion.div
                    className={`bg-gradient-to-br ${edu.bgGradient} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-400 `}
                    whileHover={{ scale: 1.02, y: -5 }}
                    onClick={() =>
                      setActiveCard(activeCard === edu.id ? null : edu.id)
                    }
                  >
                    {/* Card Header */}
                    <div className="mb-4">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-3xl">{edu.emoji}</span>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                            {edu.degree}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span className="font-semibold">
                                {edu.duration}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>
                                {edu.institution}, {edu.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {edu.skills.map((skill, idx) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 + 0.3 }}
                          className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${edu.gradient} text-white`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: activeCard === edu.id ? 'auto' : '120px',
                        overflow: 'hidden',
                      }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      {edu.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <Lightbulb className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm leading-relaxed">{highlight}</p>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Read More Button */}
                    <motion.button
                      onClick={e => {
                        e.stopPropagation();
                        setActiveCard(activeCard === edu.id ? null : edu.id);
                      }}
                      className={`mt-4 text-sm font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent hover:underline`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {activeCard === edu.id ? 'Show Less' : 'Read More'}
                    </motion.button>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
