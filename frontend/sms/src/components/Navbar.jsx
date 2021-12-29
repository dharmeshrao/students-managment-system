import { Navbar, Container, Nav } from "react-bootstrap";
export const NavbarHeader = () => {
  return (
    <div style={{ boxShadow: "0px 2px 4px #aaa9a9" }}>
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Masai School</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets">Created by Dharmesh</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
