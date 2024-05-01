import React from "react";

const description =
  "I'm a Full stack web developer from 🇧🇷, passionate about technology and loves creating cool things.";
const skillsList = [
  "Computer Science",
  "Algorithms",
  "Software Development",
  "Web Development",
  "Front-end",
  "Back-end",
  "Testing",
];

const About = () => {
  return (
    <section id="about">
      <div>
        <h2>Hi, I'm Wesley 👋</h2>
        <p className="large">{description}</p>
        <hr />

        <h3>Skills</h3>
        <ul className="skills">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
