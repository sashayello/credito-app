import styled, { StyledComponent } from 'styled-components';

interface ListProps {
    direction?: 'row' | 'column',
    uppercase?: boolean,
    fontWeight?: number
}

export const ListItem = styled.li``;

export const List = styled.ul<ListProps>`
    --flexDirection: ${(direction) => (`${direction.direction}`)};
    --textUppecase: ${((uppercase) => (uppercase.uppercase ? 'uppercase' : 'normal'))};
    --textWeight: ${((fontWeight) => (fontWeight.fontWeight ? `${fontWeight.fontWeight}` : 'normal'))};

    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: var(--flexDirection);

    ${ListItem} {
        margin-right: 20px;
        text-transform: var(--textUppecase);
        font-weight: var(--textWeight);
        &:last-child {
            margin-right: 0;
        }
    }

` as StyledComponent<'ul', Record<string, number>, ListProps>;