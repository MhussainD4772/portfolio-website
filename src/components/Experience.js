import React from "react";

const Experience = () => {
  return (
    <section className="py-16 px-6 bg-[#f9f9f9] text-[#0f172a]">
      <h2 className="text-3xl font-bold mb-8 text-center">💼 Experience</h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* First National Bank */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">QA Automation Engineer</h3>
          <p className="text-sm text-gray-600">First National Bank – Pittsburgh, PA | Nov 2024 – Present</p>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
          <li>Developed and maintained robust automation test scripts using Playwright with Java and Cucumber (BDD).</li>
          <li>Executed end-to-end UI tests across multiple applications: Argo Teller and Navigator, improving test coverage by 40%.</li>
          <li>Implemented timestamp-based validation to verify transaction integrity and timing between systems.</li>
          <li>Captured and validated post-transaction balances using Navigator APIs and UI-based checks, reducing validation time by 25%.</li>
          <li>Integrated test execution and defect tracking into Azure DevOps Boards for real-time feedback and issue resolution.</li>
          <li>Enhanced framework modules by adding reusable functions for logging, reporting, error handling, and dynamic wait times.</li>
          <li>Worked closely with developers to identify critical paths, optimizing test cases for faster regression cycles.</li>
          <li>Utilized Git for version control, ensuring smooth integration and collaboration with the development team on a daily basis.</li>
          </ul>
        </div>

        {/* Amazon */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Quality Analyst</h3>
          <p className="text-sm text-gray-600">Amazon – Hyderabad, India | Aug 2021 – Aug 2022</p>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
          <li>Tested various modules of Amazon Seller Central, focusing on functionality, integration, and regression testing.</li>
          <li>Documented and executed 100+ manual test cases, identifying critical defects that impacted customer transactions.</li>
          <li>Collaborated with cross-functional teams including product managers, developers, and UX designers to define test scenarios and deliverables.</li>
          <li>Logged bugs and tracked them in JIRA, ensuring reproducibility and clear communication with the development team for faster resolution.</li>
          <li>Maintained test metrics and provided weekly QA status reports to stakeholders to track project progress.</li>
          <li>Developed test documentation for functional and non-functional requirements to ensure coverage across user stories.</li>
          <li>Participated in sprint planning, providing input on testing timelines and resource allocation to meet deadlines.</li>
          <li>Performed cross-browser testing on multiple devices to ensure compatibility and enhance customer experience across platforms.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
