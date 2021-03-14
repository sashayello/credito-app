import React from 'react';
import styled  from 'styled-components';

interface HomeTemplateProps {
    children?: React.ReactNode
}

export const Section = styled.section`
    padding: 20px 0;
`;

export const HomePageTemplate: React.FC<HomeTemplateProps> = ({children}) => {
    return (
        <><Section>{children}</Section></>
    )
}