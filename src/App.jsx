import React from 'react';

function App() {
  return (
    <>
      <header style={styles.header}>
        <img 
          src="/My.png" 
          alt="Abdullah Zahur Sahibole" 
          style={styles.profileImg} 
        />
        <h1 style={styles.title}>Abdullah Zahur Sahibole</h1>
        <p style={styles.subtitle}>Web Developer | C/C++ Programmer | Java Enthusiast</p>
      </header>

      <section style={styles.section}>
        <h2>About Me</h2>
        <p>
          I’m Abdullah Zahur Sahibole, a passionate and driven developer with experience in building responsive web apps and coding powerful backend systems. I specialize in modern technologies like HTML, CSS, JavaScript, Node.js, and Java — with a solid foundation in C and C++.
        </p>
        <p>
          I love turning creative ideas into real-world applications. Currently exploring backend frameworks, databases, and sharpening my problem-solving skills through competitive programming.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Skills</h2>
        <ul style={styles.skillList}>
          {[
            'C, C++',
            'Java (Core + OOP)',
            'HTML5, CSS3, JavaScript (ES6+)',
            'Bootstrap & Responsive Design',
            'Node.js & Express (Basics)',
            'Vanilla JS',
          ].map((skill, index) => (
            <li key={index} style={styles.skillItem}>{skill}</li>
          ))}
        </ul>
        <div style={{ marginTop: '1rem' }}>
          <strong>Tools & Technologies:</strong><br />
          {['VS Code', 'Git & GitHub', 'Chrome DevTools', 'MySQL', 'Figma'].map((tool, i) => (
            <span key={i} style={styles.badge}>{tool}</span>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2>Projects</h2>
        <div style={styles.card}>
          <h4>Amazon Homepage Clone</h4>
          <p>A pixel-perfect clone of Amazon’s homepage built using HTML and CSS.</p>
          <a href="#" style={styles.link}>View Live</a> | <a href="#" style={styles.link}>Source Code</a>
        </div>
        <div style={styles.card}>
          <h4>Netflix UI</h4>
          <p>A responsive Netflix UI built with CSS Grid and Flexbox for layouts.</p>
          <a href="#" style={styles.link}>View Live</a> | <a href="#" style={styles.link}>Source Code</a>
        </div>
        <div style={styles.card}>
          <h4>Image to Text Converter (Python)</h4>
          <p>Built with Python and Tesseract OCR to extract text from uploaded images.</p>
          <a href="#" style={styles.link}>Try it</a> | <a href="#" style={styles.link}>GitHub</a>
        </div>
      </section>

      <section style={styles.section}>
        <h2>Experience</h2>
        <p>
          <strong>Web Developer Intern @Visual Labs</strong><br />
          <em>June 2025 – Present</em><br />
          • Developed front-end portals using Bootstrap<br />
          • Version control with GitHub<br />
          • Bug fixing and testing JavaScript components
        </p>
      </section>

      <section style={styles.section}>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:abdullahshaibole@gmail.com" style={styles.link}>abdullahshaibole@gmail.com</a></p>
        <p>
          <a 
            href="https://github.com/codewithabdullah8" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.button}
          >
            Connect on GitHub
          </a>
        </p>
        <p>
          <a 
            href="https://www.linkedin.com/in/abdullah-sahibole-a80a432a8/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.button}
          >
            Connect on LinkedIn
          </a>
        </p>
      </section>

      <footer style={styles.footer}>
        <p>© 2025 Abdullah Zahur Sahibole. All Rights Reserved.</p>
      </footer>
    </>
  );
}

const styles = {
  header: {
    background: 'linear-gradient(to right, #0d6efd, #5c88ff)',
    color: 'white',
    padding: '3rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
  },
  profileImg: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    marginBottom: '1rem',
    border: '4px solid white',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
  },
  section: {
    padding: '2rem',
    maxWidth: '850px',
    margin: 'auto',
    lineHeight: '1.7',
  },
  skillList: {
    listStyleType: 'none',
    paddingLeft: '0',
    marginTop: '1rem',
  },
  skillItem: {
    backgroundColor: '#e9f0ff',
    padding: '10px 15px',
    margin: '8px 0',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
  },
  badge: {
    display: 'inline-block',
    background: 'linear-gradient(to right, #adb5bd, #ced4da)',
    color: '#212529',
    padding: '6px 12px',
    borderRadius: '20px',
    margin: '5px 5px 0 0',
    fontSize: '0.85rem',
    fontWeight: '500',
  },
  card: {
    border: '1px solid #dee2e6',
    padding: '1.5rem',
    borderRadius: '10px',
    marginBottom: '1.5rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s ease',
  },
  link: {
    color: '#0d6efd',
    textDecoration: 'none',
    marginRight: '10px',
    fontWeight: '500',
  },
  button: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#0d6efd',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(13,110,253,0.3)',
    transition: 'background-color 0.3s ease',
  },
  footer: {
    backgroundColor: '#f8f9fa',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#333',
    borderTop: '1px solid #dee2e6',
    marginTop: '3rem',
  },
};

export default App;
