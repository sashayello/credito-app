import { colors } from 'lib/settings';
import styled from 'styled-components';

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    column-count: 2;
`;

export const ListItems = styled.li`
    font-size: 0.75rem;
    font-weight: 300;
    color: ${colors.black};
    margin-bottom: 10px;
    &.disable {
        color: ${colors.grey};
    }
`;
