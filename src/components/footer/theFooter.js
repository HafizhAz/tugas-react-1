import {Navbar} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function theFooter() {
return(
   <Navbar bg="light" variant="light" className="" style={{ height: 100 }}>
    <Container>
    <Navbar className="position-absolute top-50 start-50 translate-middle">
      <Navbar.Text>
        &copy;Hafizh AN React-Bootstrap Testing Making web 2023
      </Navbar.Text>
    </Navbar>
    </Container>
    </Navbar>
 );
}

