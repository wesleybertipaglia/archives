import Header from "./Header";
import Footer from "./Footer";

const Scaffold = ({ children }) => {
  return (
    <div className="flex flex-col h-svh">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Scaffold;
