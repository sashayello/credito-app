import React from 'react';
import styled from 'styled-components';
import { breakpoints } from './../../../lib/settings';
import { Container, Col, Row, Head, ListItem, Link } from './../../atoms';
import { Nav } from './../../molecules';

const logo = require('./../../../static/logo.jpeg');
const phoneIcon = require('./../../../static/call.svg');

interface Props {
}

export const Logo = styled.img`
    transition: opacity .3s ease-in-out;
    &:hover {
        opacity: .6;
    }
`;

export const Icon = styled.img`
    margin-right: 10px;
`;

export const Header: React.FC<Props> = (props: any) => {
    return (
        <Head>
            <Container minWidth={breakpoints.l}>
                <Row direction={'row'}>
                    <Col size={2}>
                        <Row direction={'row'}>
                            <Col size={2} height={75} alignItem={'center'} display={'flex'}>
                                <Link href="/">
                                    <Logo src={logo} alt="Company logo"/>
                                </Link>
                            </Col>
                            <Col size={2} height={75} alignItem={'center'} display={'flex'}>
                                <Link href="tel:8 800 503 00 90">
                                    <Icon src={phoneIcon} alt="phone icon"/>
                                    8 800 503 00 90
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col size={2}>
                        <Nav 
                            direction={'row'} 
                            uppercase={true} 
                            fontWeight={700}
                        >
                            <ListItem>
                                <Link href="#">Главная</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#">Кредитные карты</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#">Новости</Link>
                            </ListItem>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Head>
    )
}