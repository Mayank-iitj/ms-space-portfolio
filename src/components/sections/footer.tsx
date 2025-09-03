import React from 'react';
import { FaYoutube, FaGithub, FaDiscord, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-start md:items-center justify-around flex-wrap">
          
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mb-6 md:mb-0">
            <div className="font-bold text-[16px]">Community</div>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] text-gray-200 cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </a>
            <a href="https://github.com/mayank-sharma" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] text-gray-200 cursor-pointer">
              <FaGithub />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] text-gray-200 cursor-pointer">
              <FaDiscord />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mb-6 md:mb-0">
            <div className="font-bold text-[16px]">Social Media</div>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] text-gray-200 cursor-pointer">
              <FaInstagram />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a href="https://linkedin.com/in/mayank-sharma" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] text-gray-200 cursor-pointer">
              <FaLinkedin />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>
          
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mb-6 md:mb-0">
            <div className="font-bold text-[16px]">About</div>
            <a href="#about" className="flex flex-row items-center my-[15px] text-gray-200 cursor-pointer">
              <span className="text-[15px] ml-[6px]">About Me</span>
            </a>
            <a href="#work" className="flex flex-row items-center my-[15px] text-gray-200 cursor-pointer">
              <span className="text-[15px] ml-[6px]">View My Work</span>
            </a>
            <a href="mailto:ms1591934@gmail.com" className="flex flex-row items-center my-[15px] text-gray-200 cursor-pointer">
              <span className="text-[15px] ml-[6px]">ms1591934@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center mt-8">
          © 2024 MAYANK SHARMA (MS). All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;