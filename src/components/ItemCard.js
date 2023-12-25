import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../styles/index.css'

function ItemCard() {
  return (
    <Col className='d-flex'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://source.unsplash.com/random/300×300?camera" className='image' />
      <Card.Body>
        <Card.Text>
        Top MirrorLess Camera
        </Card.Text>
        <Card.Text>
        Shop Now
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default ItemCard;