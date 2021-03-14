import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { colors, breakpoints } from './../../../lib/settings';
import { Container, Row, Col } from'./../../atoms';

interface TitleProps {
    padding?: 'small' | 'medium' | 'large',
    textAlign?: 'center' | 'right' | 'left'
}

interface TitleTemplateProps {
    title: string,
    description: string
}

export const Title = styled.h1``;
export const Description = styled.p``;

export const SectionTitle = styled.section<TitleProps>`
    --paddingProp: ${((padding) => (padding?.padding === 'small' ? '10px 0' : (padding?.padding === 'medium' ? '20px 0' : (padding?.padding === 'large' ? '40px 0' : null))))};
    --textAlign: ${((textAlign) => (textAlign?.textAlign === 'center' ? 'center' : (textAlign?.textAlign === 'right' ? 'right' : (textAlign?.textAlign === 'left' ? 'left' : null))))};

    padding: var(--paddingProp);
    background-color: ${colors.white};
    border-bottom: 1px solid rgba(0,0,0,.09);

    ${Title} {
        font-size: 1.5rem;
        color: ${colors.black};
        font-weight: 700;
    }

    ${Description} {
        font-size: 1rem;
        color: ${colors.black};
        font-weight: 300;
        text-align: var(--textAlign);
        width: 700px;
        line-height: 1.625rem;
    }    
` as StyledComponent<'section', Record<string, number>, TitleProps>;

export const TitleTemplateBox: React.FC<TitleTemplateProps> = ({title, description}) => {
    return (
        <>
            <SectionTitle textAlign={'center'}>
                <Container minWidth={breakpoints.l}>
                <Row direction={'row'} padding={'medium'}>
                    <Col size={1} display={'flex'} justifyContent={'center'}>
                    <Title>
                        {title}
                    </Title>
                    
                    </Col>
                </Row>
                <Row direction={'row'} padding={'medium'} paddingTopRemove={true}>
                    <Col size={1} display={'flex'} justifyContent={'center'}>
                    <Description>
                        {description}
                    </Description>
                    </Col>
                </Row>
                </Container>
            </SectionTitle>
        </>
    )
}