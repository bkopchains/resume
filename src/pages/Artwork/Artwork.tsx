import React, { FC } from 'react'
import { Card, CardBody } from 'components/Card';
import logo512 from "assets/logo512.png"
import ft from "assets/foodtruck.png"
import p2 from "assets/particles2.png"
import skate from "assets/skate.png"
import wave1 from "assets/wave1.jpeg"
import ouch1 from "assets/ouch1-01.png"
import ouch2 from "assets/ouch2-01.png"

const About: FC = () => {
  return(
    <div className='Flex-row'>
      <div className='Flex-column'>
        <Card>
          <CardBody>
            <img alt="logo512 test" src={logo512} style={{width: "100%", borderRadius: "1vh"}}/>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img alt="logo512 test" src={wave1} style={{width: "100%", borderRadius: "1vh"}}/>
          </CardBody>
        </Card>
      </div>
      <div className='Flex-column'>
        <Card>
          <CardBody>
            <img alt="logo512 test" src={ft} style={{width: "100%", borderRadius: "1vh"}}/>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img alt="logo512 test" src={ouch2} style={{width: "100%", borderRadius: "1vh"}}/>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img alt="logo512 test" src={skate} style={{width: "100%", borderRadius: "1vh"}}/>
          </CardBody>
        </Card>
      </div>
      <div className='Flex-column'>
        <Card>
          <CardBody>
            <img alt="logo512 test" src={ouch1} style={{width: "100%", borderRadius: "1vh"}}/>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img alt="logo512 test" src={p2} style={{width: "100%", borderRadius: "1vh"}}/>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default About;