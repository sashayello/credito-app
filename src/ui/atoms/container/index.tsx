import { respondTo } from 'lib/media-queries';
import styled, { StyledComponent } from 'styled-components';

interface ContainerProps {
    minWidth?: number,
}

export const Container = styled.div<ContainerProps>`
    --minWidth: ${(({minWidth}) => (minWidth ? `${minWidth}px` : '1rem'))};

    ${respondTo("l")`
        --maxWidth: 100%;
    `};

    max-width: var(--minWidth);
    width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;
    display: block;
    position: relative;
`as StyledComponent<'div', Record<string, number>, ContainerProps>;