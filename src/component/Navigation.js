import React, { useState } from 'react'
import { Navbar, Container, Form, Button, Nav, FormControl } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import  searchAction  from '../redux/action/searchAction'

const Navigation = () => {

    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [text, setText] = useState();

    function goToSearch(event) {
        event.preventDefault();
        dispatch(searchAction(text));
        navigate("/movies");
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img width={100} src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt="main logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/" className='nav-item'>Home</Link>
                        <Link to="/movies" className='nav-item'>Movies</Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={goToSearch}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(event) => setText(event.target.value)}
                        />
                        <Button variant="outline-danger" type="submit">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation