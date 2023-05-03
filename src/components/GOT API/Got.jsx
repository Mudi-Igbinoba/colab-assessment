import './got.css';
import theme from '../../assets/files/got.mp3';
import { Card, Col, Container, Image, Row, Spinner } from 'react-bootstrap';
import banner from '../../assets/img/got2.jpg';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const Got = () => {
    const [gotQuotes, setGotQuotes] = useState();
    const [spinner, setSpinner] = useState(
        <Spinner animation='border' className=' d-block mx-auto' role='status'>
            <span className='visually-hidden'>Loading...</span>
        </Spinner>
    );

    useEffect(() => {
        fetch('https://api.gameofthronesquotes.xyz/v1/random/5')
            .then((res) => {
                if (!res.ok) {
                    throw Error('SOS');
                }
                return res.json();
            })
            .then((data) => setGotQuotes(data));
    }, []);

    setTimeout(() => {
        setSpinner();
    }, 4000);

    return (
        <Container className='py-5'>
            <section id='api'>
                <Image src={banner} fluid className='mx-auto d-block mb-4' />
                <audio
                    controls
                    src={theme}
                    autoPlay
                    className='mx-auto d-block mb-4'></audio>

                <h2 className='text-center display-5 mb-4'>
                    <a
                        href='https://gameofthronesquotes.xyz/'
                        target='_blank'
                        className='text-decoration-none text-dark'
                        rel='noopener noreferrer'>
                        Game Of Thrones Quotes API
                    </a>
                </h2>

                <p className='desc text-center'>
                    I chose to use this api because it gives me a way to connect
                    my love for tv shows with my love for building user
                    interfaces and also provides a bridge between my personal
                    and professional life. So here are a couple of random quotes
                    from characters in one of my favourite TV shows.
                </p>

                <Row xs={1} md={2} className='g-4 my-5'>
                    {spinner
                        ? spinner
                        : gotQuotes.map((e) => (
                              <Col key={nanoid()}>
                                  <Card className='h-100 px-5 py-4 border-start'>
                                      <figure>
                                          <blockquote className='blockquote'>
                                              <Card.Text>
                                                  "{e.sentence}"
                                              </Card.Text>
                                          </blockquote>
                                          <figcaption className='mt-3 text-end fw-bold text-dark blockquote-footer'>
                                              {e.character.name} <br />
                                              <cite
                                                  className='text-secondary fw-normal'
                                                  title={
                                                      e.character.house.name
                                                  }>
                                                  {e.character.house.name}
                                              </cite>
                                          </figcaption>
                                      </figure>
                                  </Card>
                              </Col>
                          ))}
                </Row>
            </section>
        </Container>
    );
};

export default Got;
