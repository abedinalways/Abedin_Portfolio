'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import emailjs from 'emailjs-com';
import messageAnimation from '@/assets/message.json';
import { assets } from '@/assets/assets';
import Image from 'next/image';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        result => {
          console.log('Email sent:', result.text);
          setStatus('✅ Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        error => {
          console.error('Email error:', error.text);
          setStatus('❌ Failed to send. Try again later.');
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div
        id="contact"
        className="w-full px-[12%] py-10 sdroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
      >
        <section className="relative py-20 px-6 sm:px-10 lg:px-20 flex flex-col items-center justify-center">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-purple-600 font-semibold tracking-wider uppercase text-xs  mt-4 flex items-center justify-center text-center gap-1">
              Connect with me
            </p>
            <h2 className="text-center  md:text-5xl text-3xl sm:text-4xl lg:text-5xl font-bold font-[SUSE] mt-2 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Get in touch
            </h2>
            <p className="text-gray-600 mt-4">
              I’d love to hear from you! If you have any questions, comments, or
              feedback, please use the form below.
            </p>
          </motion.div>

          {/* Form + Lottie Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 flex flex-col gap-4 border border-gray-400"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-400 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <textarea
                name="message"
                placeholder="Enter your message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-300 outline-none"
              ></textarea>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                {loading ? 'Sending...' : 'Submit now →'}
              </motion.button>

              {/* Status message */}
              {status && (
                <p
                  className={`text-sm mt-3 ${
                    status.includes('✅') ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {status}
                </p>
              )}
            </motion.form>

            {/* Lottie Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-64 md:h-full flex items-center justify-center "
            >
              <Lottie
                animationData={messageAnimation}
                loop={true}
                autoplay={true}
                style={{ width: '70%', height: '70%' }}
              />
            </motion.div>
          </div>

          {/* Footer Email */}
          <div className="text-center mt-12">
            <p className="text-gray-800 text-lg font-medium">
              ABEDIN<span className="text-purple-500">.</span>
            </p>
            <p className="text-gray-500 text-sm mt-2 flex justify-center items-center gap-2">
              ✉️ sheikh.minhajul1205045@gmail.com
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
