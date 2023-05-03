import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    return (
        <header className='py-5'>
            <Container>
                <Navbar
                    expand='md'
                    className={`px-5 py-md-4 p-3 rounded-4 navbar-fixed-top sticky-nav ${
                        isSticky ? 'sticky' : ''
                    }`}>
                    <Container fluid>
                        <h1 className='display-6 mb-0'>Mudee</h1>
                        <Navbar.Toggle aria-controls='navbarScroll' />

                        <Navbar.Collapse id='navbarScroll'>
                            <Nav
                                variant='pills'
                                defaultActiveKey='/'
                                className='ms-auto my-2 my-lg-0 text-uppercase fs-6'>
                                <Nav.Item className='my-md-0 my-3 mx-auto'>
                                    <NavLink
                                        to='/'
                                        className='home px-3 py-2 rounded-5 text-decoration-none'>
                                        Home
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item className='mb-md-0 mb-3 mx-auto'>
                                    <NavLink
                                        to='projects'
                                        className='projects px-3 py-2 rounded-5 text-decoration-none'>
                                        Projects
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item className='mb-md-0 mb-1  mx-auto'>
                                    <NavLink
                                        to='api'
                                        className='api px-3 py-2 rounded-5 text-decoration-none'>
                                        API
                                    </NavLink>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </header>
    );
};

export default Header;
