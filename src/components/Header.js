import React from 'react';
import CloneMeTMlogo from '../img/CloneMeTMlogo.png';
// import { Link } from 'react-router-dom';
import { Nav, NavItem, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';



const Header = ({ current }) => {
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
        <div style={{ background: `linear-gradient(to bottom, ${topGradientColor}, ${bottomGradientColor}`, width: '100%' }} >
            <Row className="align-items-center">
                <Col className='d-flex align-items-center'>
                    <img src={CloneMeTMlogo} style={{ width: '20%' }}
                        alt='Clonemelogo' />

                    <h1>Clone Me</h1></Col>
                <Col>
                    <Nav className='justify-content-end'>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/services'>
                                Services
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/community'>
                                Community Resource Central
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact'>
                                Contact Us
                            </NavLink>
                        </NavItem>
                        {/* <NavItem>
                        <NavLink className='nav-link' to='/Partners'>
                           Partners
                        </NavLink>
                    </NavItem> */}
                    </Nav>
                </Col>
            </Row>
        </div>
    )
};

export default Header;

