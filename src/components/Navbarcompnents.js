import React from 'react'
/* navbar imports */
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Navbarcomponents.css';



const Navigationbar = () => {
  return (
    <div >
   
    <Navbar className='lightdark' bg='dark' expand="lg" variant='dark'>
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll{/* img src={logo} alt="logo.." */}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link className="navlink"href="#action1">Home</Nav.Link>
            <Nav.Link className="navlink" href="#action2">AboutUs</Nav.Link>
            <NavDropdown  title="Queries" id="navbarScrollingDropdown">
              <NavDropdown.Item className="navdroplink" href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item className="navdroplink" href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            {/*<Nav.Link href="#" disabled>
              Link
  </Nav.Link>*/}
          </Nav>
          <Form className="d-flex">
          <Button className="button"  variant="outline-dark">Login</Button>
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}

export default Navigationbar;
