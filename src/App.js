import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";



function App() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="resume-section">
        <Experience />
        <Education />
        <TechStack />
        <Projects />
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 mt-10">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Drop by to say Hi!</h3>
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="https://www.linkedin.com/in/syed-mohammed-hussain-8b385b209"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-400"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mohammedjoe53@gmail.com"
              className="text-blue-600 hover:text-blue-400"
            >
              Email: mohammedjoe53@gmail.com
            </a>
          </div>
          <p className="text-sm text-gray-400">
            2025 Designed by <span className="font-medium">Syed Mohammed Hussain</span> on React.js
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;


