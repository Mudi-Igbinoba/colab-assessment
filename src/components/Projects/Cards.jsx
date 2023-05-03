import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { BsCodeSlash } from 'react-icons/bs';
import './cards.css';
import blue from '../../assets/img/bluesense.png';
import hgs1 from '../../assets/img/hgs1.png';
import hgs2 from '../../assets/img/hg2.png';
import movie1 from '../../assets/img/movie1.png';
import movie2 from '../../assets/img/movie2.png';
import quiz1 from '../../assets/img/quiz1.png';
import quiz2 from '../../assets/img/quiz2.png';

const Cards = () => {
    return (
        <>
            <section id='cards' className=''>
                <Container className='container py-5'>
                    <Row className='text-center'>
                        <Col lg={10} className='mx-auto mb-5'>
                            <h2 className='fs-5 text-uppercase fw-bold mb-3'>
                                Projects <BsCodeSlash className='mb-1 ms-1' />
                            </h2>
                            <h3 className='fs-2 fw-light'>
                                Check out some of my{' '}
                                <span>
                                    <em>awesome</em>
                                </span>{' '}
                                projects.
                            </h3>
                        </Col>
                    </Row>

                    <Row className='gy-5 align-items-center '>
                        <Col lg={7} className=''>
                            <Card className=''>
                                <Card.Body className='px-4 py-5 overflow-hidden bg-dark'>
                                    <Row className=' justify-content-center text-center'>
                                        <Col lg={9} className=''>
                                            <figure className=' mx-auto'>
                                                <a
                                                    href='https://bluesense.co/'
                                                    target='_blank'>
                                                    <Image
                                                        className='blue rounded'
                                                        src={blue}
                                                        fluid
                                                        alt='Bluesense Company Website'
                                                    />
                                                </a>
                                            </figure>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} className='ms-auto'>
                            <h3 className='display-6 post-title mb-3'>
                                Bluesense
                            </h3>
                            <div className='post-category text-muted mb-3'>
                                <span>Consulting</span>,{' '}
                                <span>Web Development</span>
                            </div>
                            <Button
                                href='https://bluesense.co/'
                                target='_blank'
                                className='rounded-5 px-5 py-3 fw-semibold'>
                                Live Project
                            </Button>
                        </Col>
                    </Row>

                    <Row className='row gy-5 align-items-center mt-5'>
                        <Col lg={7} className='order-lg-2'>
                            <Card className=''>
                                <Card.Body className='p-4 overflow-hidden bg-dark'>
                                    <Row className='align-items-center'>
                                        <Col>
                                            <figure>
                                                <a
                                                    href='https://www.hazelgracestyles.com/'
                                                    target='_blank'>
                                                    <Image
                                                        src={hgs1}
                                                        className='rounded'
                                                        fluid
                                                        alt='Hazel Grace Styles Website'
                                                    />
                                                </a>
                                            </figure>
                                        </Col>

                                        <Col className='d-md-flex d-none'>
                                            <figure>
                                                <a
                                                    href='https://www.hazelgracestyles.com/'
                                                    target='_blank'>
                                                    <Image
                                                        src={hgs2}
                                                        className='rounded'
                                                        fluid
                                                        alt='Hazel Grace Styles Website'
                                                    />
                                                </a>
                                            </figure>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} className='col-lg-4 me-auto'>
                            <h3 className='display-6 post-title mb-3'>
                                Hazel Grace Styles
                            </h3>
                            <div className='post-category text-muted mb-3'>
                                <span>E-commerce</span>,{' '}
                                <span>Web Design and Development</span>
                            </div>

                            <Button
                                href='https://www.hazelgracestyles.com/'
                                target='_blank'
                                className='rounded-5 px-5 py-3 fw-semibold'>
                                Live Project
                            </Button>
                        </Col>
                    </Row>

                    <Row className='gy-5 align-items-center mt-5'>
                        <Col lg={7} className=''>
                            <Card className=''>
                                <Card.Body className='px-4 py-5 overflow-hidden bg-dark'>
                                    <Row className='align-items-center text-center'>
                                        <Col className=''>
                                            <figure className=''>
                                                <a
                                                    href='https://mudi-igbinoba.github.io/Movie-Watchlist/'
                                                    target='_blank'>
                                                    <Image
                                                        className='rounded'
                                                        src={movie1}
                                                        fluid
                                                        alt='Landing page of the movie watchlist app'
                                                    />
                                                </a>
                                            </figure>
                                        </Col>

                                        <Col className='d-md-flex d-none'>
                                            <figure className=''>
                                                <a
                                                    href='https://mudi-igbinoba.github.io/Movie-Watchlist/'
                                                    target='_blank'>
                                                    <Image
                                                        className='rounded'
                                                        src={movie2}
                                                        fluid
                                                        alt='Watchlist page of the movie watchlist app'
                                                    />
                                                </a>
                                            </figure>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} className='ms-auto'>
                            <h3 className='display-6 post-title mb-3'>
                                Movie Watchlist
                            </h3>
                            <div className='post-category text-muted'>
                                <span>Personal Project</span>,{' '}
                                <span>Web Development</span>
                            </div>
                            <Button
                                href='https://mudi-igbinoba.github.io/Movie-Watchlist/'
                                target='_blank'
                                className='rounded-5 px-5 py-3 mt-3 fw-semibold'>
                                Live Project
                            </Button>{' '}
                            <Button
                                href='https://github.com/Mudi-Igbinoba/Movie-Watchlist'
                                target='_blank'
                                className=' rounded-5 px-5 mt-3 repo py-3 fw-semibold'>
                                Github Repo
                            </Button>
                        </Col>
                    </Row>

                    <Row className='row gy-5 align-items-center mt-5'>
                        <Col lg={7} className='order-lg-2'>
                            <Card className=''>
                                <Card.Body className='p-4 overflow-hidden bg-dark'>
                                    <Row className='align-items-center'>
                                        <Col>
                                            <figure>
                                                <a
                                                    href='https://quizzical-mudi.netlify.app/'
                                                    target='_blank'>
                                                    <Image
                                                        src={quiz1}
                                                        className='rounded'
                                                        fluid
                                                        alt='Quizzical start page'
                                                    />
                                                </a>
                                            </figure>
                                        </Col>

                                        <Col className='d-md-flex d-none'>
                                            <figure>
                                                <a
                                                    href='https://quizzical-mudi.netlify.app/'
                                                    target='_blank'>
                                                    <Image
                                                        src={quiz2}
                                                        className='rounded'
                                                        fluid
                                                        alt='Quizzical questions page'
                                                    />
                                                </a>
                                            </figure>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} className='col-lg-4 me-auto'>
                            <h3 className='display-6 post-title mb-3'>
                                Quizzical
                            </h3>
                            <div className='post-category text-muted mb-3'>
                                <span>Personal Project</span>,{' '}
                                <span>Web Development</span>
                            </div>
                            <Button
                                href='https://quizzical-mudi.netlify.app/'
                                target='_blank'
                                className='rounded-5 px-5 py-3 mt-3 fw-semibold'>
                                Live Project
                            </Button>{' '}
                            <Button
                                href='https://github.com/Mudi-Igbinoba/Quizzical'
                                target='_blank'
                                className=' rounded-5 px-5 mt-3 repo py-3 fw-semibold'>
                                Github Repo
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Cards;
