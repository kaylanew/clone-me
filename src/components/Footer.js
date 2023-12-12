import { Container, Row, Col } from 'reactstrap';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faInstagram, faFacebook, faPhone, faEnvelope)


const Footer = ({ current }) => {
    const [topGradientColor, setTopGradientColor] = useState('#39ff14');
    const [bottomGradientColor, setBottomGradientColor] = useState('#ffffff');


    useEffect(() => {
        switch (current) {
            case 'Home':
                setTopGradientColor('#39ff14');
                setBottomGradientColor('#ffffff')
                break;
            case 'Services':
                setTopGradientColor('#ffffff');
                setBottomGradientColor('#bc13fe');
                break;
            case 'Community':
                setTopGradientColor('#ffffff');
                setBottomGradientColor('#ccff00');
                break;
            case 'Contact':
                setTopGradientColor('#ffffff');
                setBottomGradientColor('#ff9e3d');
                break;
            default:
                break;
        }
    }, [current]);
    return (
        <footer style={{ background: `linear-gradient(to top, ${topGradientColor}, ${bottomGradientColor}`, width: '100%' }} >
            <Row style={{ padding: '10vh'}}>

             <ul style={{ listStyle: 'none', display:'flex', justifyContent:'center'}}>
               <li style={{padding:'10px'}}> <FontAwesomeIcon icon={faFacebook} size='4x' /></li>
               <li style={{padding:'10px'}} > <FontAwesomeIcon icon={faInstagram} size='4x' /></li>
               <li style={{padding:'10px'}}>  <FontAwesomeIcon icon={faEnvelope} size='4x' /></li>
               <li style={{padding:'10px'}}> <FontAwesomeIcon icon={faPhone} size='4x' /></li>
                </ul>
            </Row>

        </footer>
    );
};

export default Footer;