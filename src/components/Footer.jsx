import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-white py-4">
      <div className="container mx-auto flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row sm:justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-black hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="text-black hover:text-white transition">
            Terms of Service
          </a>
          <a
            href="https://github.com/username/reponame"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
