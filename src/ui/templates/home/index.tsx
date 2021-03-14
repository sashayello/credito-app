import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Table } from './../../organisms';

interface HomeTemplateProps {
    children?: React.ReactNode
}

export const Section = styled.section`
    padding: 20px 0;
    border-bottom: 1px solid red;
`

export const HomePageTemplate: React.FC<HomeTemplateProps> = ({children}) => {
    return (
        <>
            <Section>
                <Table />
            </Section>
        </>
    )
}