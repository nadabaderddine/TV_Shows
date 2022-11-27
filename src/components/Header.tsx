import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

interface HeaderProps {
  isDisplaySearch?:boolean
}

const Header = ({ isDisplaySearch }:HeaderProps):JSX.Element => {
   
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">Movie App</Navbar.Brand>
        <Navbar.Brand href="/home">Trending</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
        <Navbar.Collapse id="nabarScroll">
          <Nav 
            className="me-auto my-2 my-lg-3"
            style={{ maxHeight:'100px' }}
            navbarScroll></Nav>
          {isDisplaySearch &&
            <Form className="d-flex"  autoComplete="off">
              <FormControl
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name="query"
              ></FormControl>
              <Button variant="secondary" type="submit">Search</Button>
            </Form>         
          }        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
