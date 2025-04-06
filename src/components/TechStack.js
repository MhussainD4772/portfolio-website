import React from "react";
import { FaAws, FaGitAlt, FaJava, FaNodeJs, FaPython } from "react-icons/fa";
import { DiReact, DiJenkins } from "react-icons/di";
import { SiPlaywright, SiCucumber, SiGithub, SiKubernetes, SiVisualstudiocode, SiIntellijidea, SiPycharm, SiC } from "react-icons/si";

const TechStack = () => {
  return (
    <div className="techstack-section bg-gray-800 text-white py-10">
      <h2 className="text-3xl font-bold text-center mb-4">Tech Stack</h2>
      <p className="text-center text-lg mb-6">Tools and technologies I work with</p>
      <div className="tech-icons-container flex flex-wrap justify-center gap-8 px-8">
        {/* List of icons */}
        <div className="tech-icon flex flex-col items-center">
          <FaJava size={40} />
          <span>Java</span>
        </div>
        <div className="tech-icon flex flex-col items-center">
          <FaAws size={40} />
          <span>AWS</span>
        </div>
        <div className="tech-icon flex flex-col items-center">
          <SiPlaywright size={40} />
          <span>Playwright</span>
        </div>
        <div className="tech-icon flex flex-col items-center">
          <SiC size={40} />
          <span>C</span>
        </div>
        <div className="tech-icon flex flex-col items-center">
          <SiCucumber size={40} />
          <span>Cucumber</span>
        </div>
        <div className="tech-icon flex flex-col items-center">
          <FaGitAlt size={40} />
          <span>Git</span>
        </div>
        <div className="tech-icon flex flex-col items-center">
          <SiGithub size={40} />
          <span>GitHub</span>
        </div>
        <div className="tech-icon flex flex-col items-center">
          <DiReact size={40} />
          <span>React</span>
        </div>
        <div className="tech-icon flex flex-col items-center">
          <FaNodeJs size={40} />
          <span>Node.js</span>
        </div>
        <div className="tech-icon flex flex-col items-center">
          <FaPython size={40} />
          <span>Python</span>
        </div>
        <div className="tech-icon flex flex-col items-center">
          <DiJenkins size={40} />
          <span>Jenkins</span>
        </div>
        <div className="tech-icon flex flex-col items-center">
          <SiVisualstudiocode size={40} />
          <span>VS Code</span>
        </div>
        <div className="tech-icon flex flex-col items-center">
          <SiIntellijidea size={40} />
          <span>IntelliJ</span>
        </div>
        <div className="tech-icon flex flex-col items-center">
          <SiPycharm size={40} />
          <span>PyCharm</span>
        </div>
        <div className="tech-icon flex flex-col items-center">
          <SiKubernetes size={40} />
          <span>Kubernetes</span>
        </div>
      </div>
    </div>
  );
};

export default TechStack;





