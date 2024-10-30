import React from 'react'
import Avatar from './components/Avatar'
import { Card, Container, Row, Col } from 'react-bootstrap'

const sizes = ["s","m","l","xl"]
const types = ["square","rounded","circle"]

function App() {
  return (
    <Container>
      {sizes.map(size => (
        <Row key={size}>
          {types.map(type => (
            <Col className="p-2" key={type}>
              <Card className={`p-2 ${size}-${type}`}>
                <Avatar
                  src="https://picsum.photos/400/400"
                  size={size}
                  type={type}
                  style={{margin: "0 auto", display: "block"}}
                />
                <div style={{textAlign: "center"}}>
                  Size: {size}, Type: {type}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default App;
