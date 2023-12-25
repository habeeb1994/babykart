import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/index.css';
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carousel'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src="https://source.unsplash.com/random/300×300?mobile in center" className="d-block w-100" alt="..." />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://source.unsplash.com/random/300×300?clothes" className="d-block w-100" alt="..." />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://source.unsplash.com/random/300×300?shoes" className="d-block w-100" alt="..." />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;