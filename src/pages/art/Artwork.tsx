import React, { FC } from 'react'
import { Card, CardBody } from 'components/Card';
import Image from 'next/image'

const Artwork: FC = () => {
  return(
    <div className='Flex-row'>
      <div className='Flex-column'>
        {/* <Card>
          <CardBody>
            <Image width={50} height={50} alt="logo512 test" src={"/assets/logo512.png"} className={"Img-Artwork"}/>
          </CardBody>
        </Card> */}
        <Card>
          <CardBody>
            <Image width={50} height={50} alt="logo512 test" src={"/assets/monstera.png"} className={"Img-Artwork"}/>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Image width={50} height={50} alt="logo512 test" src={"/assets/skate.png"} className={"Img-Artwork"}/>
          </CardBody>
        </Card>
      </div>
      <div className='Flex-column'>
        <Card>
          <CardBody>
            <Image width={50} height={50} alt="logo512 test" src={"/assets/foodtruck.png"} className={"Img-Artwork"}/>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Image width={50} height={50} alt="logo512 test" src={"/assets/ouch2-01.png"} className={"Img-Artwork"}/>
          </CardBody>
        </Card>
      </div>
      <div className='Flex-column'>
        <Card>
          <CardBody>
            <Image width={50} height={50} alt="logo512 test" src={"/assets/beer.png"} className={"Img-Artwork"}/>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Image width={50} height={50} alt="logo512 test" src={"/assets/particles2.png"} className={"Img-Artwork"}/>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Artwork;