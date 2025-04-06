import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* SMH Initials */}
        <div className="text-xl font-bold text-blue-700">SMH</div>

        {/* Center Text: Welcome to My Portfolio */}
        <div className="text-xl font-semibold text-center flex-grow">
          Welcome to My Portfolio
        </div>

        {/* Right-side buttons and Email */}
        <div className="flex items-center gap-6">
          <a
            href="/Syed_Mohammed_Hussain_Resume.pdf"
            download
            className="text-sm font-medium text-gray-700 border px-4 py-2 rounded-full hover:bg-gray-100 transition"
          >
            Resume
          </a>

          <a
            href="https://linkedin.com/in/syed-mohammed-hussain-8b385b209"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>

          {/* Email Address */}
          <span className="text-sm text-gray-700">
            Email: <span className="font-medium">mohammedjoe53@gmail.com</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;


