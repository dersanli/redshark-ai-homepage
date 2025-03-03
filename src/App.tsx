import React, { useState, useEffect } from 'react';
import {
  Brain,
  Cpu,
  Zap,
  ChevronRight,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
} from 'lucide-react';
import heroImage from './assets/image-02.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollPosition > 50
            ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-shark-red-600 rounded-lg flex items-center justify-center">
                <Zap size={24} className="text-white" />
              </div>
              <span className="text-2xl font-display font-bold">
                RedShark<span className="text-shark-red-500">.AI</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="font-medium hover:text-shark-red-400 transition-colors">
                Features
              </a>
              <a
                href="#solutions"
                className="font-medium hover:text-shark-red-400 transition-colors">
                Solutions
              </a>
              <a
                href="#about"
                className="font-medium hover:text-shark-red-400 transition-colors">
                About
              </a>
              <a href="#contact" className="btn-primary">
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-shark-red-900/30 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a
                href="#features"
                className="py-2 px-4 hover:bg-shark-red-900/20 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                Features
              </a>
              <a
                href="#solutions"
                className="py-2 px-4 hover:bg-shark-red-900/20 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                Solutions
              </a>
              <a
                href="#about"
                className="py-2 px-4 hover:bg-shark-red-900/20 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a
                href="#contact"
                className="btn-primary mx-4"
                onClick={() => setIsMenuOpen(false)}>
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 pixel-pattern opacity-30"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                Unleash the Power of{' '}
                <span className="text-gradient">RedShark AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl">
                Cutting-edge artificial intelligence solutions that transform
                your business with predatory precision and unmatched
                performance.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#contact"
                  className="btn-primary flex items-center justify-center">
                  Get Started <ChevronRight size={20} className="ml-2" />
                </a>
                <a
                  href="#features"
                  className="py-3 px-6 border border-shark-red-600/30 rounded-lg text-white font-bold hover:bg-shark-red-900/20 transition-all duration-300 flex items-center justify-center">
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={heroImage}
                alt="RedShark AI"
                className="w-full max-w-lg animate-float"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Powerful AI Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our advanced technology delivers exceptional results across
              multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card group">
              <div className="w-14 h-14 rounded-full bg-shark-red-900/30 flex items-center justify-center mb-6 group-hover:bg-shark-red-800/50 transition-colors">
                <Brain size={28} className="text-shark-red-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Deep Learning</h3>
              <p className="text-gray-400 mb-6">
                Our neural networks process complex data patterns with
                unprecedented accuracy, enabling advanced predictive
                capabilities.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-shark-red-400 hover:text-shark-red-300">
                Learn more <ChevronRight size={16} className="ml-1" />
              </a>
            </div>

            <div className="card group">
              <div className="w-14 h-14 rounded-full bg-shark-red-900/30 flex items-center justify-center mb-6 group-hover:bg-shark-red-800/50 transition-colors">
                <Cpu size={28} className="text-shark-red-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quantum Processing</h3>
              <p className="text-gray-400 mb-6">
                Leveraging quantum computing principles to solve complex
                problems at speeds impossible with traditional computing.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-shark-red-400 hover:text-shark-red-300">
                Learn more <ChevronRight size={16} className="ml-1" />
              </a>
            </div>

            <div className="card group">
              <div className="w-14 h-14 rounded-full bg-shark-red-900/30 flex items-center justify-center mb-6 group-hover:bg-shark-red-800/50 transition-colors">
                <Zap size={28} className="text-shark-red-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-time Analytics</h3>
              <p className="text-gray-400 mb-6">
                Process and analyze massive datasets in real-time, providing
                actionable insights when you need them most.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-shark-red-400 hover:text-shark-red-300">
                Learn more <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title">AI Solutions That Deliver</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transforming industries with intelligent automation and
              data-driven insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Healthcare AI"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Healthcare AI</h3>
                <p className="text-gray-300 mb-4">
                  Revolutionizing patient care with predictive diagnostics and
                  personalized treatment plans.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-shark-red-400 hover:text-shark-red-300">
                  Explore solution <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Financial Intelligence"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold mb-2">
                  Financial Intelligence
                </h3>
                <p className="text-gray-300 mb-4">
                  Advanced fraud detection and algorithmic trading systems for
                  financial institutions.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-shark-red-400 hover:text-shark-red-300">
                  Explore solution <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1717386255777-ce60792a2a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Manufacturing Optimization"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold mb-2">
                  Manufacturing Optimization
                </h3>
                <p className="text-gray-300 mb-4">
                  Streamlining production processes with predictive maintenance
                  and quality control.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-shark-red-400 hover:text-shark-red-300">
                  Explore solution <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-shark-red-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join the ranks of industry leaders who have harnessed the power
                of RedShark AI to stay ahead of the competition.
              </p>
            </div>

            <form className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/50 border border-shark-red-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-shark-red-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/50 border border-shark-red-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-shark-red-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-black/50 border border-shark-red-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-shark-red-500"
                  placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full btn-primary py-4">
                Get Started Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-shark-red-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-shark-red-600 rounded-lg flex items-center justify-center">
                  <Zap size={24} className="text-white" />
                </div>
                <span className="text-2xl font-display font-bold">
                  RedShark<span className="text-shark-red-500">.AI</span>
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Cutting-edge artificial intelligence solutions for
                forward-thinking businesses.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-shark-red-400 transition-colors">
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-shark-red-400 transition-colors">
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-shark-red-400 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-shark-red-400 transition-colors">
                    Healthcare AI
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-shark-red-400 transition-colors">
                    Financial Intelligence
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-shark-red-400 transition-colors">
                    Manufacturing Optimization
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-shark-red-400 transition-colors">
                    Retail Analytics
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-shark-red-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-shark-red-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-shark-red-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-shark-red-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-shark-red-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-shark-red-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-shark-red-400 transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500">
              RedShark AI - &copy; {new Date().getFullYear()} Datacloud Software
              Ltd - All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
