import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaBars,
  FaSun,
  FaMoon,
  FaExternalLinkAlt
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiSocketdotio,
  SiTensorflow,
  SiFlask,
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { icons } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // EmailJS state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // EmailJS handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const result = await emailjs.send(
        'service_e7da7fk',
        'template_zti8oq5',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Ilyas'
        },
        'ZGU468bEFDbPXcJd8'
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const skills = [
    {
      name: 'React',
      level: 90,
      icon: <FaReact className="text-cyan-400" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Node.js',
      level: 85,
      icon: <FaNodeJs className="text-green-500" />,
      color: 'from-green-500 to-emerald-400'
    },
    {
      name: 'Python',
      level: 80,
      icon: <FaPython className="text-yellow-500" />,
      color: 'from-yellow-500 to-amber-400'
    },
    {
      name: 'Tailwind',
      level: 95,
      icon: <SiTailwindcss className="text-teal-400" />,
      color: 'from-teal-400 to-cyan-400'
    },
    {
      name: 'HTML/CSS',
      level: 95,
      icon: <div className="flex gap-1"><FaHtml5 className="text-orange-500" /><FaCss3Alt className="text-blue-500" /></div>,
      color: 'from-orange-500 to-red-400'
    },
    {
      name: 'JavaScript',
      level: 88,
      icon: <FaJs className="text-yellow-400" />,
      color: 'from-yellow-400 to-yellow-300'
    },
    {
      name: 'MongoDb',
      level: 70,
      icon: <SiMongodb className="text-green-400" />,
      color: 'from-green-400 to-green-300'
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Tailwind", "Express"],
      icons: [<FaReact key="r1" />, <FaNodeJs key="n1" />, <SiMongodb key="m1" />, <SiTailwindcss key="t1" />, <SiExpress key="e1" />],
      live: "https://forever-frontend-zeta-one.vercel.app",
      emoji: "🛒"
    },
    {
      title: "StudyHub",
      description: "Real world studing application that encourage pepole to study",
      tech: ["React", "MongoDB", "Express", "Tailwind"],
      icons: [<FaReact key="r2" />, <SiTailwindcss key="t1" />, <SiExpress key="e1" />, <FaNodeJs key="n1" />, <SiMongodb key="t1" />],
      live: "https://studyhub-11.vercel.app",
      emoji: "📚"
    },
    {
      title: "GapAtica",
      description: "A job portal for new softaware developers to know what they still miss in their skillset (coming soon ...)",
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
      icons: [<FaReact key="r3" />, <FaNodeJs key="n1" />, <SiMongodb key="m1" />, <SiTailwindcss key="t1" />, <SiExpress key="e1" />],
      live: '#',
      emoji: "💼"
    }
  ];

  const NavItem = ({ href, children, isActive }) => (
    <li>
      <a
        href={href}
        onClick={() => setMobileMenuOpen(false)}
        className={`px-4 py-2 rounded-lg transition-all duration-300 ${isActive
          ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg'
          : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
      >
        {children}
      </a>
    </li>
  );

  const SkillCard = ({ skill }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl">
          {skill.icon}
        </div>
        <span className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className={`h-3 rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
        <span>Beginner</span>
        <span className="font-bold text-purple-600 dark:text-purple-400">{skill.level}%</span>
        <span>Expert</span>
      </div>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-200 dark:border-gray-700">
      <div className="p-8">
        <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
          {project.emoji}
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

        <div className="flex items-center gap-2 mb-4">
          {project.icons.map((icon, index) => (
            <div key={index} className="text-xl text-gray-600 dark:text-gray-400">
              {icon}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-linear-to-r from-purple-600 to-pink-600 text-white text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a href={project.live} target='_blank' rel="noopener noreferrer" className="flex items-center justify-center gap-2 flex-1 bg-linear-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg text-center hover:shadow-lg transition-all font-medium">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold gradient-text">
              Ilyas.dev
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-2">
                <NavItem href="#home" isActive={activeSection === 'home'}>Home</NavItem>
                <NavItem href="#about" isActive={activeSection === 'about'}>About</NavItem>
                <NavItem href="#skills" isActive={activeSection === 'skills'}>Skills</NavItem>
                <NavItem href="#projects" isActive={activeSection === 'projects'}>Projects</NavItem>
                <NavItem href="#contact" isActive={activeSection === 'contact'}>Contact</NavItem>
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <FaBars className={darkMode ? "text-white" : "text-gray-700"} />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl">
              <ul className="space-y-2">
                <NavItem href="#home" isActive={activeSection === 'home'}>Home</NavItem>
                <NavItem href="#about" isActive={activeSection === 'about'}>About</NavItem>
                <NavItem href="#skills" isActive={activeSection === 'skills'}>Skills</NavItem>
                <NavItem href="#projects" isActive={activeSection === 'projects'}>Projects</NavItem>
                <NavItem href="#contact" isActive={activeSection === 'contact'}>Contact</NavItem>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-linear-to-r from-purple-600 to-pink-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-4xl">
                👨‍💻
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Ilyas</span>
            </h1>

            <div className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              14-Year-Old <span className="text-purple-600 dark:text-purple-400">Full Stack Developer</span>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Building amazing web applications with React, Node.js, Python, and modern technologies.
              Passionate about creating innovative solutions and learning new technologies.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#projects" className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1 shadow-lg">
                View My Work
              </a>
              <a href="#contact" className="border-2 border-purple-600 text-purple-600 dark:text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all">
                Get In Touch
              </a>
            </div>

            {/* Tech Stack Icons */}
            <div className="flex justify-center gap-6 mt-12 text-3xl text-gray-600 dark:text-gray-400">
              <FaReact className="hover:text-cyan-400 transition-colors cursor-pointer" title="React" />
              <FaNodeJs className="hover:text-green-500 transition-colors cursor-pointer" title="Node.js" />
              <FaPython className="hover:text-yellow-500 transition-colors cursor-pointer" title="Python" />
              <SiTailwindcss className="hover:text-teal-400 transition-colors cursor-pointer" title="Tailwind CSS" />
              <FaJs className="hover:text-yellow-400 transition-colors cursor-pointer" title="JavaScript" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            About <span className="text-purple-600 dark:text-purple-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Young Developer with Big Dreams
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Hi! I'm Ilyas, a 14-year-old full stack developer passionate about creating
                innovative web solutions. I started coding when I was 12 and have been
                constantly learning and building ever since.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I specialize in modern web technologies including React, Node.js, Python,
                and Tailwind CSS. I love turning complex problems into simple, beautiful designs
                and creating applications that make a difference.
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">6+</div>
                  <div className="text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">6+</div>
                  <div className="text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">2</div>
                  <div className="text-gray-600 dark:text-gray-400">Years Coding</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white text-center transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-lg">
                <FaReact className="text-4xl mx-auto mb-4" />
                <div className="font-semibold">React Expert</div>
              </div>
              <div className="bg-linear-to-br from-pink-600 to-pink-700 rounded-2xl p-6 text-white text-center transform -rotate-3 hover:rotate-0 transition-transform duration-300 shadow-lg">
                <FaNodeJs className="text-4xl mx-auto mb-4" />
                <div className="font-semibold">Node.js</div>
              </div>
              <div className="bg-linear-to-br from-cyan-500 to-cyan-600 rounded-2xl p-6 text-white text-center transform -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-lg">
                <FaPython className="text-4xl mx-auto mb-4" />
                <div className="font-semibold">Python</div>
              </div>
              <div className="bg-linear-to-br from-teal-500 to-emerald-600 rounded-2xl p-6 text-white text-center transform rotate-2 hover:rotate-0 transition-transform duration-300 shadow-lg">
                <SiTailwindcss className="text-4xl mx-auto mb-4" />
                <div className="font-semibold">Tailwind</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            My <span className="text-purple-600 dark:text-purple-400">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            My <span className="text-purple-600 dark:text-purple-400">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Get In <span className="text-purple-600 dark:text-purple-400">Touch</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Let's Work Together!</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, creative projects,
                  or just having a chat about technology and development. Let's build something amazing together!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                    <div className="w-12 h-12 bg-linear-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg">
                      <FaEnvelope />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">Email</div>
                      <div className="text-gray-600 dark:text-gray-400">ilyasdev01@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                    <div className="w-12 h-12 bg-linear-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg">
                      <FaGithub />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">GitHub</div>
                      <div className="text-gray-600 dark:text-gray-400">github.com/ilyasdev01-creator</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                      ✅ Thank you! Your message has been sent successfully.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                      ❌ Sorry, there was an error sending your message. Please try again.
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-transparent transition-all"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-transparent transition-all resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-linear-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1 shadow-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-3xl font-bold gradient-text mb-4">Ilyas.dev</div>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Building the future, one line of code at a time. Passionate about technology and innovation.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/ilyasdev01-creator" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all transform hover:-translate-y-1 shadow-lg">
              <FaGithub />
            </a>
            <a href="#" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all transform hover:-translate-y-1 shadow-lg">
              <FaTwitter />
            </a>
            <a href="#" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all transform hover:-translate-y-1 shadow-lg">
              <FaLinkedin />
            </a>
            <a href="#" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-500 transition-all transform hover:-translate-y-1 shadow-lg">
              <FaYoutube />
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            © 2025 Ilyas. All rights reserved. | 14-Year-Old Full Stack Developer
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;