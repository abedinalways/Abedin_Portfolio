'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RxCrossCircled } from 'react-icons/rx';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'TableRounds- A modern, scalable, and feature-rich Quiz platformm',
      description:
        'A full-stack quiz ecosystem where participants can take subject-specific tests, track their performance with detailed statistics, measure their knowledge across selected topics, and connect with other participants through built-in messaging.',
      image:
        'https://i.ibb.co.com/Zp88vs6y/Screenshot-from-2026-03-24-22-59-36.png',
      demoLink: 'https://tablerounds.ai',
      githubLink: '',
      modalContent: {
        bannerImage:
          'https://i.ibb.co.com/Zp88vs6y/Screenshot-from-2026-03-24-22-59-36.png',
        techStack: [
          'React',
          'Next.js',
          'Typescript',
          'Socket.io-cilent',
          'RTK Query',
          'React Leaflet',
          'TiPTap',
        ],
        description:
          'A full-stack quiz ecosystem where participants can take subject-specific tests, track their performance with detailed statistics, measure their knowledge across selected topics, and connect with other participants through built-in messaging.',
        image:
          'https://i.ibb.co.com/DgQXV4TP/Screenshot-from-2026-03-24-23-01-13.png ',
        challenges: [
          'Create and participate in quizzes and tests',
          'Review completed tests with detailed answer analysis',
          'View earned marks, correct answers, and incorrect answers',
          'Track performance through statistics and leaderboards',
          'Manage personal profile and user settings',
          'Access support messaging and notifications',
        ],
        futureImprovements: [
          'improve messaging functionality',
          'Enhance Quiz system more animated',
        ],
      },
    },
    {
      title: 'Kreatovate -AI-powered marketing and business consulting company',
      description:
        'Developed a suite of three production-grade web applications for Kreatovate, an AI-powered marketing and consulting company, enabling brand presentation, workforce engagement, and creative campaign experiences.',
      image:
        'https://i.ibb.co.com/0yhdyQ48/Screenshot-from-2026-03-24-23-10-44.png',
      demoLink: 'https://kreatovate.com',
      githubLink: '',
      modalContent: {
        bannerImage:
          'https://i.ibb.co.com/0yhdyQ48/Screenshot-from-2026-03-24-23-10-44.png',
        techStack: [
          'React',
          'Next.js',
          'Typescript',
          'RTK Query',
          'GSAP',
          'GHL',
        ],
        description:
          'Developed a suite of three production-grade web applications for Kreatovate, an AI-powered marketing and consulting company, enabling brand presentation, workforce engagement, and creative campaign experiences.',
        challenges: [
          'Connected and integrated GHL',
          'integrated GSAP as per client demand ',
        ],
        futureImprovements: ['Add more features', 'Improve animation'],
      },
    },
    {
      title: 'CYBRS Cybersecurity Platform',
      description:
        'Developed a modern, multilingual cybersecurity platform for CYBRS, powered by Smart Plan for Information Technology (SPIT), focused on delivering secure solutions with a premium user experience.',
      image:
        'https://i.ibb.co.com/bMVGQXjH/Screenshot-from-2026-03-24-23-29-31.png',
      demoLink: 'https://kliege-frontend.vercel.app/en/',
      githubLink: '',
      modalContent: {
        bannerImage:
          'https://i.ibb.co.com/bMVGQXjH/Screenshot-from-2026-03-24-23-29-31.png',
        techStack: ['Next.js', 'Typescript', 'GSAP', 'Lenis', 'TailwindCSS'],
        description:
          'Developed a modern, multilingual cybersecurity platform for CYBRS, powered by Smart Plan for Information Technology (SPIT), focused on delivering secure solutions with a premium user experience.',
        challenges: ['Language switching', 'SEO optimization'],
        futureImprovements: ['Add more features', 'Improve animation'],
      },
    },
  ];

  return (
    <div id="project" className="w-full px-4 sm:px-6 md:px-[10%] py-12">
      {/* Heading */}
      <small className="text-purple-600 font-semibold tracking-wider uppercase text-xs  mt-4 flex items-center justify-center text-center gap-1">
        What I have built
      </small>
      <h2 className="  text-center  md:text-5xl text-3xl sm:text-4xl lg:text-5xl font-bold font-[SUSE] mt-2 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        My Recent Work
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md border border-gray-400 p-4 cursor-pointer hover:bg-purple-50 hover:-translate-y-1 duration-300 hover:shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedProject(project)}
                className="px-4 py-2 text-sm rounded-lg border border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                View Details
              </button>
              <a
                href={project.demoLink}
                target="_blank"
                className="px-4 py-2 text-sm rounded-lg border border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                className="px-4 py-2 text-sm rounded-lg border border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-150 overflow-y-scroll text-xs">
          <div className="bg-white text-black py-2 px-6 rounded-xl w-full max-w-xl shadow-lg overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-20 text-black text-2xl"
            >
              <RxCrossCircled />
            </button>
            <div className="bg-white p-3 rounded-md mb-2">
              <img
                src={selectedProject.modalContent.bannerImage}
                alt={selectedProject.title}
                className="w-full h-55 object-cover rounded-md"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Technology Stack</h4>
              <div className="flex space-x-2 mt-2">
                {selectedProject.modalContent.techStack.map((tech, idx) => (
                  <button
                    key={idx}
                    className="btn bg-purple-600 text-white px-2 py-1 rounded"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Description</h4>
              <p className="text-gray-800">
                {selectedProject.modalContent.description}
              </p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Challenges Faced</h4>
              <ul className="list-disc list-inside text-gray-800">
                {selectedProject.modalContent.challenges.map(
                  (challenge, idx) => (
                    <li key={idx}>{challenge}</li>
                  )
                )}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Future Improvements</h4>
              <ul className="list-disc list-inside text-gray-800">
                {selectedProject.modalContent.futureImprovements.map(
                  (improvement, idx) => (
                    <li key={idx}>{improvement}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
