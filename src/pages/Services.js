import Footer from '../components/Footer';
import Header from '../components/Header';
import { Card, CardBody, CardTitle, CardText, Row, Col, CardSubtitle } from 'reactstrap';




const Services = () => {


    return (
        <div style={{ display: 'flex', flexDirection: 'column', background: '#bc13fe' }}>

            < Header current={'Services'} style={{}} />

            <div style={{ flex: 1, padding: '20px' }}>
                <Row>
                    <Col style={{ xs: '2' }}>
                        <Card style={{ height: '200', width: '200', padding: '2px', margin: '30px' }} >
                            <CardBody className='text-center'>
                                <CardTitle >
                                    <h3 style={{ color: '#bc13fe' }}>Organization</h3>
                                </CardTitle>
                                <CardText>
                                    <ul style={{ listStyle: 'none' }}>
                                        <li>Offices</li>
                                        <li>Closets</li>
                                        <li>Cupboards</li>
                                        <li> Pantries</li>
                                        <li>Garages</li>
                                    </ul>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ height: '200', width: '200', padding: '2px', margin: '30px' }} >
                            <CardBody className='text-center'>
                                <CardTitle>
                                    <h3 style={{ color: '#bc13fe' }}>Cleaning/Laundry</h3>
                                </CardTitle>
                                <CardSubtitle style={{ color: '#bc13fe' }}> <h5>Residential/Commercial</h5> </CardSubtitle>
                                <CardText>  <ul style={{ listStyle: 'none' }}>
                                    <li>Move in/ Move out</li>
                                    <li>One time</li>
                                    <li>Biweekly</li>
                                    <li> Monthly</li>
                                    <li>Weekly</li>
                                </ul>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ height: '200', width: '200', padding: '2px', margin: '30px' }} >
                            <CardBody className='text-center'>
                                <CardTitle>
                                    <h3 style={{ color: '#bc13fe' }}> Errands</h3>
                                </CardTitle>
                                <CardText>
                                    <ul style={{ listStyle: 'none' }}>
                                        <li>Shopping</li>
                                        <li>Pick up/ Drop off</li>
                                        <li>Vehicale Maintenance</li>
                                    </ul></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card style={{ height: '200', width: '200', padding: '2px', margin: '30px' }} >
                            <CardBody className='text-center'>
                                <CardTitle>
                                    <h3 style={{ color: '#bc13fe' }}>Pet Services</h3>
                                </CardTitle>
                                <CardText>
                                    <ul style={{ listStyle: 'none' }}>
                                        <li>Walking</li>
                                        <li>Daily visits</li>
                                        <li>Overnights</li>
                                    </ul>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ height: '200', width: '200', padding: '2px', margin: '30px' }} >
                            <CardBody className='text-center'>
                                <CardTitle>
                                    <h3 style={{ color: '#bc13fe' }}>Party Services</h3>
                                </CardTitle>
                                <CardText>
                                    <ul style={{ listStyle: 'none' }}>
                                        <li>Planning</li>
                                        <li>Decorating</li>
                                        <li>Clean up</li>
                                        <li>Shopping</li>
                                        <li>Gift wrapping</li>
                                    </ul>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ height: '200', width: '200', padding: '2px', margin: '30px' }} >
                            <CardBody className='text-center'>
                                <CardTitle>
                                    <h3 style={{ color: '#bc13fe' }}>Notary</h3>
                                </CardTitle>
                                <CardText>
                                    <ul style={{ listStyle: 'none' }}>
                                        <li>We come to you!</li>
                                        <li>FREE with any paid services at the scheduled location</li>
                                    </ul>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>

            <Footer current={'Services'} style={{ flex: 1 }} />

        </div>


    )
};

export default Services;