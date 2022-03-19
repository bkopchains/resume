import React from 'react';
import './styles/App.scss';
import { Spline } from '@splinetool/react-spline';
import { Card } from './components/Card';
import CardBody from './components/Card/CardBody';
import CardHeader from './components/Card/CardHeader';

function App() {

  return (
    <div className="App">
      <header className="App-header Gradient-bkg">
        <div style={{ display: 'flex' }}>
          <p className='App-header-text Font-Bold'>Ben Kopchains</p>
        </div>
      </header>
      <div className='App-body Font-Thin'>
        <div className='App-body-scrollable'>
          <div className='Body-spacer'>
            <p className='App-header-subtext Font-Thin'>Software Developer</p>
          </div>
          <div className='Flex-row'>
            <div className='Flex-column'>
              <div className='Section-header'>
                <Spline className='Spline-styling' scene="https://prod.spline.design/Qeh6p3dA8CfnKiC1/scene.spline" />
                <p className='Section-header-text Font-Bold'>Employment</p>
              </div>
              <Card>
                <CardHeader
                  titleText='Tech Lead:'
                  rightDetailText='May 2021-Present'
                  subTitleText='DYNAMIS INC.'
                />
                <CardBody>
                  Lead communication with clients to answer questions about the technology in our web application and respond quickly to time-sensitive bugs or change requests.
                  Responsible for initial development environment setup and training of new hires.
                  Worked in tandem with other developers to assist on more difficult tasks.
                </CardBody>
              </Card>
              <Card>
                <CardHeader
                  titleText='Software Developer:'
                  rightDetailText='Jan 2020-Present'
                  subTitleText='DYNAMIS INC.'
                />
                <CardBody>
                  Provided full-stack support and worked with global clientele on two prominent web applications:
                  Cobra (CSHTML/.NET Framework/SQL):
                  Global emergency management software used to track ongoing incidents and conduct preparedness training exercises
                  Developed and customized features to align with the client’s requested capabilities.
                  Built functionality specifically for the Belgian Incident and Crisis Management System (ICMS), including the new emergency preparedness form module EM Plans.
                  Worked together with the team on the upcoming rebuild of Cobra as a single-page React application.
                  HAL (React/.NET Framework/EF):
                  Lead developer for House Appropriations Ledger web application used by the US House Appropriations Committee as a tool for tracking changes to various government budgets
                  Performed deployments to the House offline virtual machines via Azure DevOps and Octopus

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
                  titleText='Union College:'
                  rightDetailText='2014-2018'
                  subTitleText='SCHENECTADY, NY'
                />
                <CardBody>
                  Bachelor of Science in Computer Science – Minor in Digital Media
                </CardBody>
                <CardBody>
                  Senior Thesis:  Augmented reality app using Unity3D and Apple ARKit
                </CardBody>
              </Card>
              <div className='Section-header'>
                <Spline className='Spline-styling' scene="https://prod.spline.design/indqQOtEo5ZAtP2T/scene.spline" />
                <p className='Section-header-text Font-Bold'>Skills</p>
              </div>
              <Card>
                <CardHeader
                  titleText='Programming Languages/Frameworks:'
                  rightDetailText=''
                  subTitleText='C#/.NET, Entity Framework, HTML, CSS, Javascript, Typescript, React, Jest, Cypress, SQL'
                />
                <CardBody>
                  Full-stack developer, familiar with a full suite of tools ranging from designing UI to building databases. 
                </CardBody>
              </Card>
              <Card>
                <CardHeader
                  titleText='Software Proficiencies:'
                  rightDetailText=''
                  subTitleText='Visual Studio, VS Code, Adobe Suite, Blender, Cinema4D, Unity, Microsoft Office'
                  noBorder
                />
                <CardBody>
                  Skilled at using multiple different applications necessart for everyday development, as well as a handful of content creation/digital art programs. 
                </CardBody>
              </Card>
              <Card>
                <CardHeader
                  titleText='Technologies/Development Tools:'
                  rightDetailText=''
                  subTitleText='Git, Azure Cloud & DevOps Solutions'
                  noBorder
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
                  titleText='Top Secret Clearance'
                  rightDetailText='2019-Present'
                  subTitleText='Active'
                  noBorder
                />
              </Card>
              <Card>
                <CardHeader
                  titleText='Microsoft Certified: Azure Developer Associate'
                  rightDetailText='2021'
                  subTitleText='AZ-204'
                />
                <CardBody>
                  Completed training for, and passed the Microsoft AZ-204 exam, certifying experience in managing and developing solutions built on the Azure Cloud platform.
                </CardBody>
              </Card>
              <div className='Section-header'>
                <Spline className='Spline-styling' scene="https://prod.spline.design/XCZyEcJz1nwmIi2L/scene.spline" />
                <p className='Section-header-text Font-Bold'>Contact</p>
              </div>
              <Card>
                <CardHeader 
                  titleText='Email:'
                  rightDetailText={<a href='mailto:benkopchains@gmail.com'>benkopchains@gmail.com</a>}
                />
                <CardHeader 
                  titleText='Phone:'
                  rightDetailText='347-266-6292'
                  noBorder
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
