import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBasketShopping, FaRegUser } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

const NavbarComponent = ({isLoggedIn, onLogout}) => {
  const totalQuantity = useSelector((state)=>state.cart.totalQuantity);
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const handleUserClick = () =>{
    if(isLoggedIn){
      setShowLogout(!showLogout);
    }else{
      navigate('/login')
    }
  };

  const handleLogout = () =>{
    onLogout();
  }
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="/">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Form className="d-flex w-[50%]">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/basket" style={{position:'relative'}}>
                    <FaBasketShopping className='mt-1'/>
                    {totalQuantity > 0 && (
                      <span style={{
                        position:'absolute',
                        top:'-5px',
                        right:'-4px',
                        background:'red',
                        borderRadius:'50%',
                        padding:'2px 6px',
                        color:'white',
                        fontSize:'12px',
                      }}>{totalQuantity}</span>
                    )}
                  </Nav.Link>
                  {isLoggedIn ? (
                  <Nav.Link>
                  <NavDropdown id="nav-dropdown-dark-example"
                  title="User"
                  menuVariant="dark">
                    <NavDropdown.Item href="#/action-1">Admin</NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}>Çıkış Yap</NavDropdown.Item>
                  </NavDropdown>
                  </Nav.Link>
                  ):(
                    <Nav.Link href='/login'>
                      <FaRegUser className='mt-1 mx-4'/>
                    </Nav.Link>
                  )}
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default NavbarComponent