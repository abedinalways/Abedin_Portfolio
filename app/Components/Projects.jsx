'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RxCrossCircled } from 'react-icons/rx';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'QuickLance - A freelance platform',
      description:
        'QuickLance is a freelance service platform where users can browse freelancers, add services, and manage them. Built using React and Tailwind CSS.',
      image: 'https://i.ibb.co/Rp0Rfh1G/Quick-Lance.png',
      demoLink: 'https://quicklance-e9af0.web.app/',
      githubLink: 'https://github.com/abedinalways/QuickLance-Client',
      modalContent: {
        bannerImage: 'https://i.ibb.co/Rp0Rfh1G/Quick-Lance.png',
        techStack: [
          'React',
          'React Router',
          'TanStack Query',
          'Firebase',
          'Express.js',
          'MongoDB',
        ],
        description:
          'QuickLance is a freelance service platform where users can browse freelancers, add services, and manage them. The frontend is built using React and Tailwind CSS.',
        challenges: [
          'Managing freelancer listings',
          'Ensuring real-time updates',
          'Responsive design',
          'Integrating Firebase authentication securely',
        ],
        futureImprovements: [
          'Add payment integration',
          'Enhance search functionality',
        ],
      },
    },
    {
      title: 'StackMind - A Web Blog Platform',
      description:
        'StackMind is a Web Blog platform built with React & MERN Stack. It provides a responsive UI to browse blogs, post content, and bookmark favorite blogs.',
      image: 'https://i.ibb.co/TxM7wyNX/stack-Mind-app.png',
      demoLink: 'https://stackmind-auth.web.app/',
      githubLink: 'https://github.com/abedinalways/StackMind-Client',
      modalContent: {
        bannerImage: 'https://i.ibb.co/TxM7wyNX/stack-Mind-app.png',
        techStack: [
          'React',
          'Firebase',
          'Context API',
          'JWT',
          'Express.js',
          'MongoDB',
          'DaisyUI',
        ],
        description:
          'StackMind is the frontend for a Web Blog platform, built with React. It provides a responsive UI to browse blogs, post content, manage user accounts, and interact with backend APIs.',
        challenges: [
          'Real-time sync issues',
          'State management',
          'UI optimization',
        ],
        futureImprovements: [
          'Add notifications',
          'Implement dark mode',
          'Improve SEO',
        ],
      },
    },
    {
      title: 'Sohay – Mobile Banking Web App',
      description:
        'Sohay makes mobile banking accessible to everyone with bill payments, money transfers & micro-credit access through a simple UI.',
      image: 'https://i.ibb.co/20F8tXpf/sohay-app.png',
      demoLink: 'https://sohay-auth.web.app/',
      githubLink: 'https://github.com/abedinalways/Sohay-App',
      modalContent: {
        bannerImage: 'https://i.ibb.co/20F8tXpf/sohay-app.png',
        techStack: [
          'React',
          'TailwindCSS',
          'React Router',
          'Firebase',
          'DaisyUI',
        ],
        description:
          'Sohay is a modern mobile banking SPA that brings essential & advanced banking services to your fingertips. From bill payments to micro-credit services, Sohay empowers users with secure transactions.',
        challenges: ['Payment integration', 'SEO optimization'],
        futureImprovements: ['Add blog section', 'Improve loading speed'],
      },
    },
  ];

  return (
    <div id="projects" className="w-full px-4 sm:px-6 md:px-[10%] py-12">
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
            className="bg-white rounded-xl shadow-md border border-gray-200 p-4 cursor-pointer hover:bg-purple-50 hover:-translate-y-1 duration-300 hover:shadow-lg"
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
