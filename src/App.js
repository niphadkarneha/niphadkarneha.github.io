import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import SwitchInput from 'react-input-switch';
import parse from 'html-react-parser';
import './App.css';
import Article from './Components/Blog/Article';
import Blog from './Components/Blog/Blog';
import Copyright from './Components/Blog/Copyright';
import News from './Components/News/News';
import { resumeData } from './resumeData';

const publications = [
  {
    title: 'Policy-Aligned Autonomous Data Pipelines in Higher Education: A Governance-First Approach to Self-Healing Systems',
    doi: '10.1109/ICAD69378.2026.11608691',
    description: 'Explores how data pipelines can recover from failures while following institutional policies.'
  },
  {
    title: 'A Risk-Based Governance Framework for Responsible AI in Higher Education Analytics',
    doi: '10.1109/ICAD69378.2026.11609057',
    description: 'Proposes a framework for assessing AI risk and choosing appropriate oversight in university analytics.'
  }
];

const profileStyles = `
  .profile {
    --paper: #faf7f0;
    --ink: #252922;
    --olive: #3d573c;
    --muted: #525a4d;
    --line: #d7dbd0;
    min-height: 100%;
    background: var(--paper);
    color: var(--ink);
    text-align: left;
    font: 1rem/1.65 system-ui, sans-serif;
  }
  .profile *, .profile *::before, .profile *::after { box-sizing: border-box; }
  .profile a { color: var(--olive); text-decoration: underline; text-underline-offset: .2em; }
  .profile a:hover { color: var(--ink); }
  .profile a:focus-visible { outline: 2px solid var(--olive); outline-offset: 4px; }
  .profile-wrap { width: min(100% - 3rem, 68rem); margin-inline: auto; }
  .profile-top { border-bottom: 1px solid var(--line); }
  .profile-bar, .profile-nav, .profile-links { display: flex; flex-wrap: wrap; align-items: center; }
  .profile-bar { justify-content: space-between; gap: .65rem 2rem; padding-block: 1.1rem; }
  .profile-nav, .profile-links { gap: .55rem 1.35rem; }
  .profile .profile-brand { font: 1.2rem Georgia, serif; text-decoration: none; }
  .profile-nav a { font-size: .92rem; font-weight: 600; }
  .profile-hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(12rem, 17rem);
    gap: clamp(2rem, 7vw, 6rem);
    align-items: center;
    padding-block: clamp(3rem, 8vw, 7rem);
  }
  .profile h1, .profile h2, .profile h3 { color: var(--ink); font-family: Georgia, serif; }
  .profile h1 { font-size: clamp(2.8rem, 7.5vw, 5.7rem); line-height: .99; letter-spacing: -.055em; }
  .profile-role { color: var(--olive); font-weight: 650; margin: 1.15rem 0; }
  .profile-intro { font-size: clamp(1.04rem, 2.2vw, 1.23rem); max-width: 41rem; }
  .profile-portrait { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; display: block; border-radius: .5rem; }
  .profile-section { border-top: 1px solid var(--line); padding-block: clamp(2rem, 5vw, 3.75rem); }
  .profile-section h2 { margin: 0 0 1.1rem; font-size: clamp(1.95rem, 4.2vw, 3rem); line-height: 1.1; }
  .profile-section h3 { margin: 0; font-size: clamp(1.22rem, 2.5vw, 1.6rem); line-height: 1.3; }
  .profile-section p { margin: .65rem 0 0; max-width: 48rem; }
  .profile .profile-meta { color: var(--muted); font-size: .9rem; }
  .profile-paper + .profile-paper { margin-top: 1.5rem; }
  .profile-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.75rem 3rem; }
  .profile-footer { border-top: 1px solid var(--line); padding-block: 1.5rem; }
  @media (max-width: 640px) {
    .profile-wrap { width: calc(100% - 2rem); }
    .profile-hero, .profile-grid { grid-template-columns: 1fr; }
    .profile-portrait { max-width: 13rem; }
  }
`;

function ProfessionalHome() {
  return (
    <div className="profile">
      <style>{profileStyles}</style>
      <header className="profile-top">
        <div className="profile-wrap profile-bar">
          <Link className="profile-brand" to="/">Neha Niphadkar</Link>
          <nav className="profile-nav" aria-label="Main navigation">
            <a href="#work">Selected work</a>
            <a href="#research">Research</a>
            <Link to="/blog">Writing</Link>
            <a href="#cv">CV</a>
          </nav>
        </div>
      </header>
      <main className="profile-wrap">
        <section className="profile-hero" aria-labelledby="profile-name">
          <div>
            <h1 id="profile-name">Neha Niphadkar</h1>
            <p className="profile-role">Director of Analytics and Reporting · Old Dominion University</p>
            <p className="profile-intro">I lead analytics work in higher education, with a focus on enrollment and admissions. I research how data governance and responsible AI can improve the way universities build, maintain, and use their data systems.</p>
            <div className="profile-links">
              <a href="https://www.odu.edu/directory/neha-niphadkar">ODU profile</a>
              <a href="https://www.linkedin.com/in/niphad/">LinkedIn</a>
              <a href="mailto:niphadkarneha@gmail.com">Email</a>
            </div>
          </div>
          <img className="profile-portrait" src="/images/neha_newyork.jpg" alt="Neha Niphadkar" />
        </section>
        <section id="work" className="profile-section" aria-labelledby="work-heading">
          <h2 id="work-heading">Selected work</h2>
          <h3>Admissions and enrollment analytics</h3>
          <p>I developed an admissions leadership dashboard that brings together application volume, conversion rates, and registration pace. The reporting reflects how campus and online applicants move through admissions. For example, it tracks admit-to-registration conversion for online students and shows confirmation as a distinct stage for campus students.</p>
        </section>
        <section id="research" className="profile-section" aria-labelledby="research-heading">
          <h2 id="research-heading">Research</h2>
          {publications.map(({ title, doi, description }) => (
            <article className="profile-paper" key={doi}>
              <h3><a href={'https://doi.org/' + doi}>{title}</a></h3>
              <p className="profile-meta">IEEE · ICAD 2026</p>
              <p>{description}</p>
            </article>
          ))}
        </section>
        <section className="profile-section" aria-labelledby="talks-heading">
          <h2 id="talks-heading">Talks and service</h2>
          <div className="profile-grid">
            <article>
              <h3>Move Beyond Reactive Reporting: Building Intelligent, Governance-Driven Enrollment Insights</h3>
              <p className="profile-meta">EDUCAUSE Annual Conference Online · October 2026</p>
            </article>
            <article>
              <h3>2027 EDUCAUSE Horizon Report</h3>
              <p className="profile-meta">Panelist</p>
              <p>My interests include AI adoption, institutional decision-making, and how analytics teams support both.</p>
            </article>
          </div>
        </section>
        <section id="cv" className="profile-section" aria-labelledby="cv-heading">
          <h2 id="cv-heading">CV highlights</h2>
          <div className="profile-grid">
            <div>
              <h3>Experience</h3>
              <p>Director of Analytics and Reporting, Old Dominion University</p>
              <p>Previously Data Analytics Manager, Old Dominion University</p>
            </div>
            <div>
              <h3>Education and certification</h3>
              <p>MS in Computer Science, Old Dominion University</p>
              <p>MA in Industrial and Organizational Psychology and BA in Psychology, University of Mumbai</p>
              <p>DAMA Certified Data Management Professional (CDMP)</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="profile-footer">
        <div className="profile-wrap profile-bar">
          <span>Neha Niphadkar</span>
          <div className="profile-links">
            <Link to="/blog">Writing</Link>
            <a href="https://github.com/niphadkarneha">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function WritingLayout() {
  const [light, setLight] = useState(false);
  const foreground = light ? 'black' : 'white';
  const { blog, home } = resumeData;

  return (
    <div className="App" style={{ backgroundColor: light ? 'white' : 'black' }}>
      <div className="switch-color">
        <SwitchInput value={light} onChange={() => setLight(!light)} />
      </div>
      <div className="container">
        <Switch>
          <Route exact path="/newsletter">
            <News social={home.social} appClr={foreground} colors={home.colors} />
          </Route>
          <Route path="/blog">
            <Blog blogData={blog} appClr={foreground} />
          </Route>
          {blog.articles.map((article, index) => (
            <Route key={article.link} exact path={'/' + article.link}>
              <Article articleNo={index} articles={blog.articles} blogHeader={blog.header} copyright={blog.copyright} appClr={foreground} />
            </Route>
          ))}
        </Switch>
        <footer>
          <Copyright year={blog.copyright.year} link={parse(blog.copyright.copyLink)} appClr={foreground} />
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ProfessionalHome} />
        <Route component={WritingLayout} />
      </Switch>
    </BrowserRouter>
  );
}
