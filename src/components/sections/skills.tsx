"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const dataSkills = [
  { name: "Python", percentage: 95 },
  { name: "Data Science", percentage: 90 },
  { name: "Data Engineering", percentage: 85 },
  { name: "Data Visualization", percentage: 90 },
  { name: "Data Cleaning", percentage: 92 },
  { name: "Data Entry", percentage: 95 },
  { name: "Analytical Thinking", percentage: 95 },
];

const toolsSkills = [
  { name: "MS Excel", percentage: 95 },
  { name: "Advanced Excel", percentage: 95 },
  { name: "Power BI", percentage: 90 },
  { name: "VS Code", percentage: 90 },
  { name: "GitHub Copilot (GenAI)", percentage: 85 },
  { name: "Netlify", percentage: 85 },
  { name: "Wix", percentage: 80 },
];

const communicationSkills = [
  { name: "English Proficiency (Written)", percentage: 95 },
  { name: "Creative Writing", percentage: 90 },
  { name: "Copywriting", percentage: 85 },
  { name: "Report Writing", percentage: 90 },
  { name: "ChatGPT", percentage: 90 },
  { name: "Cursor (GenAI)", percentage: 85 },
  { name: "Windsurf (GenAI)", percentage: 85 },
];

const additionalSkills = [
  "Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing",
  "Statistical Analysis", "Feature Engineering", "Model Deployment", "A/B Testing",
  "Business Intelligence", "ETL Processes", "API Development", "Web Scraping",
  "Database Management", "Cloud Computing", "Git Version Control", "Jupyter Notebooks",
  "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Matplotlib", "Seaborn", "Plotly"
];

interface SkillBarProps {
  name: string;
  percentage: number;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-purple-400 font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full"
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-8 py-20 px-8"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <div className="flex items-center py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] rounded-full mb-6">
          <Sparkles className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="text-[13px] text-white">Skills & Expertise</h1>
        </div>
        <h2 className="text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold text-center mb-4">
          Skills & Expertise
        </h2>
        <p className="font-script text-[20px] text-gray-200 text-center max-w-2xl">
          Comprehensive skill set in AI, Data Science, and Modern Technologies
        </p>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
        
        {/* Data Science & Analytics */}
        <div className="bg-[#1a1a2e]/80 backdrop-blur-sm p-8 rounded-lg border border-[#2A0E61]">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Data Science & Analytics</h3>
          {dataSkills.map((skill, index) => (
            <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} index={index} />
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="bg-[#1a1a2e]/80 backdrop-blur-sm p-8 rounded-lg border border-[#2A0E61]">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Tools & Technologies</h3>
          {toolsSkills.map((skill, index) => (
            <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} index={index} />
          ))}
        </div>

        {/* Communication & AI Tools */}
        <div className="bg-[#1a1a2e]/80 backdrop-blur-sm p-8 rounded-lg border border-[#2A0E61]">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Communication & AI Tools</h3>
          {communicationSkills.map((skill, index) => (
            <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} index={index} />
          ))}
        </div>
      </div>

      {/* Additional Skills & Technologies */}
      <div className="max-w-7xl w-full bg-[#1a1a2e]/80 backdrop-blur-sm p-8 rounded-lg border border-[#2A0E61] mt-8">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">Additional Skills & Technologies</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {additionalSkills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white rounded-full border border-purple-500/30 hover:scale-105 transition-transform"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;