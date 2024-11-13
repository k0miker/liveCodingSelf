import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const BootstrapButton = ({ label, variant, size, onClick }) => {
  return (
    <Button variant={variant} size={size} onClick={onClick}>
      {label}
    </Button>
  );
};

export default BootstrapButton;
