import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <NavBar />
      <Hero />
    </main>
  );
}

export default App;
