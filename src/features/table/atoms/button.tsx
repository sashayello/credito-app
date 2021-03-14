import styled from 'styled-components';
import { colors } from './../../../lib/settings';

export const Button = styled.button`
    color: ${colors.white};
    background-color: ${colors.green};
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    border: 0;
    border-radius: 5px;
    height: 54px;
    width: 160px;
    cursor: pointer;
    transition: box-shadow .3s ease-in-out;
    outline: none;
    &:hover {
        box-shadow: 1px 2px 6px rgba(0,0,0,.22);
    }
`;

export const ButtonInfo = styled.a`
    color: ${colors.grey};
    font-size: 0.6875rem;
    font-weight: 400;
    border-bottom: 1px dashed ${colors.grey};
    cursor: pointer;
    transition:  .3s ease-in-out;
    text-decoration: none;
    &:hover {
        color: ${colors.blue};
        border-bottom: 1px dashed transparent;
    }
`;