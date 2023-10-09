import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import img1 from '../assets/image/img1.jpg'


export default function AppAbout()
{
return (
      <section id="about" className= 'block about-block'> 
    <Container fluid>
        <div className='titel-holder'>
         <h2>About Us</h2>
         <div className='subtitel'>a beautiful place to be</div>   
        </div>
    <Row>
      <Col sm={6}>
        <image scr={img1} />
      </Col>
      <Col sm={6}>
        content
      </Col>
    </Row>
  </Container>



      </section>  

)

} 