import React from 'react';
import { breakpoints } from './../../../lib/settings';
import { Container, Row, Col } from 'ui/atoms';

export const Table: React.FC<{}> = () => {
    return (
        <>
            <Container minWidth={breakpoints.l}>
                <Row direction={'row'}>
                    <Col size={5}>
                        img
                    </Col>
                    <Col size={5}>
                        persentage
                    </Col>
                    <Col size={5}>
                        count money
                    </Col>
                    <Col size={5}>
                        small info
                    </Col>
                    <Col size={5}>
                        button
                    </Col>
                </Row>
            </Container>
        </>
    )
}