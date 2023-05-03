import { Col, Container, Row } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
    return (
        <>
            <footer className='py-5 text-white'>
                <Container>
                    <h1 className='display-6 mb-4 text-sm-start text-center'>
                        Mudee
                    </h1>
                    <Row>
                        <Col sm={6}>
                            <p className='text-sm-start text-center'>
                                Designed and Developed by me
                            </p>
                        </Col>

                        <Col sm={6}>
                            <p className='text-sm-end text-center'>
                                Send me an email:{' '}
                                <a href='mailto:ruth.igbinoba12@gmail.com'>
                                    ruth.igbinoba12@gmail.com
                                </a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;
