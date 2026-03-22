import React, { FC } from "react";
import { Card, CardBody } from "components/Card";

const Artwork: FC = () => {
  return (
    <div className="Flex-row">
      <div className="Flex-column">
        <Card>
          <CardBody>
            <img
              width={50}
              height={50}
              alt="monstera"
              src="/assets/monstera.png"
              className="Img-Artwork"
            />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img
              width={50}
              height={50}
              alt="skate"
              src="/assets/skate.png"
              className="Img-Artwork"
            />
          </CardBody>
        </Card>
      </div>
      <div className="Flex-column">
        <Card>
          <CardBody>
            <img
              width={50}
              height={50}
              alt="food truck"
              src="/assets/foodtruck.png"
              className="Img-Artwork"
            />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img
              width={50}
              height={50}
              alt="ouch"
              src="/assets/ouch2-01.png"
              className="Img-Artwork"
            />
          </CardBody>
        </Card>
      </div>
      <div className="Flex-column">
        <Card>
          <CardBody>
            <img
              width={50}
              height={50}
              alt="beer"
              src="/assets/beer.png"
              className="Img-Artwork"
            />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <img
              width={50}
              height={50}
              alt="particles"
              src="/assets/particles2.png"
              className="Img-Artwork"
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Artwork;
