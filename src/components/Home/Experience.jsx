import { Button, Col, Container, Row } from 'react-bootstrap';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import './experience.css';
import CV from '../../assets/files/CV.pdf';

const Experience = () => {
    return (
        <>
            <Container className='pb-5'>
                <section id='exp' className='px-md-5 py-5 px-4'>
                    <h2 className='display-5 mb-5 text-center'>
                        Experience{' '}
                        <span className='fs-5 fst-italic ms-3 d-md-inline d-none'>
                            I’ve lived many lives..... and careers 👀
                        </span>
                    </h2>
                    <Row className='gy-md-5 mb-md-5 mb-0 justify-content-center'>
                        <Col md={8} className='text-md-start text-center'>
                            <h3 className='fs-5 fw-bold mb-0'>
                                Web Design and Development Intern
                            </h3>
                            <p className='mb-0'>Bluesense</p>
                        </Col>

                        <Col md={4} className='mb-md-0 mb-4'>
                            <p className='date fst-italic text-md-end text-center'>
                                April 2022 to Present
                            </p>
                        </Col>

                        <Col md={8} className='text-md-start text-center'>
                            <h3 className='fs-5 fw-bold mb-0'>
                                Graphic Design Intern
                            </h3>
                            <p className='mb-0'>FemCode Africa</p>
                        </Col>

                        <Col className='mb-md-0 mb-4'>
                            <p className='date fst-italic text-md-end text-center'>
                                May 2020 - May 2021
                            </p>
                        </Col>

                        <Col md={8} className='text-md-start text-center'>
                            <h3 className='fs-5 fw-bold mb-0'>
                                Industrial Trainee
                            </h3>
                            <p className='mb-0'>
                                Warri Refining and Petrochemical Company Limited
                            </p>
                        </Col>

                        <Col className='mb-md-0 mb-4'>
                            <p className='date fst-italic text-md-end text-center'>
                                Sep 2019 – Feb 2020
                            </p>
                        </Col>
                    </Row>

                    <Button
                        href={CV}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='py-3 px-5 d-block mx-auto text-uppercase fw-semibold fs-5'>
                        Check Out My CV{' '}
                        <BsArrowUpRightCircle className='ms-2 fs-3' />
                    </Button>
                </section>
            </Container>
        </>
    );
};

export default Experience;
