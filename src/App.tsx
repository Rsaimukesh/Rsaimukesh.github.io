import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Code, 
  Terminal, 
  Lock, 
  Eye, 
  Github, 
  Linkedin, 
  Mail, 
  Download,
  ExternalLink,
  ChevronDown,
  Server,
  Database,
  Network,
  Bug,
  AlertTriangle,
  Key,
  Zap,
  Activity,
  Cpu,
  HardDrive
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        {/* Matrix-like falling code effect */}
        <MatrixRain />
      </div>

      {/* Cursor follower */}
      <div 
        className="fixed w-6 h-6 bg-green-400/30 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(1)',
        }}
      ></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } bg-gray-900/90 backdrop-blur-sm border-b border-gray-800/50`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <Shield className="h-8 w-8 text-green-400 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <div className="absolute inset-0 bg-green-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                CyberSecStudent
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-green-400 relative group ${
                    activeSection === item.toLowerCase() ? 'text-green-400' : 'text-gray-300'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full ${
                    activeSection === item.toLowerCase() ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className={`mb-8 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-green-400 to-blue-500 mb-6 relative group">
              <Lock className="h-16 w-16 text-white transition-all duration-500 group-hover:rotate-12" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="absolute -inset-2 rounded-full border border-green-400/30 animate-spin-slow"></div>
            </div>
          </div>
          
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              Alex Chen
            </span>
          </h1>
          
          <div className={`text-2xl md:text-3xl text-gray-300 mb-8 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <TypewriterText />
          </div>
          
          <p className={`text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Passionate cybersecurity student specializing in ethical hacking, network security, and digital forensics. 
            Building secure solutions for tomorrow's digital challenges.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-1200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center gap-2 group">
              <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
              Download Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-gray-900 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/25 group"
            >
              <span className="group-hover:animate-pulse">Get In Touch</span>
            </button>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-green-400 hover:text-green-300 transition-all duration-300 group"
        >
          <ChevronDown className="h-8 w-8 animate-bounce group-hover:animate-pulse" />
        </button>

        {/* Floating particles */}
        <FloatingParticles />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/30 relative">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader title="About Me" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <AnimatedText delay={200}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a dedicated cybersecurity student with a passion for protecting digital assets and understanding 
                  the evolving landscape of cyber threats. Currently pursuing my degree in Cybersecurity with hands-on 
                  experience in penetration testing and security analysis.
                </p>
              </AnimatedText>
              <AnimatedText delay={400}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My journey in cybersecurity began with curiosity about how systems work and how they can be protected. 
                  I've since developed expertise in various security tools and methodologies, always staying current with 
                  the latest threats and defense strategies.
                </p>
              </AnimatedText>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <StatsCard number="15+" label="Security Tools" delay={600} />
                <StatsCard number="50+" label="Labs Completed" delay={800} />
              </div>
            </div>
            <div className="flex justify-center">
              <AnimatedProfileCircle />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader title="Technical Skills" />
          <div className="grid md:grid-cols-3 gap-8">
            <SkillCategory 
              title="Security Tools"
              icon={<Shield className="h-8 w-8" />}
              skills={[
                { name: "Metasploit", level: 85 },
                { name: "Nmap", level: 90 },
                { name: "Wireshark", level: 80 },
                { name: "Burp Suite", level: 75 },
                { name: "OWASP ZAP", level: 70 }
              ]}
              delay={200}
            />
            <SkillCategory 
              title="Programming"
              icon={<Code className="h-8 w-8" />}
              skills={[
                { name: "Python", level: 85 },
                { name: "JavaScript", level: 75 },
                { name: "Bash/Shell", level: 80 },
                { name: "PowerShell", level: 65 },
                { name: "SQL", level: 70 }
              ]}
              delay={400}
            />
            <SkillCategory 
              title="Platforms"
              icon={<Server className="h-8 w-8" />}
              skills={[
                { name: "Kali Linux", level: 90 },
                { name: "Windows", level: 80 },
                { name: "Ubuntu", level: 85 },
                { name: "AWS", level: 60 },
                { name: "Docker", level: 65 }
              ]}
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/30 relative">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader title="Featured Projects" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Network Vulnerability Scanner"
              description="Automated Python-based scanner that identifies security vulnerabilities in network infrastructure using Nmap and custom vulnerability databases."
              tech={["Python", "Nmap", "JSON", "Threading"]}
              icon={<Network className="h-8 w-8" />}
              github="https://github.com"
              demo="https://demo.com"
              delay={200}
            />
            <ProjectCard
              title="Web App Penetration Testing Lab"
              description="Comprehensive testing environment for practicing web application security assessment techniques including SQL injection and XSS."
              tech={["Docker", "OWASP", "Burp Suite", "PHP"]}
              icon={<Bug className="h-8 w-8" />}
              github="https://github.com"
              demo="https://demo.com"
              delay={400}
            />
            <ProjectCard
              title="Incident Response Automation"
              description="PowerShell-based toolkit for automating incident response procedures and security event analysis in Windows environments."
              tech={["PowerShell", "Windows", "SIEM", "JSON"]}
              icon={<AlertTriangle className="h-8 w-8" />}
              github="https://github.com"
              demo="https://demo.com"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader title="Experience & Education" />
          <div className="space-y-12">
            <TimelineItem
              title="Cybersecurity Intern"
              organization="SecureTech Solutions"
              period="June 2024 - Present"
              description="Assisting with vulnerability assessments and penetration testing for client networks. Gained hands-on experience with enterprise security tools and incident response procedures."
              type="work"
              delay={200}
            />
            <TimelineItem
              title="Bachelor of Science in Cybersecurity"
              organization="University of Technology"
              period="2022 - 2026 (Expected)"
              description="Pursuing comprehensive cybersecurity education with focus on network security, digital forensics, and ethical hacking. Current GPA: 3.8/4.0"
              type="education"
              delay={400}
            />
            <TimelineItem
              title="IT Support Specialist"
              organization="Campus Technology Center"
              period="September 2023 - May 2024"
              description="Provided technical support for students and faculty. Maintained network security protocols and assisted with cybersecurity awareness training programs."
              type="work"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/30 relative">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader title="Get In Touch" />
          <AnimatedText delay={200}>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-12">
              Interested in collaborating or discussing cybersecurity opportunities? 
              Let's connect and build something secure together.
            </p>
          </AnimatedText>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ContactCard
              icon={<Mail className="h-8 w-8" />}
              title="Email"
              content="alex.chen@email.com"
              link="mailto:alex.chen@email.com"
              delay={200}
            />
            <ContactCard
              icon={<Linkedin className="h-8 w-8" />}
              title="LinkedIn"
              content="linkedin.com/in/alexchen"
              link="https://linkedin.com/in/alexchen"
              delay={400}
            />
            <ContactCard
              icon={<Github className="h-8 w-8" />}
              title="GitHub"
              content="github.com/alexchen"
              link="https://github.com/alexchen"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800/50 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Alex Chen. All rights reserved. Built with security in mind.</p>
        </div>
      </footer>
    </div>
  );
}

// Matrix Rain Effect Component
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function draw() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff88';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-10" />;
}

// Floating Particles Component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-green-400/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

// Animated Profile Circle Component
function AnimatedProfileCircle() {
  return (
    <div className="relative group">
      <div className="w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-105">
        <div className="w-64 h-64 bg-gray-700/80 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-400/30 transition-all duration-500 group-hover:border-green-400/60">
          <Eye className="h-32 w-32 text-green-400 transition-all duration-500 group-hover:scale-110 group-hover:text-blue-400" />
        </div>
      </div>
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
        <Shield className="h-6 w-6 text-gray-900" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-pulse delay-1000">
        <Lock className="h-6 w-6 text-white" />
      </div>
      <div className="absolute top-1/2 -left-8 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-pulse delay-2000">
        <Key className="h-4 w-4 text-white" />
      </div>
    </div>
  );
}

// Section Header Component
function SectionHeader({ title }: { title: string }) {
  return (
    <div className="text-center mb-16">
      <AnimatedText delay={0}>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          {title}
        </h2>
      </AnimatedText>
      <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto animate-pulse"></div>
    </div>
  );
}

// Animated Text Component
function AnimatedText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
}

// Stats Card Component
function StatsCard({ number, label, delay }: { number: string; label: string; delay: number }) {
  return (
    <AnimatedText delay={delay}>
      <div className="text-center p-6 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-green-400/50 transition-all duration-300 group hover:scale-105">
        <div className="text-4xl font-bold text-green-400 mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {number}
        </div>
        <div className="text-gray-400">{label}</div>
      </div>
    </AnimatedText>
  );
}

// Typewriter Effect Component
function TypewriterText() {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = [
    'Cybersecurity Student',
    'Ethical Hacker',
    'Security Researcher',
    'Digital Guardian'
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex % phrases.length];
    let timeout: NodeJS.Timeout;

    if (text.length < currentPhrase.length) {
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setText('');
        setCurrentIndex(currentIndex + 1);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [text, currentIndex, phrases]);

  return (
    <span className="font-mono">
      {text}
      <span className="animate-pulse text-green-400">|</span>
    </span>
  );
}

// Enhanced Skill Category Component
function SkillCategory({ 
  title, 
  icon, 
  skills, 
  delay 
}: { 
  title: string; 
  icon: React.ReactNode; 
  skills: Array<{ name: string; level: number }>; 
  delay: number;
}) {
  return (
    <AnimatedText delay={delay}>
      <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600 hover:border-green-400/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-green-400/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-green-400 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110">
            {icon}
          </div>
          <h3 className="text-xl font-semibold group-hover:text-green-400 transition-colors duration-300">
            {title}
          </h3>
        </div>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} delay={delay + (index * 100)} />
          ))}
        </div>
      </div>
    </AnimatedText>
  );
}

// Animated Skill Bar Component
function SkillBar({ skill, delay }: { skill: { name: string; level: number }; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-gray-300">{skill.name}</span>
        <span className="text-green-400 font-mono">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-600 rounded-full h-3 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-2000 ease-out relative overflow-hidden"
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        >
          <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
}

// Enhanced Project Card Component
function ProjectCard({ 
  title, 
  description, 
  tech, 
  icon, 
  github, 
  demo,
  delay 
}: { 
  title: string; 
  description: string; 
  tech: string[]; 
  icon: React.ReactNode;
  github: string;
  demo: string;
  delay: number;
}) {
  return (
    <AnimatedText delay={delay}>
      <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600 hover:border-green-400/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-green-400/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-green-400 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              {icon}
            </div>
            <h3 className="text-xl font-semibold group-hover:text-green-400 transition-colors duration-300">
              {title}
            </h3>
          </div>
          <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((item, index) => (
              <span 
                key={item} 
                className="bg-gray-600 text-green-400 px-3 py-1 rounded-full text-sm hover:bg-green-400 hover:text-gray-900 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a 
              href={github}
              className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-all duration-300 group/link"
            >
              <Github className="h-5 w-5 group-hover/link:scale-110 transition-transform duration-300" />
              Code
            </a>
            <a 
              href={demo}
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-all duration-300 group/link"
            >
              <ExternalLink className="h-5 w-5 group-hover/link:scale-110 transition-transform duration-300" />
              Demo
            </a>
          </div>
        </div>
      </div>
    </AnimatedText>
  );
}

// Enhanced Timeline Item Component
function TimelineItem({ 
  title, 
  organization, 
  period, 
  description, 
  type,
  delay 
}: { 
  title: string; 
  organization: string; 
  period: string; 
  description: string;
  type: 'work' | 'education';
  delay: number;
}) {
  return (
    <AnimatedText delay={delay}>
      <div className="flex items-start gap-6 group">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
          type === 'work' ? 'bg-green-400 group-hover:bg-green-300' : 'bg-blue-500 group-hover:bg-blue-400'
        }`}>
          {type === 'work' ? 
            <Terminal className="h-8 w-8 text-gray-900" /> : 
            <Database className="h-8 w-8 text-white" />
          }
        </div>
        <div className="flex-1 group-hover:translate-x-2 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">
            {title}
          </h3>
          <div className="text-green-400 font-medium mb-2 text-lg">{organization}</div>
          <div className="text-gray-400 text-sm mb-3 font-mono">{period}</div>
          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </AnimatedText>
  );
}

// Enhanced Contact Card Component
function ContactCard({ 
  icon, 
  title, 
  content, 
  link,
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string;
  link: string;
  delay: number;
}) {
  return (
    <AnimatedText delay={delay}>
      <a 
        href={link}
        className="bg-gray-700/50 p-8 rounded-lg border border-gray-600 hover:border-green-400/50 transition-all duration-500 block text-center group hover:scale-105 hover:shadow-2xl hover:shadow-green-400/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="text-green-400 group-hover:text-blue-400 transition-all duration-300 mb-4 flex justify-center group-hover:scale-110 group-hover:rotate-12">
            {icon}
          </div>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            {content}
          </p>
        </div>
      </a>
    </AnimatedText>
  );
}

export default App;