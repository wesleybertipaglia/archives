import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import "./styles.css";

const siteProps = {
  name: "Wesley Bertipaglia",
  title: "Full Stack Web Developer",
  socials: {
    email: "mailto:wesleybertipaglia@gmail.com",
    gitHub: "https://github.com/wesleybertipaglia",
    instagram: "https://www.instagram.com/wesleyberti_",
    linkedIn: "https://www.linkedin.com/in/wesley-bertipaglia/",
    twitter: "https://twitter.com/wesleyberti_",
    youTube: "https://www.youtube.com/@wesleycoding",
  },
};

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero name={siteProps.name} title={siteProps.title} />
        <About />
        <Portfolio />
      </main>
      <Footer {...siteProps} />
    </>
  );
};

export default App;
