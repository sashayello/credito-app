import styled, { StyledComponent } from 'styled-components';

interface RowProps {
    direction?: 'row' | 'column'
}

export const Row = styled.div<RowProps>`
    --flexDirection: ${(direction) => (`${direction.direction}`)};
    flex-direction: var(--flexDirection);
    flex-wrap: wrap;
    display: flex;
` as StyledComponent<'div', Record<string, number>, RowProps>;