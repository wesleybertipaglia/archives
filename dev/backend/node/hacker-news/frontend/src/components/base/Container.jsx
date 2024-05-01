const Container = ({ children, classList }) => {
  const className = `container max-w-5xl mx-auto px-6 ${classList}`;

  return <div className={className}>{children}</div>;
};

export default Container;
