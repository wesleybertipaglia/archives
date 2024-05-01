import Section from "./Section";

const Footer = () => {
  return (
    <footer>
      <Section classList="border-t py-6">
        <div className="text-center">
          {new Date().getFullYear()} Search Genius, Inc.
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
