import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isAboutExpanded, setIsAboutExpanded] = useState(false)
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isSidebarOpen])

  const calendarEvents = [
    { date: '24.–25.4.', track: 'SteelRing' },
    { date: '22.–23.5.', track: 'Pisek' },
    { date: '12.–13.6.', track: 'Zielona Gora' },
    { date: '17.–18.7.', track: 'Pisek' },
    { date: '28.–29.8.', track: 'SteelRing' },
    { date: '18.–19.9.', track: 'Zielona Gora' },
    { date: '16.–17.10.', track: 'Cheb' },
  ]

  const closeSidebar = () => setIsSidebarOpen(false)
  const BASE = import.meta.env.BASE_URL

  return (
    <div className="page-shell">
      <header className="topbar-wrap">
        <nav className="topbar">
          <div className="brand-block">
            <img className="driver-logo" src={`${BASE}logo.png`} alt="Adam Pelčík logo" />
            <span className="status-dot" aria-hidden="true" />
            <span className="brand-name">ADAM PELČÍK</span>
            <a
              className="icon-chip"
              href="https://www.instagram.com/adampelcik_official?igsh=cnB4eWxuZmFuOXN3&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1.2" />
              </svg>
            </a>
            <a className="icon-chip" href="https://www.tiktok.com/@adampelcik_official" target="_blank" rel="noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M14 4v6.2a4.2 4.2 0 1 1-2.6-3.9" />
                <path d="M14 4c1.5 2.1 3.2 3.1 5 3.1" />
              </svg>
            </a>
          </div>

          <ul className="main-menu" aria-label="Main navigation">
            <li>
              <a className="menu-link active" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="menu-link" href="#partners">
                Partners
              </a>
            </li>
            <li>
              <a className="menu-link" href="#calendar">
                Calendar
              </a>
            </li>
            <li>
              <a className="menu-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <div className="topbar-actions">
            <button className="lang-btn" type="button" aria-label="Language switcher">
              EN
              <span aria-hidden="true">⌄</span>
            </button>

            <button
              className="mobile-menu-btn"
              type="button"
              aria-label="Open menu"
              aria-expanded={isSidebarOpen}
              aria-controls="mobile-sidebar"
              onClick={() => setIsSidebarOpen(true)}
            >
              <span aria-hidden="true">☰</span>
            </button>
          </div>
        </nav>
      </header>

      <button
        className={`mobile-overlay${isSidebarOpen ? ' open' : ''}`}
        aria-label="Close menu"
        type="button"
        onClick={closeSidebar}
      />

      <aside className={`mobile-sidebar${isSidebarOpen ? ' open' : ''}`} id="mobile-sidebar" aria-label="Mobile menu">
        <div className="mobile-sidebar-top">
          <span className="mobile-sidebar-title">Menu</span>
          <button className="mobile-close-btn" type="button" aria-label="Close menu" onClick={closeSidebar}>
            ×
          </button>
        </div>

        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a className="mobile-nav-link" href="#about" onClick={closeSidebar}>
            About
          </a>
          <a className="mobile-nav-link" href="#partners" onClick={closeSidebar}>
            Partners
          </a>
          <a className="mobile-nav-link" href="#calendar" onClick={closeSidebar}>
            Calendar
          </a>
          <a className="mobile-nav-link" href="#contact" onClick={closeSidebar}>
            Contact
          </a>
        </nav>

        <button className="mobile-lang-btn" type="button" aria-label="Language switcher">
          EN
          <span aria-hidden="true">⌄</span>
        </button>
      </aside>

      <main className="hero" aria-label="Hero section">
        <section className="hero-media" aria-label="Racing image" />

        <section className="hero-copy">
          <h1 className="hero-title">
            <span>ADAM</span>
            <span>PELČÍK</span>
          </h1>

          <p className="hero-subtitle">Racing driver from Czech Republic</p>

          <button className="cta-btn" type="button">
            Learn more
          </button>
        </section>

        <aside className="side-dots" aria-label="Section indicator">
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </aside>
      </main>

      {/* ── ABOUT SECTION ── */}
      <section className="about-section" id="about">
        <div className="about-inner">

          <div className="about-left">
            <div className="section-label">
              <span className="section-line" aria-hidden="true" />
              <span className="section-tag">01 · MY STORY</span>
            </div>

            <h2 className="about-title">
              <span>ABOUT</span>
              <span>ME</span>
            </h2>

            <div className={`about-body${isAboutExpanded ? ' expanded' : ''}`} id="about-content">
              <p>My name is Adam Pelčík, and my journey in motorsport started in childhood. I first got into karting at the age of seven, when my dad took me to the track. From a young age, I was drawn to anything with an engine – quad bikes, motorcycles, and cars. Even though I couldn't fully pursue it at the time, I always knew I would come back to it.</p>
              <p>The turning point came in November 2024, when I got my own simulator. I started training regularly and quickly began winning online championships. That was the moment I realized I wanted to take motorsport seriously.</p>
              <p>From 2024 to 2025, I was actively racing rental karts, where I gained my first real experience and developed my race pace. In May 2025, I had my first experience in a Rotax Max racing kart. My talent showed immediately, and I was offered a place in the second stage of an academy. However, due to financial reasons, I decided to take a different path.</p>
              <p>At the age of 15, I bought my first kart – a Tillotson – and fully committed to training. During the summer of 2025, I focused on testing and preparation. In September 2025, I competed in my first race in a racing kart, followed by another race two months later, this time in wet conditions, which helped me gain even more valuable experience.</p>
              <p>Currently, I am focused on developing my skills in karting, with the goal of moving up to higher categories such as ROK or Rotax Max Challenge. My long-term goal is to become a professional racing driver and compete in car racing series, ideally in GT or LMP categories.</p>
              <p className="about-closing">This is just the beginning of my journey.</p>
            </div>

            <button
              className="about-toggle-btn"
              type="button"
              aria-expanded={isAboutExpanded}
              aria-controls="about-content"
              onClick={() => setIsAboutExpanded((current) => !current)}
            >
              {isAboutExpanded ? 'Show less' : 'View all'}
            </button>
          </div>

          <div className="about-right">
            <div className="driver-card">
              <div className="driver-card-img-wrap">
                <img src={`${BASE}about_me.jpeg`} alt="Adam Pelčík racing" className="driver-card-img" />
              </div>
              <div className="driver-card-body">
                <div className="driver-card-name">
                  <span className="dcn-first">ADAM</span>
                  <span className="dcn-last">PELČÍK</span>
                </div>
                <p className="driver-card-meta">CZECH REPUBLIC · AGE 15</p>
                <div className="driver-card-divider" />
                <div className="driver-stats">
                  <div className="stat">
                    <span className="stat-value">8<span className="stat-unit"> yrs</span></span>
                    <span className="stat-label">Since first kart</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">2</span>
                    <span className="stat-label">Race kart races</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">Tillotson</span>
                    <span className="stat-label">Current kart</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">GT / LMP</span>
                    <span className="stat-label">Long-term goal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="calendar-section" id="calendar">
        <div className="calendar-inner">
          <div className="calendar-showcase">
            <div className="calendar-showcase-copy">
              <span className="calendar-kicker">Calendar</span>
              <h2 className="calendar-title">2026 Racing Season Calendar</h2>
              <p className="calendar-intro">Confirmed dates and tracks for the current season.</p>
            </div>

            <div className="calendar-showcase-media">
              <img className="calendar-showcase-image" src={`${BASE}calendar.jpeg`} alt="Adam racing on track" />
            </div>
          </div>

          <div className={`calendar-grid${isCalendarExpanded ? ' expanded' : ''}`} id="calendar-content">
            {calendarEvents.map((event, index) => (
              <article className="calendar-card" key={`${event.date}-${event.track}`}>
                <span className="calendar-round">Round {index + 1}</span>
                <h3 className="calendar-track">{event.track}</h3>
                <p className="calendar-date">{event.date}</p>
              </article>
            ))}
          </div>

          <button
            className="calendar-toggle-btn"
            type="button"
            aria-expanded={isCalendarExpanded}
            aria-controls="calendar-content"
            onClick={() => setIsCalendarExpanded((current) => !current)}
          >
            {isCalendarExpanded ? 'Show less' : 'View all'}
          </button>
        </div>
      </section>

      <section className="partners-section" id="partners">
        <div className="partners-inner">
          <div className="partners-showcase">
            <div className="partners-showcase-copy">
              <span className="partners-kicker">Partners</span>
              <h2 className="partners-title">Technical Partner</h2>
              <p className="partners-intro">
                Supporting the project on the technical side and helping build the platform around Adam&apos;s racing journey.
              </p>
            </div>

            <div className="partners-showcase-media">
              <img className="partners-showcase-image" src={`${BASE}partners.jpeg`} alt="Adam racing at the circuit" />
            </div>
          </div>

          <div className="partners-grid">
            <article className="partner-tile">
              <img className="partner-tile-logo" src={`${BASE}aimotor_lgo.png`} alt="AiMotor logo" />
              <p className="partner-tile-name">AiMotor</p>
              <p className="partner-tile-role">Technical Partner</p>
            </article>

            <article className="partner-tile partner-tile-placeholder" aria-label="Open sponsor slot">
              <p className="partner-placeholder-title">Sponsor Slot</p>
              <p className="partner-placeholder-copy">Available for 2026 partner</p>
            </article>

            <article className="partner-tile partner-tile-placeholder" aria-label="Open sponsor slot">
              <p className="partner-placeholder-title">Sponsor Slot</p>
              <p className="partner-placeholder-copy">Available for 2026 partner</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-copy">
            <div className="section-label">
              <span className="section-line" aria-hidden="true" />
              <span className="section-tag">03 · CONTACT</span>
            </div>

            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-intro">
              For partnerships, race opportunities, sponsorship inquiries, or general contact, use the details below.
            </p>

            <div className="contact-cards">
              <a className="contact-card" href="tel:+420776364163">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+420 776 364 163</span>
              </a>

              <a className="contact-card" href="mailto:Sctadam1@gmail.com">
                <span className="contact-label">Email</span>
                <span className="contact-value">Sctadam1@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="contact-visual">
            <img className="contact-image" src={`${BASE}contact.jpeg`} alt="Adam Pelčík racing kart" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
