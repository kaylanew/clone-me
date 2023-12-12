import Header from '../components/Header';
import CloneMeTMlogo from '../img/CloneMeTMlogo.png';
import { Col, Row } from 'reactstrap';
import Footer from '../components/Footer';

const HomePage = () => {
    const textStyles = {
        fontSize: '500%',
        font: 'bold',
        margin: 'auto',
        padding: '10%'
    }
    return (
        <div>
            < Header current={'Home'} />
            <Row>
                <Col style={textStyles}>We do your to-do list!
                </Col>
                <Col >
                    <img src={CloneMeTMlogo} alt='CloneMeLogo' />
                </Col>

            </Row>
            <Footer />
        </div>
        
    )
};

export default HomePage;