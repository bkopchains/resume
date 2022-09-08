import React, { FC } from 'react'
import { Card, CardBody } from 'components/Card';
import monstera from "assets/monstera.png"
import ft from "assets/foodtruck.png"
import p2 from "assets/particles2.png"
import skate from "assets/skate.png"
// import wave1 from "assets/wave1.jpeg"
import beer from "assets/beer.png"
import ouch2 from "assets/ouch2-01.png"

const Artwork: FC = () => {
  return(
    <div className='Flex-row'>
      <div className='Flex-column'>
        {/* <Card>
          <CardBody>
            <img alt="logo512 test" src={logo512} className={"Img-Artwork"}/>
          </CardBody>
        </Card> */}
        <Card>
          <CardBody>
            <img alt="logo512 test" src={monstera} className={"Img-Artwork"}/>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img alt="logo512 test" src={skate} className={"Img-Artwork"}/>
          </CardBody>
        </Card>
      </div>
      <div className='Flex-column'>
        <Card>
          <CardBody>
            <img alt="logo512 test" src={ft} className={"Img-Artwork"}/>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img alt="logo512 test" src={ouch2} className={"Img-Artwork"}/>
          </CardBody>
        </Card>
      </div>
      <div className='Flex-column'>
        <Card>
          <CardBody>
            <img alt="logo512 test" src={beer} className={"Img-Artwork"}/>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img alt="logo512 test" src={p2} className={"Img-Artwork"}/>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Artwork;