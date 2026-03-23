import React, { FC } from "react";
import { Card, CardBody, CardHeader } from "components/Card";
import {
  faBookOpen,
  faBriefcase,
  faCode,
  faEnvelope,
  faGraduationCap,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResumeNeu: FC = () => {
  return (
    <div className="neu-App">
      <header className="neu-App-header neu-Gradient-bkg">
        <div className="neu-App-header-content">
          <p className="neu-App-header-text neu-Font-Bold">Benjamin Kopchains</p>
        </div>
      </header>
      <div className="neu-App-body neu-Font-Thin">
        <div className="neu-App-body-scrollable">
          <div className="neu-Body-spacer" />
          <div className="neu-Flex-row">
            <div className="neu-Resume-blurb">
              Full-stack software engineer with an interest in graphic design.
            </div>
          </div>
          <div className="neu-Flex-row">
            <div className="neu-Flex-column neu-Resume-compact">
              <div className="neu-Section-header">
                <FontAwesomeIcon icon={faBriefcase} className={"neu-icon"} />
                <p className="neu-Section-header-text neu-Font-Bold">Employment</p>
              </div>
              <Card defaultClosed>
                <CardHeader
                  titleText="Software Engineer III"
                  rightDetailText="Jan 2025 - Present"
                  subTitleText="JPMorgan Chase & Co."
                  accordion
                />
                <CardBody>
                  <ul className="neu-Custom-list">
                    <li>Onboarding flows for new products: React UI + Java microservices (REST).</li>
                    <li>
                      Entitlements migration tooling: converting legacy entitlement formats into acentralized model;{" "}
                      2,600+ clients, 700k accounts, 33k users
                      migrated.
                    </li>
                    <li>Backbridge + Kafka: kept legacy systems fed during migration to centralized stores.</li>
                    <li>Fixed memory leaks in shared libs (fewer cross-app incidents).</li>
                    <li>Mentored interns and new hires.</li>
                  </ul>
                </CardBody>
              </Card>
              <Card defaultClosed>
                <CardHeader
                  titleText="Software Engineer II"
                  rightDetailText="Jan 2023 - Dec 2024"
                  subTitleText="JPMorgan Chase & Co."
                  accordion
                />
                <CardBody>
                  <ul className="neu-Custom-list">
                    <li>
                      CIB app: on-prem .NET monolith conversion into AWS .NET Core + React microservices. Developed and maintained test harness with
                      ~90% code coverage on several services.
                    </li>
                    <li>React dashboards for operations teams: trade info and transaction status.</li>
                    <li>Scrum methodology: fewer low-value meetings.</li>
                  </ul>
                </CardBody>
              </Card>
              <Card defaultClosed>
                <CardHeader
                  titleText="Tech Lead"
                  rightDetailText="May 2021 - Jan 2023"
                  subTitleText="Dynamis Inc."
                  accordion
                />
                <CardBody>
                  <ul className="neu-Custom-list">
                    <li>Client-facing tech questions; same-day turnaround on urgent bugs and change requests.</li>
                    <li>Tuned agile rituals (dailies + feedback loops).</li>
                    <li>Dev env setup, onboarding, and support for junior devs.</li>
                  </ul>
                </CardBody>
              </Card>
              <Card defaultClosed>
                <CardHeader
                  titleText="Software Developer"
                  rightDetailText="Jan 2020 - Jan 2023"
                  subTitleText="Dynamis Inc."
                  accordion
                />
                <CardBody>
                  <p className="neu-Resume-tight-lead">Cobra - CSHTML, .NET, SQL</p>
                  <ul className="neu-Custom-list">
                    <li>Intl. emergency management: incidents, exercises, client-specific features.</li>
                    <li>Modernized Azure CI/CD + automated tests; SPA rebuild in progress.</li>
                  </ul>
                  <p className="neu-Resume-tight-lead">HAL - React, .NET, EF, SQL</p>
                  <ul className="neu-Custom-list">
                    <li>Lead dev: House Appropriations Ledger (budget tracking).</li>
                    <li>Deployments to House VMs (Azure DevOps, Octopus).</li>
                  </ul>
                </CardBody>
              </Card>
              <Card defaultClosed>
                <CardHeader
                  titleText="Junior Software Developer"
                  rightDetailText="Oct 2018 - Jan 2020"
                  subTitleText="Dynamis Inc."
                  accordion
                />
                <CardBody>
                  <ul className="neu-Custom-list">
                    <li>Supported continuous development of the Cobra web application for the Belgian government and the US Air National Guard.</li>
                  </ul>
                </CardBody>
              </Card>
              <div className="neu-Section-header">
                <FontAwesomeIcon icon={faEnvelope} className={"neu-icon"} />
                <p className="neu-Section-header-text neu-Font-Bold">Contact</p>
              </div>
              <Card>
                <CardHeader
                  titleText="Email"
                  rightDetailText={
                    <a className="neu-App-link" href="mailto:benkopchains@gmail.com">
                      benkopchains@gmail.com
                    </a>
                  }
                />
                <CardHeader titleText="Phone" rightDetailText="347-266-6292" />
                <CardHeader
                  titleText="LinkedIn"
                  rightDetailText={
                    <a className="neu-App-link" href="https://linkedin.com/in/bkopchains" target="_blank" rel="noreferrer">
                      linkedin.com/in/bkopchains
                    </a>
                  }
                />
                <CardHeader titleText="Location" rightDetailText="New York, NY" noBorder />
              </Card>
            </div>
            <div className="neu-Flex-column">
              <div className="neu-Section-header">
                <FontAwesomeIcon icon={faGraduationCap} className={"neu-icon"} />
                <p className="neu-Section-header-text neu-Font-Bold">Education</p>
              </div>
              <Card>
                <CardHeader
                  titleText="Union College"
                  rightDetailText="2014 - 2018"
                  subTitleText="Schenectady, NY"
                  accordion
                />
                <CardBody>
                  <p>Bachelor of Science in Computer Science – Minor in Digital Media</p>
                  <p>
                    Key Courses: User Interfaces (UX &amp; UI Design), Data Structures, Compilers, Algorithms
                  </p>
                  <p>Senior Thesis: Augmented reality app using Unity3D and Apple ARKit</p>
                </CardBody>
              </Card>
              <div className="neu-Section-header">
                <FontAwesomeIcon icon={faScrewdriverWrench} className={"neu-icon"} />
                <p className="neu-Section-header-text neu-Font-Bold">Technical proficiencies</p>
              </div>
              <Card defaultClosed>
                <CardHeader
                  titleText="Programming Languages & Frameworks"
                  rightDetailText=""
                  subTitleText="Languages I work in regularly"
                  accordion
                />
                <CardBody>
                  <p>JavaScript, TypeScript, Java, C#, HTML, CSS, Python, SQL</p>
                  <p>React, Jest, Cypress, .NET, Spring</p>
                </CardBody>
              </Card>
              <Card defaultClosed>
                <CardHeader titleText="Cloud Services" rightDetailText="" subTitleText="Platforms & delivery" accordion />
                <CardBody>
                  <p>Microsoft Azure Cloud, Azure DevOps, AWS</p>
                </CardBody>
              </Card>
              <Card defaultClosed>
                <CardHeader titleText="Software & Tools" rightDetailText="" subTitleText="Day-to-day tooling" accordion />
                <CardBody>
                  <p>Visual Studio, VS Code, IntelliJ IDEA, Git, Adobe Suite, Blender, Godot, Microsoft Office</p>
                </CardBody>
              </Card>
            </div>
            <div className="neu-Flex-column">
              <div className="neu-Section-header">
                <FontAwesomeIcon icon={faCode} className={"neu-icon"} />
                <p className="neu-Section-header-text neu-Font-Bold">Independent projects</p>
              </div>
              <Card defaultClosed>
                <CardHeader
                  titleText="Chicken Superfecta"
                  rightDetailText="2026"
                  subTitleText="Godot, gdscript"
                  accordion
                />
                <CardBody>
                  <p>
                    Game developed using the Godot engine about rigging the outcome of chicken races. Built in one week for the{" "}
                    <a className="neu-App-link" href="https://itch.io/jam/brackeys-15" target="_blank" rel="noreferrer">
                      2026 Brackeys Game Jam
                    </a>{" "}
                    on Itch.io.
                  </p>
                  <p>
                    Finished in 374th overall out of 1429 submissions, and notably 108th in the "Innovation" category.
                  </p>
                  <p>
                    <a className="neu-App-link" href="https://itch.io/jam/brackeys-15/rate/4313103" target="_blank" rel="noreferrer">
                      Game and Full Results
                    </a>
                  </p>
                </CardBody>
              </Card>
              <Card defaultClosed>
                <CardHeader
                  titleText="Wedding Website"
                  rightDetailText="2025"
                  subTitleText="React, TypeScript, Vite, Supabase (Postgres), GitHub Actions, GitHub Pages"
                  accordion
                />
                <CardBody>
                  <p>
                    Web app built for my own wedding. Used to handle RSVP submissions, save the date info, and
                    conditionally display event information based on the guest's invitation. 
                  </p>
                  <p>
                    Displays clear instructions
                    and directions for multiple days of wedding-related events, and successfully managed responses of
                    over 150 guests.
                  </p>
                </CardBody>
              </Card>
              <Card defaultClosed>
                <CardHeader
                  titleText="Balatracker"
                  rightDetailText="2024"
                  subTitleText="React, TypeScript, Vite, Supabase (Postgres), GitHub Actions, GitHub Pages"
                  accordion
                />
                <CardBody>
                  <p>
                    Web app for tracking Balatro scores with daily seeded challenges, group and global leaderboards, user
                    authentication, and real-time score submissions with 250+ users. 
                  </p>
                  <p>
                    Designed to aggregate all daily score submissions into readable leaderboards, tracking high scores by various metrics.
                  </p>
                  <p>
                    <a className="neu-App-link" href="https://balatracker.com" target="_blank" rel="noreferrer">
                      balatracker.com
                    </a>
                  </p>
                </CardBody>
              </Card>
              <div className="neu-Section-header">
                <FontAwesomeIcon icon={faBookOpen} className={"neu-icon"} />
                <p className="neu-Section-header-text neu-Font-Bold">Continuous learning</p>
              </div>
              <Card defaultClosed>
                <CardHeader
                  titleText="Exploration & Practice"
                  rightDetailText=""
                  subTitleText="Beyond the day job"
                  accordion
                />
                <CardBody>
                  <p>
                    Pursued development of various other technologies across web and game development. Including but not
                    limited to Next.js, Tailwind CSS, Cloudflare Pages, GDScript/Godot, Unity.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeNeu;
