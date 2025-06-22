/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-900 text-blue-700 dark:text-gray-300 px-6 py-10 border-t border-blue-100 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-blue-700 dark:text-white mb-4">DOCAPP</h2>
          <p className="text-sm">
            Revolutionizing hospital management with seamless solutions for professionals and patients.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-700 dark:text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/"
                className="hover:text-green-600 dark:hover:text-green-400"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-green-600 dark:hover:text-green-400"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="hover:text-green-600 dark:hover:text-green-400"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-green-600 dark:hover:text-green-400"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-700 dark:text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/privacy-policy"
                className="hover:text-green-600 dark:hover:text-green-400"
              >
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terms"
                className="hover:text-green-600 dark:hover:text-green-400"
              >
                Terms of Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                className="hover:text-green-600 dark:hover:text-green-400"
              >
                Support
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-700 dark:text-white mb-4">Contact Us</h3>
          <p className="text-sm">Email: support@docapp.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="border-t border-blue-100 dark:border-gray-700 mt-10 pt-4 text-center text-sm text-blue-700 dark:text-gray-500">
        <p className="text-sm mt-2">© {new Date().getFullYear()} DOCAPP. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}

export default Footer;
