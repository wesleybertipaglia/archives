import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Quote from "../components/Quote";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="flex-1">
        <Quote id='1' />
      </main>
      <Footer />
    </div>
  );
}

export default App;
