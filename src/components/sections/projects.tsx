"use client";
import Image from "next/image";
import React from "react";

const projectData = [
  {
    title: "GSCC",
    description: "Game System Compatibility Checker - Checks PC hardware against game requirements to confirm compatibility before purchase.",
    tags: ["Hardware Analysis", "Gaming", "Compatibility"],
    link: "https://b24bs1555.wixsite.com/msai/gscc"
  },
  {
    title: "Tracker Site", 
    description: "Workforce tracker for attendance, payroll, PF contributions, and performance metrics with real-time updates.",
    tags: ["HR Management", "Analytics", "Real-time"],
    link: "https://b24bs1555.wixsite.com/msai/tracker-site"
  },
  {
    title: "Moody News",
    description: "Curated news feed tailored to the user's current mood for a personalized reading experience.",
    tags: ["AI/ML", "Personalization", "News"],
    link: "https://b24bs1555.wixsite.com/msai/moody-news"
  },
  {
    title: "NEL",
    description: "Named Entity Linking - Identifies and links entities in text to reference entries for better search and analysis.",
    tags: ["NLP", "Text Analysis", "Entity Recognition"],
    link: "https://b24bs1555.wixsite.com/msai/nel"
  },
  {
    title: "QuantumShield Firewall",
    description: "Network firewall interface demonstrating advanced threat detection and real-time monitoring.",
    tags: ["Cybersecurity", "Network", "Monitoring"],
    link: "https://b24bs1555.wixsite.com/msai/quantumshield-firewall"
  },
  {
    title: "All RounderAPI",
    description: "Surreal API Key Generator - Generates secure, unique API keys to simplify app integration and development.",
    tags: ["API", "Security", "Development"],
    link: "https://b24bs1555.wixsite.com/msai/all-rounderapi"
  },
  {
    title: "Traffic Management Wizard",
    description: "Traffic management demo that monitors and controls urban flow with real-time data for safety and efficiency.",
    tags: ["IoT", "Smart City", "Real-time"],
    link: "https://b24bs1555.wixsite.com/msai/traffic-management-wizard"
  },
  {
    title: "Text Analyzer Pro",
    description: "Writing assistant that scores readability, grammar, and style to help craft clearer content.",
    tags: ["NLP", "Writing Assistant", "Analysis"],
    link: "https://b24bs1555.wixsite.com/msai/text-analyzer-pro"
  },
  {
    title: "CardioDetect",
    description: "Early-detection concept analyzing heartbeat patterns with algorithms to flag potential health issues.",
    tags: ["Healthcare", "AI/ML", "Detection"],
    link: "https://b24bs1555.wixsite.com/msai/cardiodetect"
  },
  {
    title: "Face Mask Detection",
    description: "Deep learning model for real-time face mask detection with high accuracy and performance optimization.",
    tags: ["Deep Learning", "Computer Vision", "Detection"],
    link: "https://b24bs1555.wixsite.com/msai/face-mask-detection"
  },
  {
    title: "Customer Churn Prediction",
    description: "Machine learning model predicting customer churn with advanced analytics and actionable insights.",
    tags: ["ML", "Prediction", "Analytics"],
    link: "https://b24bs1555.wixsite.com/msai/customer-churn-prediction"
  },
  {
    title: "Music Genre Classification",
    description: "AI-powered music genre classifier using audio features and machine learning algorithms.",
    tags: ["AI/ML", "Audio Processing", "Classification"],
    link: "https://b24bs1555.wixsite.com/msai/music-genre-classification"
  },
  {
    title: "E-Commerce Recommendation",
    description: "Product recommendation system using collaborative filtering and content-based algorithms.",
    tags: ["Recommendation", "E-commerce", "ML"],
    link: "https://b24bs1555.wixsite.com/msai/ecommerce-recommendation"
  },
  {
    title: "Sentiment Analysis",
    description: "Social media sentiment analysis tool with real-time processing and visualization capabilities.",
    tags: ["NLP", "Sentiment", "Social Media"],
    link: "https://b24bs1555.wixsite.com/msai/sentiment-analysis"
  },
  {
    title: "Spam Mail Analyzer",
    description: "Advanced spam detection system using machine learning to filter and analyze email content.",
    tags: ["ML", "Email Security", "Classification"],
    link: "https://b24bs1555.wixsite.com/msai/spam-mail-analyzer"
  },
  {
    title: "SmartCity IoT",
    description: "IoT-based smart city management system with sensor integration and real-time monitoring.",
    tags: ["IoT", "Smart City", "Sensors"],
    link: "https://b24bs1555.wixsite.com/msai/smartcity-iot"
  },
  {
    title: "Life Goal Unleashed",
    description: "Life Pattern Analyzer - Personal development tool analyzing life patterns and goal achievement strategies.",
    tags: ["Analytics", "Personal Dev", "Patterns"],
    link: "https://b24bs1555.wixsite.com/msai/life-goal-unleashed"
  },
  {
    title: "SocialStarX",
    description: "Social media analytics platform with engagement tracking and performance insights.",
    tags: ["Social Media", "Analytics", "Engagement"],
    link: "https://b24bs1555.wixsite.com/msai/socialstarx"
  },
  {
    title: "ReactNative",
    description: "Cross-platform mobile application built with React Native featuring modern UI and smooth performance.",
    tags: ["React Native", "Mobile", "Cross-platform"],
    link: "https://b24bs1555.wixsite.com/msai/reactnative"
  },
  {
    title: "X Analytics",
    description: "Market analytics platform with real-time data visualization and trend analysis capabilities.",
    tags: ["Analytics", "Market Data", "Visualization"],
    link: "https://b24bs1555.wixsite.com/msai/x-analytics"
  },
  {
    title: "CredWise",
    description: "Credit management and financial advisory platform with personalized recommendations and insights.",
    tags: ["Fintech", "Credit", "Advisory"],
    link: "https://b24bs1555.wixsite.com/msai/credwise"
  },
  {
    title: "FintechAnalytics",
    description: "Comprehensive fintech analytics dashboard with transaction monitoring and financial insights.",
    tags: ["Fintech", "Analytics", "Dashboard"],
    link: "https://b24bs1555.wixsite.com/msai/fintech-analytics"
  },
  {
    title: "SalesAnalytics",
    description: "Sales performance analytics platform with KPI tracking and revenue optimization insights.",
    tags: ["Sales", "Analytics", "KPI"],
    link: "https://b24bs1555.wixsite.com/msai/sales-analytics"
  },
  {
    title: "msGPT",
    description: "Custom GPT implementation with advanced natural language processing and conversational AI capabilities.",
    tags: ["AI/ML", "NLP", "Conversational AI"],
    link: "https://b24bs1555.wixsite.com/msai/msgpt"
  }
];

const Projects = () => {
  return (
    <section
      id="work"
      className="flex flex-col items-center justify-center py-20 px-8"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8 text-center">
        Selected Work
      </h1>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#1a1a2e]/80 backdrop-blur-sm p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="h-full flex flex-col">
              <h2 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;