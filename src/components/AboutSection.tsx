import React from 'react';
import { Award, Users, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">About RedShark AI</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pioneering the future of artificial intelligence with innovative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-gray-300 mb-6 text-lg">
              At RedShark AI, we're on a mission to democratize artificial intelligence and make cutting-edge technology accessible to businesses of all sizes.
            </p>
            <p className="text-gray-300 mb-8 text-lg">
              Founded in 2023, our team of AI experts and data scientists has been pushing the boundaries of what's possible with machine learning and neural networks.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-shark-red-900/30 flex items-center justify-center mb-3">
                  <Award size={24} className="text-shark-red-400" />
                </div>
                <span className="text-4xl font-bold text-white">25+</span>
                <span className="text-gray-400">Awards</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-shark-red-900/30 flex items-center justify-center mb-3">
                  <Users size={24} className="text-shark-red-400" />
                </div>
                <span className="text-4xl font-bold text-white">150+</span>
                <span className="text-gray-400">Team Members</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-shark-red-900/30 flex items-center justify-center mb-3">
                  <Globe size={24} className="text-shark-red-400" />
                </div>
                <span className="text-4xl font-bold text-white">12</span>
                <span className="text-gray-400">Countries</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="RedShark AI Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-black p-4 rounded-lg border border-shark-red-600">
              <p className="text-shark-red-400 font-bold">Trusted by 500+ companies worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;