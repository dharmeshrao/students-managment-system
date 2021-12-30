import { useContext } from "react";
import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TokenContext } from "../context/TokenContext";
const Style = styled.div``;

export const NavbarHeader = () => {
  const handleLogout = () => {
    handleToken(false);
    localStorage.setItem("acess_token_sms", JSON.stringify(null));
  };
  const { handleToken, token } = useContext(TokenContext);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("acess_token_sms")) === null) {
      handleToken(false);
    } else handleToken(true);
  }, [handleLogout]);

  return (
    <div style={{ boxShadow: "0px 2px 4px #aaa9a9" }}>
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Masai School</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Link to="/users">
              <Nav>Users</Nav>
            </Link>
            <Link to="/contest">
              <Nav>Contests</Nav>
            </Link>
            <Link to="/">
              <Nav onClick={handleLogout}>{token ? "Logout" : "Dharmesh"}</Nav>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
