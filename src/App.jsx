import './App.css'
import profileImg from '../image.png'

function App() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'Django']
  const projects = [
    {
      title: 'Movie Website',
      description: 'A website to browse movies and search for movie details.',
    },
    {
      title: 'Mini Game Website',
      description: 'A gaming website UI inspired by Valorant theme.',
    },
    {
      title: 'Product-fy Project',
      description: 'A project which is an E-Commerce based website.',
    },
  ]

  return (
    <>
      <header className="header">
        <div className="logo">Manvith<span>.</span></div>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="btn">Hire Me</a>
      </header>

      <section className="Person" id="home">
        <div className="Person-content">
          <h1>Hi, I'm <span>Charan</span></h1>
          <h2>Web Developer</h2>
          <p>
            I am a beginner web developer passionate about building modern and responsive websites using HTML, CSS, and JavaScript.
          </p>

          <div className="Person-buttons">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </div>

        <div className="Person-image">
          <img src={profileImg} alt="profile" />
        </div>
      </section>

      <section className="about" id="about">
        <h2 className="section-title">About <span>Me</span></h2>

        <div className="about-content">
          <article className="about-box">
            <h3>Who am I?</h3>
            <p>
              I am Charan, a student and beginner web developer. I enjoy building websites and learning new technologies.
              My goal is to become a full stack developer and build real-world projects.
            </p>
          </article>

          <article className="about-box">
            <h3>Education</h3>
            <p>
              B.Tech Student From KLH Univerity<br />
              Interested in Web Development & AI Projects <br />
              Building creative projects step by step.
            </p>
          </article>
        </div>
      </section>

      <section className="skills" id="skills">
        <h2 className="section-title">My <span>Skills</span></h2>

        <div className="skills-container">
          {skills.map((skill) => (
            <article className="skill-card" key={skill}>
              <h3>{skill}</h3>
              <p>{skill === 'HTML' && 'Building clean structure for websites.'}{skill === 'CSS' && 'Designing responsive and modern UI.'}{skill === 'JavaScript' && 'Adding interactive features to websites.'}{skill === 'Django' && 'Backend development with Python framework.'}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <h2 className="section-title">My <span>Projects</span></h2>

        <div className="projects-container">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="#" className="project-btn">View</a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="section-title">Contact <span>Me</span></h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="6" required />
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 Charan | All Rights Reserved</p>
      </footer>
    </>
  )
}

export default App
