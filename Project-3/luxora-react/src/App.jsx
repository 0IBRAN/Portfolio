
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [websiteType, setWebsiteType] = useState('Landing Page')
  const [technology, setTechnology] = useState('React')
  const [features, setFeatures] = useState([])

  const websitePrices = {
    'Landing Page': 3000,
    'Business Website': 6000,
    'E-commerce': 12000,
    Portfolio: 4000
  }

  const featurePrices = {
    'Payment Gateway': 2000,
    'Admin Dashboard': 3000,
    'Login / Signup': 1500,
    'WhatsApp Integration': 500,
    'SEO Optimization': 1000,
    Animations: 1000,
    'Contact Form': 500,
    'Booking System': 2000
  }

  const featureTotal = features.reduce(
    (total, feature) => total + featurePrices[feature],
    0
  )

  const basePrice = websitePrices[websiteType]
  const totalPrice = basePrice + featureTotal

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)

  const toggleFeature = (feature) => {
    setFeatures((currentFeatures) =>
      currentFeatures.includes(feature)
        ? currentFeatures.filter((item) => item !== feature)
        : [...currentFeatures, feature]
    )
  }

  const whatsappMessage = `Hello LUXORA! I want to discuss a website project.

Website Type: ${websiteType}
Technology: ${technology}
Selected Features: ${features.length ? features.join(', ') : 'No additional features'}
Estimated Price: ${formatPrice(totalPrice)}

Please share more details.`

  const whatsappLink = `https://wa.me/917217800271?text=${encodeURIComponent(whatsappMessage)}`

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      number: '01',
      name: 'Maison Luxe',
      category: 'Luxury E-commerce Website',
      style: 'work-image-one',
      title: 'MAISON',
      subtitle: 'THE ART OF LIVING'
    },
    {
      number: '02',
      name: 'Forma Studio',
      category: 'Interior Design Website',
      style: 'work-image-two',
      title: 'FORMA',
      subtitle: 'SPACES WITH MEANING'
    },
    {
      number: '03',
      name: 'Noir Atelier',
      category: 'Creative Portfolio Website',
      style: 'work-image-three',
      title: 'NOIR',
      subtitle: 'CREATIVE BY NATURE'
    }
  ]

  const services = [
    {
      number: '01',
      title: 'Web Design',
      description: 'Elegant, thoughtful and user-focused digital experiences.'
    },
    {
      number: '02',
      title: 'Web Development',
      description: 'Fast, responsive and modern websites built with care.'
    },
    {
      number: '03',
      title: 'E-commerce',
      description: 'Beautiful online stores designed to turn visitors into customers.'
    }
  ]

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="brand">
          LUXORA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
        </div>

        <a href="#builder" className="nav-button">
          Start a Project ↗
        </a>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow reveal">
              INDEPENDENT DIGITAL STUDIO · EST. 2026
            </span>

            <h1 className="reveal">
              Digital experiences,
              <br />
              made <em>timeless.</em>
            </h1>

            <p className="reveal">
              We craft distinctive digital experiences for ambitious brands.
              Thoughtful design, purposeful development and timeless aesthetics.
            </p>

            <div className="hero-actions reveal">
              <a href="#builder" className="primary-btn">
                Build Your Website ↗
              </a>

              <a href="#work" className="text-btn">
                Explore Our Work
              </a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="visual-frame">
              <div className="visual-top">
                <span>LUXORA STUDIO</span>
                <span>CREATIVE DIVISION</span>
              </div>

              <div className="visual-art">
                <div className="art-circle circle-one"></div>
                <div className="art-circle circle-two"></div>
                <div className="art-circle circle-three"></div>

                <div className="art-text">
                  LESS
                  <br />
                  BUT
                  <br />
                  BETTER.
                </div>

                <span className="art-number">№ 001</span>
              </div>

              <div className="visual-bottom">
                <span>DESIGN WITH PURPOSE</span>
                <span>2026 — PRESENT</span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services" id="services">
          <div className="section-heading reveal">
            <span>WHAT WE DO — 01</span>
            <h2>
              Built around
              <br />
              <em>your vision.</em>
            </h2>
            <p>
              From the first idea to the final interaction, we make every
              detail count.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card reveal" key={service.number}>
                <span>{service.number} / 03</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="about reveal" id="about">
          <span>OUR PHILOSOPHY — 02</span>

          <h2>
            We believe in
            <br />
            <em>less, but better.</em>
          </h2>

          <p>
            Great digital experiences are not just about how things look.
            They are about how naturally everything works together.
          </p>
        </section>

        {/* SELECTED WORK */}
        <section className="selected-work" id="work">
          <div className="section-heading reveal">
            <span>SELECTED WORK — 03</span>
            <h2>
              A few ideas,
              <br />
              <em>beautifully realised.</em>
            </h2>
            <p>
              A selection of concept projects exploring design, identity and
              digital experiences.
            </p>
          </div>

          <div className="work-grid">
            {projects.map((project) => (
              <article className="work-card reveal" key={project.number}>
                <div className={`work-image ${project.style}`}>
                  <span>PROJECT / {project.number}</span>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                  <div className="work-decoration"></div>
                </div>

                <div className="work-info">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.category}</p>
                  </div>
                  <span>↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECT CONFIGURATOR */}
        <section className="configurator" id="builder">
          <div className="configurator-inner">
            <div className="section-heading reveal">
              <span>BUILD YOUR EXPERIENCE — 04</span>
              <h2>
                Your vision.
                <br />
                <em>Your website.</em>
              </h2>
              <p>
                Choose what you need. Get an instant estimated project price.
              </p>
            </div>

            {/* WEBSITE TYPE */}
            <div className="config-section reveal">
              <div className="step-heading">
                <span>STEP 01</span>
                <h3>What are we building?</h3>
              </div>

              <div className="service-grid">
                {Object.entries(websitePrices).map(([name, price]) => (
                  <button
                    type="button"
                    key={name}
                    className={`service-card ${websiteType === name ? 'selected' : ''}`}
                    onClick={() => setWebsiteType(name)}
                    aria-pressed={websiteType === name}
                  >
                    <span>{name}</span>
                    <p>Starting at {formatPrice(price)}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* TECHNOLOGY */}
            <div className="config-section reveal">
              <div className="step-heading">
                <span>STEP 02</span>
                <h3>Choose your technology</h3>
              </div>

              <div className="service-grid technology-grid">
                {['React', 'Next.js', 'HTML / CSS / JavaScript'].map((tech) => (
                  <button
                    type="button"
                    key={tech}
                    className={`service-card ${technology === tech ? 'selected' : ''}`}
                    onClick={() => setTechnology(tech)}
                    aria-pressed={technology === tech}
                  >
                    {tech}
                    <p>{technology === tech ? 'Selected' : 'Choose technology'}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* FEATURES */}
            <div className="config-section reveal">
              <div className="step-heading">
                <span>STEP 03</span>
                <h3>Make it more powerful</h3>
              </div>

              <div className="service-grid">
                {Object.entries(featurePrices).map(([feature, price]) => (
                  <button
                    type="button"
                    key={feature}
                    className={`service-card ${features.includes(feature) ? 'selected' : ''}`}
                    onClick={() => toggleFeature(feature)}
                    aria-pressed={features.includes(feature)}
                  >
                    <span>{feature}</span>
                    <p>
                      {features.includes(feature) ? '✓ Added · ' : '+ Add · '}
                      {formatPrice(price)}
                    </p>
                  </button>
                ))}
              </div>

              <p className="selection-info">
                {features.length} additional feature
                {features.length === 1 ? '' : 's'} selected
              </p>
            </div>

            {/* SUMMARY */}
            <div className="project-summary reveal">
              <span>YOUR PROJECT — SUMMARY</span>
              <h3>A project made for you.</h3>
              <p>Here is your current project configuration.</p>

              <div className="price-breakdown">
                <p>
                  <span>Website Type</span>
                  <strong>{websiteType}</strong>
                </p>

                <p>
                  <span>Technology</span>
                  <strong>{technology}</strong>
                </p>

                <p>
                  <span>Base Price</span>
                  <strong>{formatPrice(basePrice)}</strong>
                </p>

                <p>
                  <span>Additional Features</span>
                  <strong>{formatPrice(featureTotal)}</strong>
                </p>

                {features.length > 0 && (
                  <div className="selected-feature-list">
                    <span>Included features:</span>
                    <p>{features.join(' · ')}</p>
                  </div>
                )}
              </div>

              <div className="total-price">
                <span>ESTIMATED PROJECT PRICE</span>
                <h2>{formatPrice(totalPrice)}</h2>
                <p>
                  This is an initial estimate. Final pricing may vary depending
                  on project requirements and scope.
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="primary-btn quote-btn"
              >
                Get Your Project Quote ↗
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact reveal" id="contact">
          <span>HAVE A PROJECT IN MIND?</span>

          <h2>
            Let's create
            <br />
            <em>something lasting.</em>
          </h2>

          <p>
            Tell us about your idea. Let's turn it into a digital experience.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            Let's Talk on WhatsApp ↗
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <a href="#home" className="brand">
          LUXORA<span>.</span>
        </a>

        <p>© 2026 LUXORA STUDIO. ALL RIGHTS RESERVED.</p>

        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  )
}

export default App
