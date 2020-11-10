import React from 'react';
import {Row, Col, Container, Image} from 'react-bootstrap';
import banner from '../asset/images/banner.jpg';

const Welcome: React.FC = () => {
    return (
        <Container fluid={true} className='library'>
            <Row>
                <Col xs={12} className='text-center'>
                    <h1 className='py-2 title'>My Library</h1>
                </Col>

                <Col xs={12} className='pl-0 pr-0 library-banner'>
                    <Image src={banner} />
                    <p className='text-right pr-5'>
                        <span>Photo by <a href="https://unsplash.com/@annahunko?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Anna Hunko</a> on <a href="https://unsplash.com/s/photos/library?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Welcome;