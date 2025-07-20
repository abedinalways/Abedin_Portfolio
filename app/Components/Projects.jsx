import React, { useState } from 'react';
import { motion } from 'framer-motion';
const Projects = () => {
const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      title: 'QuickLance-A freelance platform',
      description:
        'QuickLance is a freelance service platform where users can browse freelancers, add services, and manage them. This is the frontend of the project built using React and Tailwind CSS.',
      image: 'https://i.ibb.co/Rp0Rfh1G/Quick-Lance.png',
      detailsLink: '#',
      demoLink: 'https://quicklance-e9af0.web.app/',
      githubLink: 'https://github.com/abedinalways/QuickLance-Client',
      modalContent: {
        bannerImage: 'https://i.ibb.co/Rp0Rfh1G/Quick-Lance.png',
        techStack: [
          'React',
          'React-router',
          'Tanstack query',
          'TailwindCSS',
          'Firebase',
          'Express Js',
          'Node js',
          'MongoDB',
        ],
        description:
          'QuickLance is a freelance service platform where users can browse freelancers, add services, and manage them. This is the frontend of the project built using React and Tailwind CSS.',
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
      title: 'StackMind-A Web Blog Platform',
      description:
        'StackMind is a Web Blog platform, built with React. It provides a responsive user interface to browse blogs, post content, manage user accounts, and and bookmark content they love. This Project is built with using MERN Stack',
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
          'Express Js',
          'MongoDB',
          'DaisyUI',
        ],
        description:
          'About This is the frontend for the StackMind Web Blog platform, built with React. It provides a responsive user interface to browse blogs, post content, manage user accounts, and interact with the backend APIs.',
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
      title: ' Sohay – Mobile Banking Web App',
      description:
        'Sohay is designed to make mobile banking accessible to everyone. It simplifies financial tasks like bill payments, money transfers, and micro-credit access through an intuitive and responsive interface.',
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
          'About Sohay is a modern, user-friendly mobile banking Single Page Application (SPA) that brings essential and advanced banking services to your fingertips. From seamless bill payments to micro-credit services, Sohay empowers users—especially in rural and semi-urban areas—with easy, fast, and secure digital financial transactions.',
        challenges: ['Payment method', 'SEO optimization'],
        futureImprovements: ['Add blog section', 'Improve loading speed'],
      },
    },
  ];
  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <small className="flex items-center text-center gap-1 text-xs  justify-center mx-auto">
        what i have built
      </small>
      <h2 className="text-center text-3xl md:text-5xl font-[SUSE] mt-2">
        My Recent Work
      </h2>
      {/* card */}
      <div className="lg:flex lg:justify-between w-full lg:items-center mx-auto gap-6 mt-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white mx-auto shadow-md mb-8  border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:drop-shadow-[0_0px_15px_rgba(0,0,0,0.25)] text-xs text-center md:w-110 h-120 md:h-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full  object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 text-xs">{project.description}</p>
            <div className="md:flex  space-x-4">
              <button
                onClick={() => setSelectedProject(project)}
                className="px-4 py-2 rounded-lg  border border-purple-400 text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                View Details
              </button>
              <a
                href={project.demoLink}
                className="px-4 py-2 rounded-lg  border border-purple-400 text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                className="px-4 py-2 rounded-lg  border border-purple-400 text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <div>
        {/* Modal with Blurred Background */}
        {selectedProject && (
          <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-150 overflow-y-scroll text-xs">
            <div className="bg-gray-900 text-white py-2 px-6 rounded-xl w-full max-w-xl shadow-lg overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                ×
              </button>
              <div className="bg-white p-3 rounded-md mb-2">
                <img
                  src={selectedProject.modalContent.bannerImage}
                  alt={selectedProject.title}
                  className="w-full h-55 object-cover rounded-md"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Technology Stack</h4>
                <div className="flex space-x-2 mt-2">
                  {selectedProject.modalContent.techStack.map((tech, idx) => (
                    <button
                      key={idx}
                      className="btn bg-blue-600 text-white px-2 py-1 rounded"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Description</h4>
                <p className="text-gray-300">
                  {selectedProject.modalContent.description}
                </p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Challenges Faced</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {selectedProject.modalContent.challenges.map(
                    (challenge, idx) => (
                      <li key={idx}>{challenge}</li>
                    )
                  )}
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Future Improvements</h4>
                <ul className="list-disc list-inside text-gray-300">
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
    </div>
  );
};

export default Projects;
