import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Navigate, useNavigate } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    title: 'Wash & Iron',
    text: 'All your regular wear garments will be washed, steam ironed and neatly packed for delivery.',
    imageUrl: 'https://res.cloudinary.com/liaison-inc/image/upload/f_auto/q_auto,w_1200/v1680548594/content/homeguide/homeguide-woman-putting-laundry-in-front-loading-washer-dryer.jpg',
  },
  {
    id: 2,
    title: 'Wash & Fold',
    text: 'Just in case you choose not to use our steam ironing services we will wash and fold them for you.',
    imageUrl: 'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2022/01/Laundry-Folding-Tips.jpg',
  },
  {
    id: 3,
    title: 'Iron & Fold',
    text: 'Get back your dirty clothes. Your clothes we will ironed and pressed to look the best for you.',
    imageUrl: 'https://images.herzindagi.info/image/2020/Apr/cloyhing.jpg',
  },
  {
    id: 4,
    title: 'Dry Cleaning',
    text: 'All your sensitive and special garments will be individually treated for any stains and dry cleaned.',
    imageUrl: 'https://www.glofab.in/wp-content/uploads/2017/05/img-service-2.jpg',
  },
  {
    id: 5,
    title: 'Emergency Service',
    text: 'You can use our emergency service to receive services easily and quickly in our machines using very safe.',
    imageUrl: 'https://peakbusinessvaluation.com/wp-content/uploads/valuation-multiples-for-dry-cleaning.jpeg',
  },
  {
    id: 6,
    title: 'Subscription Based',
    text: 'You can get Best Price, Quality Service, Doorstep Pickup & Delivery Service, Hygiene & Fresh Laundry',
    imageUrl: 'https://www.usnews.com/object/image/0000018a-ae6c-da4f-adeb-ee6d72db0000/gettyimages-1425540760.jpg?update-time=1695143500512&size=responsive640',
  },
  {
    id: 7,
    title: 'Washing & Drying',
    text: 'It includes the removal of dirt, stains, and odors, ensuring your garments are fresh and clean.',
    imageUrl: 'https://img.choice.com.au/-/media/3ca267df4ca64869b4f936f4130db849.ashx',
  },
  {
    id: 8,
    title: 'Stain Removal',
    text: 'Professional stain removal helps restore the appearance of your garments and enhances overall cleanliness.',
    imageUrl: 'https://www.thespruce.com/thmb/HdJK08RhlzM0z3SgNs6rhF1hOKg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spr-laundry-stain-removers-test-cleancult-stick-hwortock-350-3befca9e8ba246278e5f86479559af1c.jpg',
  },
];

function Services() {
  const firstRow = servicesData.slice(0, 4);
  const secondRow = servicesData.slice(4);
   const navigate = useNavigate();

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {firstRow.map((service) => (
          <Card key={service.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={service.imageUrl} />
            <Card.Body>
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>{service.text}</Card.Text>
              <Button variant="primary" onClick={()=>
              {
                navigate(`/Orders`);
              }}>Orders</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {secondRow.map((service) => (
          <Card key={service.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={service.imageUrl} />
            <Card.Body>
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>{service.text}</Card.Text>
              <Button variant="primary">Orders</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Services;


