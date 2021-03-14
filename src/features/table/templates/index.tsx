import React from 'react';
import { breakpoints, colors } from '../../../lib/settings';
import { Container, Row, Col } from '../../../ui/atoms';

interface TableProps {
    children: React.ReactNode,
    headingTitle: string
}

export const Table: React.FC<TableProps> = ({children, headingTitle}) => {
    return (
        <>
            <Container minWidth={breakpoints.l}>
                <Row 
                    direction={'row'} 
                    padding={'small'} 
                    bgColor={colors.green} 
                    borderRadius={'5px 5px 0 0'}
                >
                    <Col size={1} textColor={colors.white}>
                        {headingTitle}
                    </Col>
                </Row>
                {children}
            </Container>
        </>
    )
}