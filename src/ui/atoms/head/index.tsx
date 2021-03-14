import { colors } from '../../../lib/settings';
import styled, { StyledComponent } from 'styled-components';

export const Head = styled.header`
    height: 75px;
    border-bottom: 1px solid #eaeaea;
    background-color: ${colors.white};
    box-shadow: 2px 2px 7px rgba(0,0,0,.14);
` as StyledComponent<'header', Record<string, number>, {}>