import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/contact";

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Matthew Yee</h2>
        <p>
          <a href="mailto:matthewyee.dev">matthewyee.dev</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Matthew. I like building things. I am a{" "}
        <a href="https://hackreactor.com/">Hack Reactor @ Galvanize</a>{" "}
        graduate,{" "}
        <a href="https://udacity.com/">
          {" "}
          Udacity Front End Development NanoDegree holder,
        </a>{" "}
        and also have an A.S in Computer Science from
        <a href="https://easternflorida.edu"> Eastern Florida State College.</a>
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        &copy; Matthew Yee <Link to="/">matthewyee.dev</Link>.
      </p>
    </section>
  </section>
);

export default Nav;
