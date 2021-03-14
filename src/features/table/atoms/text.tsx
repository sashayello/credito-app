import styled from 'styled-components';
import { colors } from 'lib/settings';

export const Text = styled.p`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${colors.black};
    margin-bottom: 2px;
`;

export const SubText = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
    color: ${colors.grey};
`;

export const DiscountText = styled.p`
    font-size: 0.75rem;
    font-weight: 700;
    color: ${colors.blue};
    position: absolute;
    top: -10px;
    left:8px;
`;