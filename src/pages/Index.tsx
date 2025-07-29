import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Github, Linkedin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    'Python', 'Java', 'JavaScript', 'React', 'TensorFlow', 
    'FastAPI', 'MySQL', 'Firebase', 'Unity', 'Machine Learning', 
    'Deep Learning', 'Node.js', 'MongoDB', 'HTML/CSS'
  ];

  const projects = [
    {
      title: "Stock Market Trend Suggester",
      description: "An intelligent system that analyzes market data to provide trend suggestions and predictions using machine learning algorithms.",
      technologies: ["React", "Node.js", "MongoDB", "Python", "TensorFlow"],
      category: "AI/ML"
    },
    {
      title: "Clinic Management System",
      description: "A comprehensive web application for managing clinic operations, patient records, appointments, and medical data.",
      technologies: ["JavaScript", "HTML/CSS", "MySQL", "PHP"],
      category: "Web Development"
    }
  ];

  const competitions = [
    {
      name: "BranStorm",
      position: "2nd Place",
      location: "Hindustan Institution Technology, Coimbatore",
      type: "Hackathon"
    },
    {
      name: "AI Hackathon",
      position: "Participant",
      location: "Kongu Engineering College",
      type: "AI Challenge"
    },
    {
      name: "AiQubit",
      position: "Paper Presentation",
      location: "Karpagam Engineering College, Coimbatore",
      type: "Conference"
    },
    {
      name: "Smart India Hackathon 2024",
      position: "Participant",
      location: "National Level",
      type: "Hackathon"
    },
    {
      name: "Intel Unati Hackathon 2024",
      position: "Participant",
      location: "Intel Corporation",
      type: "Corporate Hackathon"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-mono font-bold text-xl gradient-text">
              Aadil.dev
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors hover:text-tech-blue ${
                    activeSection === item.toLowerCase() ? 'text-tech-blue' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section-padding pt-32 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <p className="text-tech-cyan text-lg font-mono">Hello, I'm</p>
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="gradient-text">Mohamad</span>
                  <br />
                  <span className="gradient-text">Aadil J</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                  AI & Data Science Student
                </h2>
                <p className="text-lg text-gray-400 max-w-lg">
                  Passionate about artificial intelligence, machine learning, and building innovative solutions 
                  that bridge the gap between data and real-world applications.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-tech-blue to-tech-cyan hover:shadow-lg hover:shadow-tech-blue/25 transition-all duration-300"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  className="border-tech-purple text-tech-purple hover:bg-tech-purple hover:text-white transition-all duration-300"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </div>

              <div className="flex space-x-6">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-tech-blue transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-tech-blue transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-float">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 animate-glow"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-tech-purple/30 to-tech-cyan/30 animate-pulse"></div>
                  <img
                    src="/aadil.jpg"
                    alt="Aadil's Profile"
                    className="absolute inset-8 rounded-full object-cover w-[300px] h-[300px] border-4 border-white shadow-xl"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-text">About Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate third-year B.Tech student specializing in Artificial Intelligence and Data Science 
                at Kongu Engineering College. My journey in tech is driven by curiosity and the desire to create 
                intelligent solutions that can make a real impact.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With hands-on experience in machine learning, web development, and competitive programming, 
                I enjoy tackling complex problems and turning innovative ideas into reality. My goal is to 
                contribute to the advancement of AI technology while building scalable and efficient systems.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">7.6</div>
                  <div className="text-gray-400">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-gray-400">Competitions</div>
                </div>
              </div>
            </div>

            <Card className="glass-effect border-white/10 hover-lift">
              <CardHeader>
                <CardTitle className="gradient-text">Current Focus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-tech-cyan rounded-full"></div>
                  <span>Advanced Machine Learning Algorithms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-tech-purple rounded-full"></div>
                  <span>Deep Learning & Neural Networks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-tech-blue rounded-full"></div>
                  <span>Full-Stack Web Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-tech-cyan rounded-full"></div>
                  <span>Data Science & Analytics</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gradient-to-b from-transparent to-dark-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-effect border-white/10 hover-lift group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="bg-tech-blue/20 text-tech-blue border-tech-blue/30">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-tech-blue transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="glass-effect border-white/10 p-4 rounded-lg text-center hover-lift group"
              >
                <span className="group-hover:text-tech-blue transition-colors font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Competitions Section */}
      <section id="education" className="section-padding bg-gradient-to-b from-transparent to-dark-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Education & Achievements</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-8 text-tech-cyan">Education</h3>
              
              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg">B.Tech Artificial Intelligence and Data Science</CardTitle>
                  <CardDescription className="text-gray-300">
                    Kongu Engineering College, Erode, Tamil Nadu, India
                    <br />
                    <span className="text-tech-blue font-semibold">CGPA: 7.6</span> | 2023-2027
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg">Higher Secondary Certificate (HSC)</CardTitle>
                  <CardDescription className="text-gray-300">
                    The Sengunthar Hr. Sec. School
                    <br />
                    <span className="text-tech-blue font-semibold">86% marks</span> | 2021-2023
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Competitions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-8 text-tech-cyan">Competitions & Events</h3>
              
              <div className="space-y-4">
                {competitions.map((comp, index) => (
                  <Card key={index} className="glass-effect border-white/10 hover-lift">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-white">{comp.name}</h4>
                        <Badge 
                          variant="secondary" 
                          className={`${
                            comp.position.includes('Place') ? 'bg-tech-blue/20 text-tech-blue border-tech-blue/30' :
                            'bg-tech-purple/20 text-tech-purple border-tech-purple/30'
                          }`}
                        >
                          {comp.position}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-400">{comp.location}</p>
                      <p className="text-xs text-gray-500 mt-1">{comp.type}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto text-center">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about 
            technology and innovation. Feel free to reach out!
          </p>

          {/* Contact Form */}
          <div className="mb-12">
            <ContactForm />
          </div>

          {/* Alternative Contact Methods */}
          <div className="text-center space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                className="bg-gradient-to-r from-tech-blue to-tech-cyan hover:shadow-lg hover:shadow-tech-blue/25 transition-all duration-300"
                onClick={() => window.open('mailto:mohamadaadilj@gmail.com')}
              >
                Send Direct Email
              </Button>
              
              <Button 
                variant="outline" 
                className="border-tech-purple text-tech-purple hover:bg-tech-purple hover:text-white transition-all duration-300"
                onClick={() => {
                  // This would typically link to a resume PDF file
                  const link = document.createElement('a');
                  link.href = '/resume.pdf'; // You would need to add the actual resume file
                  link.download = 'Mohamad_Aadil_J_Resume.pdf';
                  link.click();
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-8">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-tech-blue transition-colors duration-300"
              >
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-tech-blue transition-colors duration-300"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Mohamad Aadil J. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
