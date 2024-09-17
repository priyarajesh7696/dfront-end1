import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Gallery() {
  return (
  <Container className="gallery p-2">
     <h1 className='link-success'>Gallery</h1>
    <Row xs={1} md={3} className="g-4">
    
      <Col >
      <Card>
        <Card.Img variant="top" src={"/assets/gallery/1.JPG"} />
      </Card>
    </Col>
     
        
        <Col >
          <Card>
            <Card.Img variant="top" src={"/assets/gallery/3.JPG"} />
            
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src={"/assets/gallery/4.JPG"} />
            
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src={"/assets/gallery/5.JPG"} />
            
          </Card>
          </Col>
          <Col >
          <Card>
            <Card.Img variant="top" src={"/assets/gallery/6.JPG"} />
            
          </Card>
         
          </Col>
          <Col >
          <Card>
            <Card.Img variant="top" src={"/assets/gallery/7.JPG"} />
            
          </Card>
        </Col>
        

    </Row>
    </Container>
  );
}

export default Gallery