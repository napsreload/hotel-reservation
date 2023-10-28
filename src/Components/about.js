import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img4 from '../assets/image/img4.jpg';


export default function About()
{
return (
      <section id="about" className= 'block about-block'> 
    <Container fluid>
        <div className='title-holder'>
         <h2>About Us</h2>
         <div className='subtitel'>a beautiful place to be</div>   
        </div>
    <Row>
      <Col sm={6}>
      <img src={img4} alt="Image Alt Text" />
      </Col>
      <Col sm={6}>
       <p> i am going to be great in this life trust me no matter the matter </p>
      </Col>
    </Row>
  </Container>

      </section>  

)

} 