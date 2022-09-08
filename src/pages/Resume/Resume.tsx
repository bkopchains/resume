import React, { FC } from 'react';
import Spline from '@splinetool/react-spline'; //TODO: Maybe replace with threeJS if it loads faster - do the models again in blender
import { Card, CardBody, CardHeader } from 'components/Card';

const Resume: FC = () => {

  return (
    <>
      <div className='Flex-row'>
        <div className='Resume-blurb'>
        Full-stack Web Developer (C# .NET / TypeScript / React) with an interest in graphic design
        </div>
      </div>
      <div className='Flex-row'>
        <div className='Flex-column'>
          <div className='Section-header'>
            {/* <img className='Spline-styling' alt="briefcase icon" src={briefcase}/> */}
            <Spline className='Spline-styling' scene="https://prod.spline.design/Qeh6p3dA8CfnKiC1/scene.spline" />
            <p className='Section-header-text Font-Bold'>Employment</p>
          </div>
          <Card>
            <CardHeader
              titleText='Tech Lead'
              rightDetailText='May 2021-Present'
              subTitleText='DYNAMIS INC.'
              accordion
            />
            <CardBody>
              <p>
                Lead communication with clients to answer questions about the technology in our web application and respond quickly to time-sensitive bugs or change requests.
              </p>
              <p>
                Responsible for initial development environment setup and training of new hires.
              </p>
              <p>
                Worked in tandem with other developers to assist on more difficult tasks.
              </p>
            </CardBody>
          </Card>
          <Card defaultClosed>
            <CardHeader
              titleText='Software Developer'
              rightDetailText='Jan 2020-Present'
              subTitleText='DYNAMIS INC.'
              accordion
            />
            <CardBody>
              Provided full-stack support and worked with global clientele on two prominent web applications:
              <p>Cobra (CSHTML/.NET/SQL):</p>
              {/* <CardHeader
titleText='Cobra'
rightDetailText=''
subTitleText='CSHTML/.NET/SQL'
/> */}
              <ul className='Custom-list'>
                <li>Global emergency management software used to track ongoing incidents and conduct preparedness training exercises</li>
                <li>Developed and customized features to align with the client’s requested capabilities.</li>
                <li>Built functionality specifically for the Belgian Incident and Crisis Management System (ICMS), including the new emergency preparedness form module EM Plans.</li>
                <li>Worked together with the team on the upcoming rebuild of Cobra as a single-page React application.</li>
              </ul>
              <p>HAL (React/.NET/EF):</p>
              <ul className='Custom-list'>
                <li>Lead developer for House Appropriations Ledger web application used by the US House Appropriations Committee as a tool for tracking changes to various government budgets</li>
                <li>Performed deployments to the House offline virtual machines via Azure DevOps and Octopus</li>
              </ul>
            </CardBody>
          </Card>
          <Card defaultClosed>
            <CardHeader
              titleText='Junior Developer'
              rightDetailText={'Oct 2018-Jan 2020'}
              subTitleText='DYNAMIS INC.'
              accordion
            />
            <CardBody>
              Supported the team in continuous development and maintenance of the Cobra web application for clients such as the Belgian government and the US Air National Guard.
            </CardBody>
          </Card>
        </div>
        <div className='Flex-column'>
          <div className='Section-header'>
            <Spline className='Spline-styling' scene="https://prod.spline.design/ttVyXTELSLIeFU-l/scene.spline" />
            <p className='Section-header-text Font-Bold'>Education</p>
          </div>
          <Card>
            <CardHeader
              titleText='Union College'
              rightDetailText='2014-2018'
              subTitleText='SCHENECTADY, NY'
              accordion
            />
            <CardBody>
              <p>
                Bachelor of Science in Computer Science – Minor in Digital Media
              </p>
              <p>
                Senior Thesis:  Augmented reality app using Unity3D and Apple ARKit
              </p>
            </CardBody>
          </Card>
          <div className='Section-header'>
            <Spline className='Spline-styling' scene="https://prod.spline.design/indqQOtEo5ZAtP2T/scene.spline" />
            <p className='Section-header-text Font-Bold'>Skills</p>
          </div>
          <Card defaultClosed>
            <CardHeader
              titleText='Languages/Frameworks'
              rightDetailText=''
              subTitleText='Full-stack developer, familiar with a full suite of tools'
              accordion
            />
            <CardBody>
              <div style={{ display: 'flex' }}>
                <ul className='Custom-list'>
                  <li>C#/.NET</li>
                  <li>Entity Framework</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
                <ul className='Custom-list' style={{ marginLeft: '20px' }}>
                  <li>Typescript</li>
                  <li>React</li>
                  <li>Jest</li>
                  <li>Cypress</li>
                  <li>SQL</li>
                </ul>
              </div>
            </CardBody>
          </Card>
          <Card defaultClosed>
            <CardHeader
              titleText='Software Proficiencies'
              rightDetailText=''
              subTitleText='Skilled at using a wide array of software'
              accordion
            />
            <CardBody>
              <div style={{ display: 'flex' }}>
                <ul className='Custom-list'>
                  <li>Visual Studio</li>
                  <li>VS Code</li>
                  <li>Adobe Suite</li>
                  <li>Blender</li>
                </ul>
                <ul className='Custom-list' style={{ marginLeft: '20px' }}>
                  <li>Cinema4D</li>
                  <li>Unity</li>
                  <li>Microsoft Office</li>
                </ul>
              </div>
            </CardBody>
          </Card>
          <Card defaultClosed>
            <CardHeader
              titleText='Technologies'
              rightDetailText=''
              subTitleText='Git, Azure Cloud & DevOps Solutions'
              accordion
            />
            <CardBody>
              Experience developing for and maintaining cloud-based solutions using both virtual machines and app services, and managing the CI/CD pipeline through Azure DevOps.
            </CardBody>
            {/* <CardBody>
Full-stack developer with a passion for digital art and front-end design. Experience in maintaining Microsoft Azure Cloud and Azure DevOps solutions
</CardBody> */}
          </Card>
        </div>
        <div className='Flex-column'>
          <div className='Section-header'>
            <Spline className='Spline-styling' scene="https://prod.spline.design/hrRByXKmZlrg1f8v/scene.spline" />
            <p className='Section-header-text Font-Bold'>Certifications</p>
          </div>
          <Card>
            <CardHeader
              titleText='Azure Developer Associate'
              rightDetailText='2021'
              subTitleText='Microsoft AZ-204 Certification'
            />
            <CardBody>
              Completed training for, and passed the Microsoft AZ-204 exam, certifying experience in managing and developing solutions built on the Azure Cloud platform.
            </CardBody>
          </Card>
          <Card>
            <CardHeader
              titleText='Top Secret Clearance'
              rightDetailText='2019-Present'
              subTitleText='Active'
              noBorder
            />
          </Card>
          <div className='Section-header'>
            <Spline className='Spline-styling' scene="https://prod.spline.design/XCZyEcJz1nwmIi2L/scene.spline" />
            <p className='Section-header-text Font-Bold'>Contact</p>
          </div>
          <Card>
            <CardHeader
              titleText='Email'
              rightDetailText={<a className='App-link' href='mailto:benkopchains@gmail.com'>benkopchains@gmail.com</a>}
            />
            <CardHeader
              titleText='Phone'
              rightDetailText='347-266-6292'
              noBorder
            />
          </Card>
        </div>
      </div>
    </>
  )
}

export default Resume;