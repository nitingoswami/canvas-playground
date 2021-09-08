import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import {useState} from 'react';
//components
import AddDot from './Components/AddDot';
import CanvasScreen from './Components/CanvasScreen';
import Boundary from './Components/Boundary';


function App() {
  const [boundary, setboundary] = useState([-100,100])
  const [dots, setDots] = useState([])

  const handleOnSubmit = (new_dot) => {
    let dotsArray = [...dots];
    dotsArray.push(new_dot);
    setDots(dotsArray);
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <CanvasScreen boundary={boundary} dots={dots} />
        </Col>
        <Col md={12}>
          <Row>
            <Col md={4}>
              <Boundary boundary={boundary} onChange={setboundary}/>
            </Col>
            <Col md={4}>
              <AddDot minBoundary={boundary[0]} maxBoundary={boundary[1]} onSubmit={handleOnSubmit}/>
            </Col> 
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
