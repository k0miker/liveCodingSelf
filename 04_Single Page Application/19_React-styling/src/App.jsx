import "./App.css";
import "./index.css";
import StyledSass from "./components/StyledSass";
import Heading from "./components/Heading";
import BootstrapButton from "./components/BootstrapButton";
import Toast from "react-bootstrap/Toast";
import { useState } from "react";
import CardComponent from "./components/CardComponent";
function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      {/* 1 */}
      <Heading />
      {/* 2 */}
      <StyledSass />
      {/* 3 */}
      <BootstrapButton label="Primary Button" variant="primary" size="lg" />
      <BootstrapButton label="Success Button" variant="success" size="md" />
      {/* 4 */}
      <img
        src="https://images.pexels.com/photos/28681349/pexels-photo-28681349/free-photo-of-charming-front-door-with-sleeping-cat-and-plants.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="A kitten"
        onClick={() => setShow(false)}
      />
      {/* 5 */}
      <Toast show={show} onClose={() => setShow(false)}>
        <Toast.Header>
          <strong className="me-auto">Important message</strong>
        </Toast.Header>
        <Toast.Body>Hello</Toast.Body>
      </Toast>

      {/* 6 */}
      <CardComponent />
    </>
  );
}
export default App;
