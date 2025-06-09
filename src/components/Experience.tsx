import  { useState } from 'react';
import { experienceData } from '../data/experienceData';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          {/* <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div> */}
          
          {/* Experience items */}
          {experienceData.map((experience, index) => (
            <div 
              key={index}
              className={`mb-12 relative z-10 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto' : 'md:pl-12'} md:w-1/2 ${index === activeIndex ? 'opacity-100' : 'opacity-80'}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-400 shadow-md transform -translate-y-1/2 md:-translate-x-1/2 top-6"></div>
              
              {/* Content */}
              <div className={`pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary-600 dark:border-primary-400">
                  <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-gray-200">{experience.role}</h3>
                  <h4 className="text-lg font-medium mb-3 text-primary-600 dark:text-primary-400">{experience.company}</h4>
                  
                  <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{experience.duration}</span>
                  </div>
                  
                  <div className="flex items-center mb-4 text-gray-600 dark:text-gray-400 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{experience.location}</span>
                  </div>
                  
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-1">
                    {experience.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;