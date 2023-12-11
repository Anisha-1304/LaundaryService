import React from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import { Header } from './Header';
import image1 from './image1.svg';
import image2 from './image2.svg';
import image3 from './image3.svg';
import image4 from './image4.svg';

export function DashBoard() {
  return (
    <Container>
      <Header text=""></Header>

      <Row>
        
        <Col md={6} style={{ color: 'black' }}>
          <h1><span style={{ color: 'red' }}>Best Wash & Iron service</span></h1>
          <p>
            Smart Laundary is the first Online Laundry Platform in DIU with the latest technology in washing, dry cleaning, and laundry. Our services combine our expertise and experience acquired over a period of time to provide you with clean laundry in the shortest possible turnaround time.
          </p>
        </Col>

        
        <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={image1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image4} alt="Fourth slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
