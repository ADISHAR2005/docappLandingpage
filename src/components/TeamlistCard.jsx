/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import teamData from '../data/teamdetails.json'

const TeamListCard = () => {
  return (
    <section className="section max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Meet Our Team Members
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card text-center hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-500"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
            <p className="text-sm mb-4">{member.bio}</p>

            <div className="flex justify-center gap-4 mt-2">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
              )}
              {member.email && (
                <a href={`mailto:${member.email}`}>Email</a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default TeamListCard;