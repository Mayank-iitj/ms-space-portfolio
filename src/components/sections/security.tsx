"use client";

import React from 'react';
import { SparklesIcon, GraduationCapIcon, CalendarIcon, TrophyIcon } from 'lucide-react';

const Security = () => {
  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen w-full h-full py-20" id="about">
      <div className="w-full max-w-4xl px-8 z-[20]">
        {/* Section Badge */}
        <div className="flex items-center justify-center py-2 px-[7px] border border-[#7042f88b] opacity-90 rounded-full shadow-[inset_0_-7px_11px_0_rgba(164,143,255,0.12)] mb-8 w-fit mx-auto">
          <SparklesIcon className="text-[#b49bff] mr-2.5 h-5 w-5" />
          <h1 className="text-[13px] font-normal text-foreground">
            About Me
          </h1>
        </div>

        {/* Title */}
        <div className="text-[40px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
          About Me
        </div>

        {/* About Content */}
        <div className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto space-y-6">
          <p>
            I am Mayank Sharma, a student at IIT Jodhpur pursuing BS in AIDE (Artificial Intelligence and Data Engineering). I am quite fascinated by the number of AI tools in the market and their applications.
          </p>
          
          <p>
            My passion lies in exploring cutting-edge AI technologies and understanding how they can solve real-world problems. From machine learning algorithms to deep learning models, I enjoy diving deep into the technical aspects while keeping an eye on practical implementations.
          </p>
          
          <p>
            Find some of my AI projects and explorations showcased in my work section. Each project represents my journey in understanding and applying various AI tools and technologies.
          </p>
        </div>

        {/* Education Section */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <GraduationCapIcon className="text-purple-400 mr-2 h-6 w-6" />
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Education
            </h2>
          </div>
          
          <div className="space-y-6">
            {/* IIT Jodhpur */}
            <div className="bg-[#1a1a2e]/60 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">IIT Jodhpur</h3>
                  <p className="text-purple-300 font-medium">BS in AIDE (Artificial Intelligence and Data Engineering)</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>2024 - 2028</span>
                </div>
              </div>
            </div>

            {/* 12th CBSE */}
            <div className="bg-[#1a1a2e]/60 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">12th from CBSE</h3>
                  <div className="flex items-center">
                    <TrophyIcon className="mr-2 h-4 w-4 text-yellow-400" />
                    <p className="text-green-400 font-medium">97.5% in PCM</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-400">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>2023 - 2024</span>
                </div>
              </div>
            </div>

            {/* 10th CBSE */}
            <div className="bg-[#1a1a2e]/60 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">10th from CBSE</h3>
                  <div className="flex items-center">
                    <TrophyIcon className="mr-2 h-4 w-4 text-yellow-400" />
                    <p className="text-green-400 font-medium">95.8%</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-400">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>2021 - 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-96 h-96 border border-purple-500/20 rounded-full animate-pulse"></div>
          <div className="absolute w-72 h-72 border border-cyan-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-48 h-48 border border-purple-300/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Security;