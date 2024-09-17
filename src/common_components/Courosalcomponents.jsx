import React from 'react'
import { Container, Navbar, Nav, Button,Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Courosalcomponents() {
  return (
    
    <Carousel className=''>
            <Carousel.Item>
                <img
                    className="w-100  "
                    src="/assets/trainings/b2b.png"
                    alt="First slide"
                />
                
                <Carousel.Caption>
                    {/* <h1>Welcome to Divine Bharat</h1> */}
                    {/* <p> Your gateway to spiritual growth and community.</p> */}
                    <h3>B2B Mobile App launch Day</h3>
                    <Button variant="primary">Join our DBCC Family</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className=''>
                <img
                    className="d-block w-100"
                    src="/assets/trainings/trainings.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Member Trainings Program</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className=''>
                <img
                    className="d-block w-100"
                    src="/assets/trainings/foundation.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Foundation Day</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
       
  )
}

export default Courosalcomponents