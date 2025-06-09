import {
  Briefcase,
  Calendar,
  GraduationCap,
  Handshake,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { experienceData } from "../data/experienceData";

export default function Timeline() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="space-y-12 w-full ">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center flex-row justify-center`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center z-10"
                >
                  {item.icon === "work" ? (
                    <Briefcase className="w-6 h-6 text-white" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-white" />
                  )}
                </motion.div>
                {/* Content */}
                <div className="w-3/5 pr-8 pl-8 relative">
                  {index === 0 && (
                    <div className="absolute right-10 z-1 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-400 shadow-md transform -translate-y-1/2 md:-translate-x-1/2 top-6 mt-6"></div>
                  )}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-white p-6 rounded-lg shadow-md text-left border-l-4 border-primary-600 dark:border-primary-400`}
                  >
                    <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-gray-200">
                      {item.role}
                    </h3>
                    <h4 className="text-lg font-medium mb-3 text-primary-600 dark:text-primary-400">
                      {item.company}
                    </h4>

                    <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{item.duration}</span>
                    </div>

                    <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400 text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{item.location}</span>
                    </div>

                    {item?.clients && (
                      <div className="flex items-center mb-4 text-gray-600 dark:text-gray-400 text-sm">
                        <Handshake className="h-4 w-4 mr-2" />
                        <span>{item.clients}</span>
                      </div>
                    )}

                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-1">
                      {item.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Empty space for the other side */}
                {/* <div className="w-1/2" /> */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
