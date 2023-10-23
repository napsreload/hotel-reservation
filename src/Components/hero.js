import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

var heroData = [
  {
    id: 1,
    image: require('../assets/image/img2.jpg'),
    title: 'everywhere good',
    description: 'am coming for you just wait',
    link: 'https://www.googel.com'
  },
  {
    id: 2,
    image: require('../assets/image/img3.jpg'),
    description: 'am coming for you just wait',
    link: 'https://www.facebook.com'

  },

]

export default function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel data-bs-theme="dark">
       {
        heroData.map(hero =>{
          return (
            <Carousel.Item key={hero.id}>
            <img
              className="d-block w-100  cus-img"
              src= {hero.image}
              alt={"slide" + hero.id}
            />
            <Carousel.Caption>
              <h3>{hero.title}</h3>
              <p>{hero.description}</p>
              <a className='btn btn-primary' href= {hero.link}>Learn More</a>
            </Carousel.Caption>
          </Carousel.Item>

          )
        })
       } 
      </Carousel>
    </section>
  );
}
