"use client";

import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  projectDetails: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectDetails?: string;
}

export const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectDetails: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        projectDetails: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Primary Email',
      value: 'ms1591934@gmail.com',
      href: 'mailto:ms1591934@gmail.com'
    },
    {
      icon: Mail,
      label: 'Academic Email',
      value: 'b24bs15552@iitj.ac.in',
      href: 'mailto:b24bs15552@iitj.ac.in'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9179184814',
      href: 'tel:+919179184814'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mayankiitj',
      className: 'hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Mayank-iitj',
      className: 'hover:text-purple-400'
    }
  ];

  return (
    <section id="contact" className="relative py-24 px-8 min-h-screen overflow-hidden">
      {/* Background with stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]">
        {/* Animated stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-80 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form - Left Column on Desktop */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              {/* Glass morphism container */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                        errors.name ? 'border-red-500' : 'border-gray-600'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-600'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>

                  {/* Project Details Textarea */}
                  <div>
                    <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      rows={6}
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none ${
                        errors.projectDetails ? 'border-red-500' : 'border-gray-600'
                      }`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.projectDetails && (
                      <p className="mt-1 text-sm text-red-400">{errors.projectDetails}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:from-purple-700 hover:to-cyan-700 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information - Right Column on Desktop, Top on Mobile */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Get In Touch</h3>
                <p className="text-gray-400 text-lg">
                  Feel free to reach out through any of the following channels
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-purple-500/50 hover:bg-gray-800/40 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-purple-300 transition-colors duration-200">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 ${social.className}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Decorative Element */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur-xl" />
                <div className="relative bg-gray-900/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
                  <p className="text-gray-300 text-center italic">
                    "Let's turn your ideas into reality with cutting-edge technology and creative solutions."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};