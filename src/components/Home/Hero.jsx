import { Col, Container, Image, Row } from 'react-bootstrap';
import './hero.css';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Profile from '../../assets/img/profile.png';

const Hero = () => {
    return (
        <>
            <section id='about-me' className='pb-5'>
                <Container>
                    <Row className='gx-lg-4 gy-lg-0 gy-4 align-items-center justify-content-center'>
                        <Col
                            xl={8}
                            lg={9}
                            className='text-lg-start text-center'>
                            <h2 className='display-5 mb-4'>
                                About Me{' '}
                                <span className='fs-5 ms-2 d-md-inline d-none'>
                                    I don’t know what you heard about me 🎵
                                </span>
                            </h2>
                            <p>
                                My name is Mudi. I’m a frontend developer based
                                in Lagos, Nigeria and experienced in HTML, CSS,
                                JavaScript, Bootstrap, and React. I’m a huge
                                foodie and dog lover; in my spare time I love
                                watching TV shows, listening to music and
                                reading books
                            </p>

                            <div>
                                <a
                                    href='https://github.com/Mudi-Igbinoba'
                                    target='_blank'
                                    className='fs-3'
                                    rel='noopener noreferrer'>
                                    <BsGithub />
                                </a>

                                <a
                                    className='mx-3 fs-3'
                                    href='https://www.linkedin.com/in/osamudiame-igbinoba/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <BsLinkedin />
                                </a>

                                <a
                                    href='https://twitter.com/Mudi_Igbinoba'
                                    target='_blank'
                                    className='fs-3'
                                    rel='noopener noreferrer'>
                                    <BsTwitter />
                                </a>
                            </div>
                        </Col>

                        <Col
                            xs={{ order: 'first', span: 5 }}
                            lg={{ order: 'last', span: 3 }}
                            xl={4}>
                            <Image
                                src={Profile}
                                alt=''
                                className='d-block ms-xxl-auto'
                                fluid
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Hero;
