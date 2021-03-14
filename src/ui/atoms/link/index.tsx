import { colors } from './../../../lib/settings';
import styled from 'styled-components';

export const Link = styled.a`
    color: ${colors.grey};
    font-size: 0.875rem;
    text-decoration: none;
    transition: color .3s ease-in-out;
    &:hover {
        color: ${colors.blue}
    }
`