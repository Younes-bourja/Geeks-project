import React, { useState } from "react";
import logo from "./logo.svg";
import poweredBy from "./powered-by-vitawind-dark.png";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sections from "./components/Sections"
import Hero from "./components/Hero"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Sections />
      <Footer />
    </>
  );
}

export default App;
