import React from "react";

const Projects = () => {
  return (
    <section className="py-16 px-6 bg-[#f9f9f9] text-[#0f172a]">
      <h2 className="text-3xl font-bold mb-8 text-center">🚀 Projects</h2>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Automated Web Testing Framework</h3>
          <p className="text-sm text-gray-700 mt-2">
          <li>Designed and implemented a comprehensive automation framework using Playwright, Cucumber (BDD), and Java.</li>
          <li>Created reusable functions for login, data validation, and error reporting, reducing test script maintenance by 40%.</li>
          <li>Automated end-to-end UI testing for multiple e-commerce websites, ensuring critical user flows are tested with each release.</li>
          <li>Integrated framework with Jenkins for continuous integration, enabling daily automated test executions with real-time feedback.</li>
          <li>Collaborated with the development team to incorporate test automation into the release pipeline, improving release velocity by 30%.</li>
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">API Testing for E-Commerce Platform</h3>
          <p className="text-sm text-gray-700 mt-2">
          <li>Developed and executed automated tests for RESTful APIs using Postman and Newman to ensure system reliability and performance.</li>
          <li>Built and maintained detailed test cases to validate API response times, status codes, and payload correctness.</li>
          <li>Integrated automated API tests with Jenkins, running tests on every commit to ensure timely defect detection.</li>
          <li>Optimized test coverage by incorporating negative and edge cases, ensuring a comprehensive validation strategy.</li>
          <li>Monitored API performance and logs to identify potential bottlenecks, contributing to a 20% performance improvement.</li>
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Inventory Management System</h3>
          <p className="text-sm text-gray-700 mt-2">
          <li>Led the design and development of an inventory management system that tracks products and stock levels in real-time.</li>
          <li>Implemented user authentication and authorization using JWT and Node.js, improving system security and user access management.</li>
          <li>Built a responsive user interface using React to enhance usability and provide a seamless experience across devices.</li>
          <li>Developed RESTful APIs with Express to enable inventory management actions, such as adding, updating, and removing products.</li>
          <li>Integrated MongoDB for database management, optimizing data storage and retrieval for quick access to inventory information.</li>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
