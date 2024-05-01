const Section = ({ id, children }) => {
    return (
      <section id={id} className="container px-3">
        <div className="container">{children}</div>
      </section>
    );
  };
  
  export default Section;
  