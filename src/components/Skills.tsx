import { skillsData } from '../data/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Skills categories */}
          {skillsData.map((category, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:shadow-md transition-shadow"
                  >
                    <div className="text-primary-600 dark:text-primary-400 mb-2">
                      {skill.icon}
                    </div>
                    <h4 className="text-gray-800 dark:text-gray-200 font-medium text-center">{skill.name}</h4>
                    
                    {/* Skill level indicator */}
                    {/* <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded-full mt-2 overflow-hidden">
                      <div 
                        className="bg-primary-600 dark:bg-primary-400 h-full rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;