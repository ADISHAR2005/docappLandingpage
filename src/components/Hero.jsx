/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 sm:py-32 bg-white dark:bg-gray-900">

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
        >
          Transforming Healthcare <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-400 dark:from-blue-400 dark:to-green-400">
            Management
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-10"
        >
          Streamline your hospital operations while enhancing patient care.
          Our comprehensive platform empowers healthcare professionals and improves patient experiences.
        </motion.p>
      </section>
    </>
  )
}

export default Hero;