import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Layers3,
  Menu,
  Plus,
  Printer,
  Workflow,
  X,
} from "lucide-react";
import { QimahIcon } from "./components/QimahLogo";
import logo from "./assets/logo.svg?url";

const email = "hello@scptric.com";
const contactHref = `mailto:${email}?subject=Let%E2%80%99s%20build%20with%20Scptric`;
const navigation = [
  ["Capabilities", "solutions"],
  ["Projects", "products"],
  ["Our approach", "approach"],
  ["Company", "about"],
];
const capabilities = [
  {
    icon: Workflow,
    title: "Systems development",
    description:
      "Bring your operations together with systems designed around the way your business actually works.",
    items: [
      "Workflow design & automation",
      "Internal tools & business platforms",
      "System integration",
    ],
    number: "01",
  },
  {
    icon: Code2,
    title: "Software engineering",
    description:
      "Turn a clear idea into useful software, with thoughtful architecture and room to evolve.",
    items: [
      "Web applications & custom software",
      "Backend services & APIs",
      "Modernization & maintenance",
    ],
    number: "02",
  },
  {
    icon: Database,
    title: "Data engineering",
    description:
      "Connect scattered data and make it usable, from the first source to the decisions it supports.",
    items: [
      "Data pipelines & integration",
      "Data modeling & storage",
      "Reporting-ready datasets",
    ],
    number: "03",
  },
];
const steps = [
  [
    "Understand",
    "Start with the people, workflows, and constraints. Define the problem before choosing the technology.",
  ],
  [
    "Design",
    "Map the system, agree on priorities, and turn requirements into a practical delivery plan.",
  ],
  [
    "Build & validate",
    "Develop in focused increments, test the critical paths, and review progress together.",
  ],
  [
    "Launch & evolve",
    "Plan the rollout, document the essentials, and agree on what support and improvement look like next.",
  ],
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [copyStatus, setCopyStatus] = useState("");
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 960px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isMenuOpen]);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("Email address copied.");
    } catch {
      setCopyStatus(`Copy this address: ${email}`);
    }
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container nav-inner">
          <a
            href="#home"
            aria-label="Scptric home"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              className="logo"
              src={logo}
              alt="Scptric"
              width="170"
              height="36"
            />
          </a>
          <nav aria-label="Main navigation" className="desktop-nav">
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <a className="button button-small header-cta" href="#contact">
            Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" />
            ) : (
              <Menu aria-hidden="true" />
            )}
          </button>
        </div>
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
          hidden={!isMenuOpen}
        >
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setIsMenuOpen(false)}>
              {label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Let’s talk
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        <section id="home" className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="blue-square" /> Systems. Software. Data.
              </p>
              <h1 id="hero-title">
                Complex work.
                <br />
                Clear systems.
                <br />
                <span className="highlight">Built for you.</span>
              </h1>
              <p className="hero-description">
                We design and build the software that helps your business work
                better—connecting operations, applications, and data.
              </p>
              <div className="hero-actions">
                <a className="button" href="#contact">
                  Discuss your project{" "}
                  <ArrowUpRight size={20} aria-hidden="true" />
                </a>
                <a className="text-link" href="#solutions">
                  Explore our capabilities{" "}
                  <ArrowDown size={17} aria-hidden="true" />
                </a>
              </div>
              <p className="hero-note">
                Custom development. Considered architecture. Practical outcomes.
              </p>
            </div>
            <div
              className="system-visual"
              role="img"
              aria-label="Our engineering approach connects business workflows, software applications, and data into one coherent system."
            >
              <div className="visual-topline">
                <span>THE CONNECTED PICTURE</span>
                <span>01 / 03</span>
              </div>
              <div className="visual-stack">
                <div className="system-layer">
                  <div className="layer-icon">
                    <Workflow />
                  </div>
                  <div>
                    <span className="micro-label">THE WAY YOU WORK</span>
                    <strong>Business systems</strong>
                  </div>
                  <span className="layer-index">01</span>
                </div>
                <div className="layer-connector">
                  <span /> Define. Connect. Automate.
                </div>
                <div className="system-layer featured-layer">
                  <div className="layer-icon">
                    <Code2 />
                  </div>
                  <div>
                    <span className="micro-label">THE TOOLS YOU USE</span>
                    <strong>Purpose-built software</strong>
                  </div>
                  <span className="layer-index">02</span>
                </div>
                <div className="layer-connector">
                  <span /> Collect. Structure. Understand.
                </div>
                <div className="system-layer">
                  <div className="layer-icon">
                    <Database />
                  </div>
                  <div>
                    <span className="micro-label">
                      THE INFORMATION YOU NEED
                    </span>
                    <strong>Connected data</strong>
                  </div>
                  <span className="layer-index">03</span>
                </div>
              </div>
              <div className="visual-bottomline">
                <span className="blue-square" /> Separate disciplines. One
                coherent system.
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
          <div className="container hero-bottom">
            <span>ENGINEERING WITH PURPOSE</span>
            <a href="#solutions">
              Discover Scptric <ArrowDown size={14} aria-hidden="true" />
            </a>
          </div>
        </section>
        <section
          id="solutions"
          className="section light-section"
          aria-labelledby="capabilities-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">01 / What we do</p>
                <h2 id="capabilities-title">
                  Built around
                  <br />
                  your business.
                </h2>
              </div>
              <p>
                From a single workflow to an entire platform, we bring systems
                thinking to every layer of your technology.
              </p>
            </div>
            <div className="capability-grid">
              {capabilities.map(
                ({ icon: Icon, title, description, items, number }) => (
                  <article className="capability-card" key={title}>
                    <div className="card-top">
                      <Icon size={29} aria-hidden="true" />
                      <span>{number}</span>
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <ul>
                      {items.map((item) => (
                        <li key={item}>
                          <Plus size={14} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ),
              )}
            </div>
            <div className="section-footnote">
              <span>
                Have an existing system that needs a better next chapter?
              </span>
              <a className="text-link" href="#contact">
                Let’s look at it together{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        <section
          id="products"
          className="section projects-section"
          aria-labelledby="projects-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / The Scptric portfolio</p>
                <h2 id="projects-title">
                  One company.
                  <br />
                  Distinct systems.
                </h2>
              </div>
              <p>
                Alongside our development services, we’re building a portfolio
                of dedicated systems. Each project has its own purpose and
                identity under Scptric.
              </p>
            </div>
            <div className="project-grid">
              <article className="project-card qimah-card">
                <div className="project-top qimah-top">
                  <span className="project-type">SCPTRIC / PRODUCT INCUBATOR</span>
                  <span className="status qimah-status">
                    <span className="qimah-status-dot" /> In development
                  </span>
                </div>
                <div className="project-art qimah-art" aria-hidden="true">
                  <div className="qimah-symbol">
                    <QimahIcon size={64} />
                  </div>
                  <div className="qimah-art-text">
                    <span className="art-caption">
                      YOUR ASSETS.
                      <br />A CLEARER PICTURE.
                    </span>
                    <div className="qimah-asset-tags">
                      <span>PROPERTY</span>
                      <span>EQUITIES</span>
                      <span>CASH</span>
                      <span>METALS</span>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="qimah-brand-header">
                    <h3 className="qimah-title">
                      Qimah{" "}
                      <span lang="ar" dir="rtl" className="qimah-arabic-name">
                        قيمة
                      </span>
                    </h3>
                    <span className="qimah-category-badge">Asset OS</span>
                  </div>
                  <p>
                    A personal asset management system that brings property,
                    investments, cash, precious metals, and liabilities into one
                    cohesive view of your net worth and financial position.
                  </p>
                  <div className="qimah-allocation-preview" aria-hidden="true">
                    <div className="qimah-allocation-head">
                      <span>PORTFOLIO ALLOCATION</span>
                      <span>NET WORTH PREVIEW</span>
                    </div>
                    <div className="qimah-allocation-track">
                      <span
                        className="qimah-seg qimah-seg-property"
                        style={{ flex: 50 }}
                        title="Property (50%)"
                      />
                      <span
                        className="qimah-seg qimah-seg-equities"
                        style={{ flex: 25 }}
                        title="Equities (25%)"
                      />
                      <span
                        className="qimah-seg qimah-seg-cash"
                        style={{ flex: 15 }}
                        title="Cash (15%)"
                      />
                      <span
                        className="qimah-seg qimah-seg-metals"
                        style={{ flex: 10 }}
                        title="Metals (10%)"
                      />
                    </div>
                    <div className="qimah-allocation-legend">
                      <span>Property 50%</span>
                      <span>Equities 25%</span>
                      <span>Cash 15%</span>
                      <span>Metals 10%</span>
                    </div>
                  </div>
                  <div className="project-footer qimah-footer">
                    <span>
                      A distinct Scptric product. Public release to be
                      announced.
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="qimah-footer-arrow"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </article>
              <article className="project-card print-card">
                <div className="project-top">
                  <span className="project-type">SCPTRIC / PRINT SYSTEM</span>
                  <span className="status">
                    <span /> Future project
                  </span>
                </div>
                <div className="project-art" aria-hidden="true">
                  <div className="print-symbol">
                    <Printer size={64} strokeWidth={1.25} />
                  </div>
                  <span className="art-caption">
                    A DEDICATED SPACE
                    <br />
                    FOR PRINT OPERATIONS.
                  </span>
                </div>
                <div className="project-content">
                  <h3>Print shop management</h3>
                  <p>
                    A separate system for managing print shop operations,
                    planned for a later stage of Scptric’s product development.
                  </p>
                  <div className="project-footer">
                    <span>Scope and timeline are yet to be announced.</span>
                    <Printer size={21} aria-hidden="true" />
                  </div>
                </div>
              </article>
            </div>
            <p className="roadmap-note">
              These systems are not yet available for public purchase or trial.
              Follow @scptric for future updates.
            </p>
          </div>
        </section>
        <section
          id="approach"
          className="section light-section"
          aria-labelledby="approach-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">03 / How we work</p>
                <h2 id="approach-title">
                  Clarity first.
                  <br />
                  Then code.
                </h2>
              </div>
              <p>
                A useful system starts with a shared understanding. Our approach
                keeps the problem, the priorities, and the next step in view.
              </p>
            </div>
            <ol className="process-grid">
              {steps.map(([title, description], index) => (
                <li key={title}>
                  <div className="step-number">
                    0{index + 1}
                    <ArrowRight size={20} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section
          id="about"
          className="section about-section"
          aria-labelledby="about-title"
        >
          <div className="container about-grid">
            <div>
              <p className="eyebrow">04 / Meet Scptric</p>
              <h2 id="about-title">
                Good engineering.
                <br />
                <span className="muted-heading">Real purpose.</span>
              </h2>
              <p className="about-intro">
                Scptric is a technology startup focused on systems development,
                software engineering, and data engineering.
              </p>
              <p>
                We build around a simple idea: technology should make complex
                work easier to understand and manage. That means looking at the
                whole system—the people using it, the processes behind it, and
                the data moving through it.
              </p>
              <a className="text-link" href="#contact">
                Tell us what you’re working on{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="principles">
              <p className="micro-label">WHAT GUIDES THE WORK</p>
              {[
                [
                  "Purpose before complexity",
                  "Choose the tools and architecture that fit the problem.",
                ],
                [
                  "Connected by design",
                  "Think about how applications, workflows, and data work together.",
                ],
                [
                  "Built to be understood",
                  "Value clear code, useful documentation, and maintainable systems.",
                ],
              ].map(([title, description]) => (
                <div className="principle" key={title}>
                  <Check size={20} aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section faq-section" aria-labelledby="faq-title">
          <div className="container faq-grid">
            <div>
              <p className="eyebrow">A few useful details</p>
              <h2 id="faq-title">
                Before we
                <br />
                get started.
              </h2>
            </div>
            <div className="faq-list">
              {[
                [
                  "Can you work with our existing software?",
                  "Yes. A project can focus on integrating tools, improving an existing application, or replacing a workflow that no longer works. We start by understanding what you have and what needs to change.",
                ],
                [
                  "Are Qimah and the print shop system available?",
                  "Not yet. Qimah is a personal asset management system in development as a distinct Scptric project. The print shop management system is a separate future project. Public launch dates have not been announced.",
                ],
                [
                  "What should we include in a project inquiry?",
                  "Tell us what your business does, the problem you want to solve, and who will use the system. If you have existing tools, a target timeline, or a budget range, those are helpful too. An initial idea is enough to start a conversation.",
                ],
              ].map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <Plus size={19} aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Let’s build something useful</p>
              <h2 id="contact-title">
                What needs to
                <br />
                work better?
              </h2>
              <p>
                A new idea, a disconnected workflow, or a system you’ve
                outgrown. Tell us where you are and where you want to go.
              </p>
              <a className="button button-white" href={contactHref}>
                Discuss your project{" "}
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </div>
            <div className="contact-card">
              <span className="micro-label">START A CONVERSATION</span>
              <a className="email-link" href={contactHref}>
                {email}
                <ArrowUpRight size={21} aria-hidden="true" />
              </a>
              <p>
                Share the problem, the people it affects, and what a better
                outcome would look like.
              </p>
              <div className="contact-card-bottom">
                <span>Prefer to use your own email app?</span>
                <button type="button" onClick={copyEmail}>
                  Copy email address
                </button>
              </div>
              <span role="status" className="copy-status">
                {copyStatus}
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#home" aria-label="Scptric home">
                <img
                  className="logo"
                  src={logo}
                  alt="Scptric"
                  width="170"
                  height="36"
                />
              </a>
              <p>
                Systems, software, and data.
                <br />
                Built with purpose.
              </p>
              <span className="social-handle">@scptric</span>
            </div>
            <nav aria-label="Footer navigation">
              <span className="micro-label">EXPLORE</span>
              {navigation.map(([label, id]) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </nav>
            <nav aria-label="Social media">
              <span className="micro-label">FOLLOW SCPTRIC</span>
              {[
                ["LinkedIn", "https://www.linkedin.com/company/scptric"],
                ["X / Twitter", "https://x.com/scptric"],
                ["Instagram", "https://www.instagram.com/scptric/"],
                ["Facebook", "https://www.facebook.com/scptric"],
              ].map(([label, url]) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                  <ArrowUpRight size={14} aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </nav>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Scptric. All rights reserved.
            </span>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default App;
