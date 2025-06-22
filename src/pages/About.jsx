/* eslint-disable no-unused-vars */
import React from 'react'
import TeamListCard from '../components/TeamlistCard'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="dark:bg-gray-900 font-sans"
    >
      {/* Hero Title */}
      <header className="text-center py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gray-800 dark:text-white tracking-wide"
        >
          About <span className="text-blue-600">DOCAPP</span>
        </motion.h1>
      </header>

      {/* Mission & Features */}
      <section className="px-6 py-14 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300"
        >
          <h2 className="text-3xl font-semibold mb-5 text-blue-600 tracking-wide">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-5">
            At DocApp, we believe that technology should enhance human connection, not replace it.
            Our mission is to create seamless digital experiences that empower healthcare providers
            to deliver exceptional care while giving patients the tools they need to take control of their health journey.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
            Since 2009, we've been at the forefront of healthcare innovation, developing cutting-edge
            solutions that have transformed how hospitals, clinics, and patients interact. Our platform
            serves as the digital backbone for healthcare institutions worldwide.
          </p>
        </motion.div>

        {/* Why Choose Us Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-400 tracking-wide">
            Why Choose Us?
          </h2>

          <ul className="space-y-5 text-lg text-gray-300">
            {[
              { title: 'HIPAA Compliant', desc: 'Bank-level security for all patient data' },
              { title: '24/7 Support', desc: 'Round-the-clock technical assistance' },
              { title: 'Easy Integration', desc: 'Seamless setup with existing systems' },
              { title: 'Scalable Solutions', desc: 'Grows with your healthcare practice' },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✔️</span>
                <span className="hover:text-blue-400 transition-colors duration-200">
                  <strong>{item.title}:</strong> {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>


      </section>
    </motion.div>
  )
}

export default About;