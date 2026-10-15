import { skillCategoryIcons, skillsData } from "../data/skillsData";

const databaseSkills = new Set(["MongoDB", "Firebase"]);

const Skills = () => {
  const frontend = skillsData.find(
    (category) => category.category === "Frontend Development",
  );
  const backend = skillsData.find(
    (category) => category.category === "Backend Development",
  );
  const devops = skillsData.find((category) => category.category === "DevOps");

  const categories = [
    {
      title: "Frontend",
      icon: "frontend" as const,
      skills: frontend?.skills ?? [],
    },
    {
      title: "Backend",
      icon: "backend" as const,
      skills: (backend?.skills ?? []).filter(
        (skill) => !databaseSkills.has(skill.name),
      ),
    },
    {
      title: "Database",
      icon: "database" as const,
      skills: (backend?.skills ?? []).filter((skill) =>
        databaseSkills.has(skill.name),
      ),
    },
    {
      title: "DevOps",
      icon: "devops" as const,
      skills: devops?.skills ?? [],
    },
  ];

  return (
    <section id="skills" className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl">
            Technical Skills
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-400">
            I specialize in building full-stack applications with modern
            frameworks and technologies
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-lg border border-indigo-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-3">
                {skillCategoryIcons[category.icon]}
              </div>
              <h3 className="mb-2 font-medium text-[#2563eb]">
                {category.title}
              </h3>
              <ul className="list-inside list-disc space-y-1.5 text-base leading-6 marker:text-[#2563eb] text-gray-600 dark:text-gray-300">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="text-sm">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
