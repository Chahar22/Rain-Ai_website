// src/App.js
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Body1 from "./components/Body1";
// import Features from "./components/Features";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Body1 />
      <Footer />
    </div>
  );
}

export default App;
