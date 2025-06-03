import React from 'react';
import { Code, Laptop, Globe, FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a passionate full-stack developer with over 5 years of experience in building web applications. 
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              My journey in web development started when I was in college, and since then, 
              I've worked with various technologies and frameworks to deliver high-quality 
              products that meet client needs and exceed expectations.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              When I'm not coding, you can find me hiking, reading tech blogs, or experimenting 
              with new technologies to expand my skill set.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">What I Do</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full w-fit mb-4">
                  <Code className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">Web Development</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Building responsive websites and web applications using modern technologies.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full w-fit mb-4">
                  <Laptop className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">App Development</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Creating cross-platform mobile applications with React Native.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full w-fit mb-4">
                  <Globe className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">UI/UX Design</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Designing intuitive and aesthetically pleasing user interfaces.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full w-fit mb-4">
                  <FileText className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">Technical Writing</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Creating clear and concise documentation and technical articles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;