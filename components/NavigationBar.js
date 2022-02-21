import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import Style from '../styles/Nav.module.css'
// import AddPlant from './NewPlant';
// import SearchPlant from './SearchPlant'
// import HomePage from './HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
// import SearchPlant from '../SearchPlant'

export default function Home() {

    const isAuth = true
    const isLoggedIn = false

    return (
        <Navbar bg="light" variant="light" expand={true}>
            <Container>
                <Navbar.Brand href="https://plantworks.herokuapp.com/">PlantWorks</Navbar.Brand>
                <Nav className="mr-auto">
                    { isAuth && <Nav.Link href="../NewPlant">Add Plant</Nav.Link> }
                    { isLoggedIn && <Nav.Link href="../MyCollection">My Collection</Nav.Link> }
                    <Nav.Link href="../SearchPlant">Search</Nav.Link>
                    { false && isLoggedIn && <Nav.Link href="../Logout">Logout</Nav.Link> && <Nav.Link href="../Login">Login</Nav.Link> }
                </Nav>
            </Container>
        </Navbar>
    )

}
