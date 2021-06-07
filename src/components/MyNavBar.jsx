import {Navbar, Nav} from 'react-bootstrap'

const MyNavBar = (props) => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {/* <Container> */}
            <Navbar.Brand href="#home">My Book Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Browse</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        {/* </Container> */}
    </Navbar>
)

export default MyNavBar
