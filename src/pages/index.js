import * as React from "react";
import AboutMe from "../resume-contents/about-me.json";
import SkillNames from "../resume-contents/skills.json";
import Educations from "../resume-contents/education.json";
import Experiences from "../resume-contents/experiences.json";
import FreelanceExp from "../resume-contents/freelance-experiences.json";
import profileImage from "../images/profile.jpg";
import "./mystyles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  const sortedExperiences = Experiences.experiences.sort((a, b) =>
    a.year < b.year ? 1 : -1
  );

  const sortedFreelanceExp = FreelanceExp.sort((a, b) =>
    a.active_period < b.active_period ? 1 : -1
  );

  return (
    <main>
      <Helmet title="Gim Yong's Resume" />
      <div className="container is-fluid mb-5 mt-5">
        <div className="columns">
          <div className="column is-4-desktop is-12-mobile">
            <p className="is-size-3">{AboutMe.name}</p>
            <p className="is-size-4">Software Engineer</p>
          </div>
          <div className="column is-12-mobile">
            <figure className="image is-128x128 centerImage">
              <img src={profileImage} className="is-rounded" />
            </figure>
          </div>
          <div className="column is-12-mobile">
            <div className="column has-text-right">
              <p className="is-size-6">
                <FontAwesomeIcon
                  icon={faLocationPin}
                  size="1x"
                  className="icon"
                />
                Penang, Malaysia
              </p>
              <p className="is-size-6">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="1x"
                  className="icon mt-2"
                />
                <a href="mailto:ronaldoloh92@gmail.com">
                  ronaldoloh92@gmail.com
                </a>
              </p>
              <p className="is-size-6">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="1x"
                  className="icon mt-2"
                />
                <a
                  href="https://www.linkedin.com/in/loh-gim-yong-71299699"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </p>
              <p className="is-size-6">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="1x"
                  className="icon mt-2"
                />
                <a href="https://github.com/gyloh9210" target="_blank">
                  GitHub Profile
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container is-fluid">
        <div className="columns">
          <div className="column">
            <div className="divider">&nbsp;</div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="columns">
          <div className="column is-6 is-12-mobile">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Introduction</p>
              </header>
              <div className="card-content">
                <div className="content">{AboutMe.summary}</div>
              </div>
            </div>
          </div>
          <div className="column is-6 is-12-mobile">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Skills</p>
              </header>
              <div className="card-content">
                <div className="content">
                  <p className="title is-5 mb-1">Programming languages</p>
                  {SkillNames.programming_languages.join(", ")}
                  <p className="title is-5 mb-1 mt-5">Frameworks</p>
                  {SkillNames.frameworks.join(", ")}
                  <p className="title is-5 mb-1 mt-5">Methodologies</p>
                  {SkillNames.methodologies.join(", ")}
                  <p className="title is-5 mb-1 mt-5">AWS</p>
                  {SkillNames.AWS.join(", ")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-6 is-12-mobile">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Educations</p>
              </header>
              <div className="card-content">
                <div className="content">
                  {Educations.educations.map((education, index) => (
                    <div key={`education_${index}`}>
                      <p className="title is-4 mb-1 mt-1">
                        {education.certificate} in {education.programme}
                      </p>
                      <p className="subtitle is-6 mt-1 mb-5">
                        {education.grade}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="column is-6 is-12-mobile">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Languages</p>
              </header>
              <div className="card-content">
                <div className="content">
                  {AboutMe.language_spoken.join(", ")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-12-mobile">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Experiences</p>
              </header>
            </div>
            <div className="card-content">
              <div className="content">
                {sortedExperiences.map((experience, index) => (
                  <div key={`experience_${index}`} className="mb-5">
                    <p className="title is-5 mb-1 is-spaced exp-title">
                      {`${experience.company}, ${experience.year} - `}
                      <span className="is-italic">{experience.title}</span>
                    </p>
                    <p className="subtitle is-6 mb-1 has-text-weight-semibold">
                      Responsibilities
                    </p>
                    {experience.responsibilities.map((responsibility, key) => (
                      <p key={"exp_res_" + key} className="my-1">
                        - {responsibility}
                      </p>
                    ))}
                    <p className="subtitle is-6 mb-1 has-text-weight-semibold mt-3">
                      Projects
                    </p>
                    {experience.projects.map((project, key) => (
                      <p key={"exp_pro_" + key} className="my-1">
                        - {project}
                      </p>
                    ))}
                    <p className="subtitle is-6 mt-3">
                      <span className="has-text-weight-semibold">
                        Tech stack:
                      </span>{" "}
                      {experience.tech_stack.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Freelance Experiences</p>
              </header>
            </div>
            <div className="card-content">
              <div className="content">
                {sortedFreelanceExp.map((experience, index) => (
                  <div key={`free_experience_${index}`} className="mb-5">
                    <p className="title is-5 mb-1 is-spaced exp-title">
                      {`${experience.company}, ${experience.active_period}`}
                    </p>
                    <p className="subtitle is-6 mb-1 has-text-weight-semibold">
                      Projects
                    </p>
                    {experience.projects.map((project, key) => (
                      <p key={"free_exp_pro" + key} className="my-1">
                        - {project}
                      </p>
                    ))}
                    <p className="subtitle is-6 mt-3">
                      <span className="has-text-weight-semibold">
                        Tech stack:
                      </span>{" "}
                      {experience.tech_stacks.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Copyright © 2022 by Gim Yong</p>
        </div>
      </footer>
    </main>
  );
};

export default IndexPage;
