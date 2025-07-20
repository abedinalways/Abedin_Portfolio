import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      mainControls.start('visible');
    }
  }, [inView, mainControls]);

  const skillsData = {
    frontend: {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React.js', level: 90, color: '#61DAFB' },
        { name: 'Next.js', level: 85, color: '#000000' },
        { name: 'JavaScript', level: 88, color: '#F7DF1E' },
        { name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
        { name: 'HTML/CSS', level: 95, color: '#E34F26' },
      ],
    },
    backend: {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85, color: '#339933' },
        { name: 'Express.js', level: 82, color: '#000000' },
        { name: 'MongoDB', level: 80, color: '#47A248' },
        { name: 'MySQL', level: 70, color: '#336791' },
        { name: 'RESTful APIs', level: 88, color: '#FF6B6B' },
        { name: 'Authentication', level: 85, color: '#4ECDC4' },
      ],
    },
    tools: {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 90, color: '#F05032' },
        { name: 'VS Code', level: 95, color: '#007ACC' },
        { name: 'Figma', level: 75, color: '#F24E1E' },
        { name: 'Postman', level: 85, color: '#FF6C37' },
        { name: 'Vercel', level: 80, color: '#000000' },
        { name: 'Docker', level: 60, color: '#2496ED' },
      ],
    },
  };

  const createChartData = skills => ({
    labels: skills.map(skill => skill.name),
    datasets: [
      {
        data: skills.map(skill => skill.level),
        backgroundColor: skills.map(skill => skill.color + '20'),
        borderColor: skills.map(skill => skill.color),
        borderWidth: 2,
        hoverBackgroundColor: skills.map(skill => skill.color + '40'),
        hoverBorderWidth: 3,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.parsed}%`;
          },
        },
      },
    },
  };

  const barChartData = {
    labels: skillsData[activeTab].skills.map(skill => skill.name),
    datasets: [
      {
        label: 'Proficiency Level',
        data: skillsData[activeTab].skills.map(skill => skill.level),
        backgroundColor: skillsData[activeTab].skills.map(
          skill => skill.color + '30'
        ),
        borderColor: skillsData[activeTab].skills.map(skill => skill.color),
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        callbacks: {
          label: function (context) {
            return `${context.parsed.y}% proficiency`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: { color: 'rgba(0, 0, 0, 0.1)' },
        ticks: { color: '#666' },
      },
      x: {
        grid: { display: false },
        ticks: { color: '#666', maxRotation: 45 },
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div id='skills' className="py-16 px-4 sm:px-6 lg:px-[12%]  min-h-screen">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <small className="text-purple-600 font-semibold tracking-wider uppercase text-xs">
            Technical Expertise
          </small>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[SUSE] mt-2 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            My Technical Skills & Expertise
          </h2>
          <p className="text-gray-600 font-[Raleway] text-lg max-w-2xl mx-auto">
            Proficient in modern web technologies with hands-on experience in
            building scalable applications
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center mb-12 gap-4"
        >
          {Object.entries(skillsData).map(([key, data]) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === key
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-md'
              }`}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xl">{data.icon}</span>
              <span className="hidden sm:inline">{data.title}</span>
              <span className="sm:hidden">{key}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Skills List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-3xl">{skillsData[activeTab].icon}</span>
              {skillsData[activeTab].title}
            </h3>

            <div className="space-y-4">
              {skillsData[activeTab].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">
                      {skill.name}
                    </span>
                    <span className="text-sm font-bold text-purple-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={{ width: isVisible ? `${skill.level}%` : 0 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Charts */}
          <div className="space-y-8">
            {/* Doughnut Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-xl"
            >
              <h4 className="text-xl font-bold text-center mb-4 text-gray-800">
                Skills Overview
              </h4>
              <div className="h-64 relative">
                <Doughnut
                  data={createChartData(skillsData[activeTab].skills)}
                  options={chartOptions}
                />
              </div>
            </motion.div>

            {/* Bar Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-xl"
            >
              <h4 className="text-xl font-bold text-center mb-4 text-gray-800">
                Proficiency Levels
              </h4>
              <div className="h-64">
                <Bar data={barChartData} options={barOptions} />
              </div>
            </motion.div>
          </div>
        </motion.div>

       
      </motion.div>
    </div>
  );
};

export default Skills;
