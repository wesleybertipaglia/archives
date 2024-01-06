import React from "react";

const projectList = [
  {
    title: "🎉 My Personal Website",
    description:
      "A simple website build with astro, a powerfull js framework focused in SEO, performance and acessibility.",
    url: "https://github.com/wesleybertipaglia/wesleybertipaglia.github.io",
  },
  {
    title: "📚 Learning Repository",
    description:
      "Explore web development with tutorials, examples, and resources. Learn algorithms, web development, git and more. Start coding today!",
    url: "https://github.com/wesleybertipaglia/learning-repository",
  },
  {
    title: "🎨 Front-end Challenges",
    description:
      "The Front-End Challenges Repository is a collection of coding challenges designed to enhance your front-end development skills. Sharpen your HTML, CSS, JavaScript, and framework expertise by problem solving.",
    url: "https://github.com/wesleybertipaglia/frontend-challenges",
  },
  {
    title: "👩‍💻 Code Archive",
    description:
      "A collection of my projects from the archives. Revisit the past, learn from past mistakes, and celebrate progress in code.",
    url: "https://github.com/wesleybertipaglia/code-archive",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div>
        <h2>Portfolio</h2>
        <div className="projects">
          {projectList.map((project) => (
            <a
              className="project-item"
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{project.title} ↗</h3>
              <p className="project-description">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
