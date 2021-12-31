import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const NavbarHeader = ({ handleDelete }) => {
  const store = useSelector((store) => store.auth);
  if (!store.token) {
    return (
      <div style={{ boxShadow: "0px 2px 4px #aaa9a9" }}>
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Masai School</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Link style={{ textDecoration: "none", color: "white" }} to="#">
                  Created by Dharmesh
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }

  if (!store.token.user.admin) {
    return (
      <div style={{ boxShadow: "0px 2px 4px #aaa9a9" }}>
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Masai School</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav onClick={handleDelete}>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/login"
                >
                  Logout
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }

  return (
    <div style={{ boxShadow: "0px 2px 4px #aaa9a9" }}>
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Masai School</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <div style={{ display: "flex", gap: "10px" }}>
              <Nav>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/users"
                >
                  Users
                </Link>
              </Nav>
              <Nav>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Contests
                </Link>
              </Nav>
              <Nav onClick={handleDelete}>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/login"
                >
                  Logout
                </Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
