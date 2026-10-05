const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Who am I
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm <strong>Karthik</strong>, a <strong>Lead Engineer with 8+ years of experience</strong> in designing,
              developing, and delivering scalable, high-performance enterprise web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I started my software development career in <strong>2019</strong> and have since worked across a wide range of
              technologies, with strong expertise in <strong>React, Angular, TypeScript, JavaScript, .NET, Java,
              Microsoft Dynamics 365, Power Platform, and Azure</strong>. My experience spans frontend architecture,
              backend services, CRM solutions, CMS-driven applications, REST/GraphQL integrations, cloud infrastructure,
              CI/CD, and enterprise application modernization.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              In my current role, I work on <strong>React-based Dynamics 365/CRM solutions, Angular/Nx enterprise applications,
              .NET 8 backend services, GraphQL APIs, Azure cloud infrastructure, and modern SSR applications</strong>.
              I have experience designing reusable component libraries, building scalable monorepo architectures,
              implementing performance optimizations, developing CMS-driven applications, and automating deployments using
              <strong> Azure DevOps, Docker, AKS, and Bicep</strong>.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I also actively use <strong>AI-assisted development tools such as Devin and Windsurf</strong> to accelerate
              software development, code generation, debugging, refactoring, testing, documentation, and understanding
              complex codebases. I focus on effectively combining AI-assisted development with engineering practices such
              as code reviews, testing, security, maintainability, and performance. As a Lead Engineer, I enjoy solving
              complex technical problems, mentoring and collaborating with team members, participating in architecture and
              design discussions, working with stakeholders, estimating and planning development activities, and delivering
              reliable solutions within timelines. I'm a strong communicator who enjoys discovering practical solutions,
              facilitating meaningful technical discussions, and building consensus across teams. I'm also passionate about
              continuously learning new technologies and exploring <strong>AI, LLMs, cloud technologies, and modern software
              engineering practices</strong> to stay ahead in the rapidly evolving technology landscape.
            </p>
          </div>
        </div>
        {/* <div className="flex flex-row gap 10">
          <div className="">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              What I Do
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full w-fit mb-4">
                  <Code className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">
                  Web Development
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Building responsive websites and web applications using modern
                  technologies.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full w-fit mb-4">
                  <Laptop className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">
                  App Development
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Creating cross-platform mobile applications with React Native.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full w-fit mb-4">
                  <Globe className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">
                  UI/UX Design
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Designing intuitive and aesthetically pleasing user
                  interfaces.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full w-fit mb-4">
                  <FileText className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">
                  Technical Writing
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Creating clear and concise documentation and technical
                  articles.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
