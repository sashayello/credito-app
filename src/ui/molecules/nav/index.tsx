import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { List } from './../../atoms/index';

interface Props {
    direction?: 'row' | 'column',
    uppercase?: boolean,
    fontWeight?: number,
}

export const Nav: React.FC<Props> = ({children, direction, uppercase, fontWeight}) => {
    return (
        <NavElement>
            <List direction={direction} uppercase={uppercase} fontWeight={fontWeight}>
                {children}
            </List>
        </NavElement>
    )
}

export const NavElement = styled.nav`
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
` as StyledComponent<'nav', Record<string, number>, {}>