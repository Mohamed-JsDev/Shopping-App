import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function AppNavbar() {
  const count = useSelector((state) => state.Card);
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand fs-2  text-uppercase ">
          Shopping -App
        </Link>
        <Link to="Cart" className="nav-link p-2 ">
          <i className="fa-solid fa-cart-plus fs-2 position-relative">
            <span
              className="fs-6 position-absolute "
              style={{ top: "-13px", left: "32px" }}
            >
              {" "}
              {count.length}
            </span>
          </i>
        </Link>
      </Container>
    </Navbar>
  );
}
export default AppNavbar;
