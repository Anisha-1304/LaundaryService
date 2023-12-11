import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function NavigationBar(){
    return(
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Laundary App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link>DashBoard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
            <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
            <Nav.Link>Log In</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/services">
            <Nav.Link>Services</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/aboutus">
            <Nav.Link>AboutUs</Nav.Link>
            </LinkContainer>
            
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}