
import { useState, useEffect } from "react";
import "./App.css";

function App() {
    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    style: "Minimal",
  });

  const updateField = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((current) => current + 1);
  const previousStep = () => setStep((current) => current - 1);

  const resetProject = () => {
    setStep(1);
    setSelectedType("");
    setFormData({
      name: "",
      email: "",
      description: "",
      style: "Minimal",
    });
  };

  return (
    <div className="app">
      <nav className="navbar">
        <a href="#home" className="logo">ATELIER<span>.</span></a>
        <button
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation menu"
>
  {menuOpen ? "✕" : "☰"}
</button>
        <div className={`nav-links ${menuOpen ? "menu-open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services"onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#process"onClick={() => setMenuOpen(false)}>Our Process</a>
          <a href="#builder" className="nav-cta"onClick={() => setMenuOpen(false)}  >Start a Project ↗</a>
        </div>
      </nav>

      <main>
        <section className="hero reveal" id="home">
          <div className="hero-content">
            <p className="eyebrow">INDEPENDENT DIGITAL STUDIO</p>
            <h1>Crafting digital experiences with <em>purpose</em> & elegance.</h1>
            <p className="hero-description">
              We transform ambitious ideas into thoughtful digital experiences
              that inspire, connect and make an impact.
            </p>
            <a href="#builder" className="primary-btn">Start your project ↗</a>
          </div>

          <div className="hero-art">
            <div className="art-circle"></div>
            <div className="art-ring"></div>
            <span className="art-label">DESIGN / DEVELOP / CREATE</span>
            <span className="art-number">01 — 03</span>
          </div>
        </section>

        <section className="services section reveal" id="services">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE CREATE</p>
            <h2>Digital, with <em>intention.</em></h2>
          </div>

          <div className="service-grid">
            {[
              ["01", "Landing Pages", "Focused experiences designed to turn visitors into customers."],
              ["02", "Business Websites", "A refined digital home for ambitious businesses and brands."],
              ["03", "Portfolio Websites", "Personal spaces that showcase your work and tell your story."],
            ].map(([number, title, description]) => (
              <article className="service-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="card-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="builder section reveal" id="builder">
          <div className="section-heading">
            <p className="eyebrow">LET'S WORK TOGETHER</p>
            <h2>Build something <em>meaningful.</em></h2>
            <p>Tell us a little about your vision. We'll help shape the rest.</p>
          </div>

          <div className="builder-box">
            <div className="progress-info">
              <span>PROJECT BRIEF</span>
              <span>STEP {step} / 3</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${(step / 3) * 100}%` }}></div>
            </div>

            {step === 1 && (
              <div className="builder-step">
                <h3>What are we creating?</h3>
                <p>Choose the type of experience you have in mind.</p>
                <div className="type-grid">
                  {["Landing Page", "Business Website", "Portfolio Website"].map((type) => (
                    <button
                      className={`type-card ${selectedType === type ? "selected" : ""}`}
                      key={type}
                      onClick={() => setSelectedType(type)}
                    >
                      <span>{type}</span>
                      <span>↗</span>
                    </button>
                  ))}
                </div>
                <button className="primary-btn" disabled={!selectedType} onClick={nextStep}>
                  Continue ↗
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="builder-step">
                <h3>Tell us about your project.</h3>
                <p>A few details will help us understand your vision.</p>
                <div className="form-grid">
                  <label>
                    PROJECT NAME
                    <input name="name" value={formData.name} onChange={updateField} placeholder="Your brand or project" required />
                  </label>
                  <label>
                    EMAIL ADDRESS
                    <input name="email" type="email" value={formData.email} onChange={updateField} placeholder="you@example.com" required />
                  </label>
                  <label className="full-width">
                    PROJECT DESCRIPTION
                    <textarea name="description" value={formData.description} onChange={updateField} placeholder="Tell us what you have in mind..." required />
                  </label>
                  <label className="full-width">
                    PREFERRED DESIGN STYLE
                    <select name="style" value={formData.style} onChange={updateField}>
                      <option>Minimal</option>
                      <option>Luxury</option>
                      <option>Modern</option>
                      <option>Creative</option>
                    </select>
                  </label>
                </div>
                <div className="button-row">
                  <button className="secondary-btn" onClick={previousStep}>← Back</button>
                  <button
                    className="primary-btn"
                    onClick={() => {
                      if (
                        formData.name.trim() &&
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
                        formData.description.trim()
                      ) nextStep();
                      else alert("Please complete all fields with a valid email.");
                    }}
                  >
                    Review Project ↗
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="builder-step">
                <h3>Your vision, at a glance.</h3>
                <p>Here's the project brief you've put together.</p>
                <div className="summary">
                  <div><span>PROJECT TYPE</span><strong>{selectedType}</strong></div>
                  <div><span>PROJECT NAME</span><strong>{formData.name}</strong></div>
                  <div><span>EMAIL</span><strong>{formData.email}</strong></div>
                  <div><span>DESIGN STYLE</span><strong>{formData.style}</strong></div>
                  <div><span>DESCRIPTION</span><strong>{formData.description}</strong></div>
                </div>
                <div className="button-row">
                  <button className="secondary-btn" onClick={previousStep}>← Back</button>
                  <button className="primary-btn" onClick={resetProject}>Start Again ↗</button>
                </div>
                <p className="demo-note">This is a preview of your project brief. No information is sent or stored.</p>
              </div>
            )}
          </div>
        </section>

        <section className="process section reveal" id="process">
          <div className="section-heading">
            <p className="eyebrow">HOW WE WORK</p>
            <h2>Simple by <em>design.</em></h2>
          </div>
          <div className="process-grid">
            <div><span>01</span><h3>Discover</h3><p>We understand your goals, audience and vision.</p></div>
            <div><span>02</span><h3>Design</h3><p>We shape your ideas into a thoughtful experience.</p></div>
            <div><span>03</span><h3>Deliver</h3><p>We bring everything together into a polished website.</p></div>
          </div>
        </section>
      </main>

      <footer>
        <a href="#home" className="logo">ATELIER<span>.</span></a>
        <p>Thoughtfully made. Intentionally digital.</p>
        <span>© 2026 ATELIER STUDIO</span>
      </footer>
    </div>
  );
}

export default App;
