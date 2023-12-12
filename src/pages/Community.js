import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardBody, Col, Row } from 'reactstrap';

const Community = () => {
    return (
        <div>
            < Header current={'Community'} />
            <div>
                <Row>
                    <Col>
                    <Card>
                        <CardBody>
                        Clone Me partners with the non-profits organization Community Resource Central. Help us give back by donating gently used items. Donation receipts are available.
                        </CardBody>
                    </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <Card>
                        <CardBody>
                            <img> </img>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                        www.communityresourcecentral.org
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </div>
            <Footer current={'Community'} />
        </div>


    )
};

export default Community;