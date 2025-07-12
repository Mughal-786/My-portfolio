import './App.css'

export default function App() {
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${type} copied to clipboard!`);
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert(`${type} copied to clipboard!`);
    });
  };

  return (
    <div className="portfolio">
      {/* Header/Navigation */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <h2>Maryam Habib</h2>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="particles">
        <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <span className="greeting">Hello, I'm</span>
            <h1 className="name-title">Maryam Habib</h1>
            <h2 className="role-title">Frontend Web Developer</h2>
            <p className="hero-description">I create amazing web experiences with modern technologies and cutting-edge design</p>
            <div className="hero-buttons">
              {/* <button className="cta-button primary">View My Work</button> */}
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-circle">
              <img 
                src="/src/Assert/download (3).jpeg" 
                alt="Maryam Habib - Frontend Developer" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>
      

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate web developer with experience in React, JavaScript, 
                and modern web technologies. I love creating user-friendly applications 
                that solve real-world problems.
              </p>
              <div className="skills">
                <h3>Skills</h3>
                <div className="skill-tags">
                  <span className="skill-tag">⚛️ React</span>
                  <span className="skill-tag">🟨 JavaScript</span>
                  <span className="skill-tag">🌐 HTML/CSS</span>
                  <span className="skill-tag">🎨 Tailwind CSS</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Projects Section */}
       <section id="projects" className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img 
                  src="/src/Assert/download.png" 
                  alt="Digital Clock Project" 
                  className="project-img"
                />
              </div>
              <div className="project-content">
                <h3>DIGITAL CLOCK</h3>
                <p>A modern Digital Clock built with React featuring a neon glow effect and real-time updates</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                </div>
                <div className="project-links">
                  <a href="https://digital-clock-git-main-mughal-786s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                  <a href="https://github.com/Mughal-786/DIGITAL-CLOCK.git" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img 
                src="/src/Assert/download(1).png"
                  alt="Task Manager Project" 
                  className="project-img"
                />
              </div>
              <div className="project-content">
                <h3>Task Manager</h3>
                <p>A modern to-do list application with an intuitive interface for managing daily tasks and projects</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                </div>
                <div className="project-links">
                  <a href="https://task-manager-omega-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                  <a href="https://github.com/Mughal-786/Task-Manager.git" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                </div>
              </div>

            
            
             </div>
          </div>
        </div>   
      </section>

     

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <p>I'm always open to discussing new opportunities and interesting projects.</p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong> ali786ahmad786habib@gmail.com
                <button 
                  onClick={() => copyToClipboard("ali786ahmad786habib@gmail.com", "Email")}
                  className="copy-btn"
                  title="Copy email to clipboard"
                >
                  📋 Copy
                </button>
              </div>
              <div className="contact-item">
                <strong>LinkedIn:</strong> www.linkedin.com/in/maryam-992mm143
                <button 
                  onClick={() => copyToClipboard("www.linkedin.com/in/maryam-992mm143", "LinkedIn URL")}
                  className="copy-btn"
                  title="Copy LinkedIn URL to clipboard"
                >
                  📋 Copy
                </button>
              </div>
              <div className="contact-item">
                <strong>GitHub:</strong> github.com/Mughal-786
                <button 
                  onClick={() => copyToClipboard("github.com/Mughal-786", "GitHub URL")}
                  className="copy-btn"
                  title="Copy GitHub URL to clipboard"
                >
                  📋 Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
    
  )
}
