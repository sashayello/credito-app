import styled, { StyledComponent } from 'styled-components';

interface ColProps {
    size?: number,
    height?: number,
    alignItem?: string,
    display?: string
}

export const Col = styled.div<ColProps>`
    --flexSize: ${((size) => (size?.size ? `calc( ${100 * 1 / size.size}% - 40px)`: '100%'))};

    padding: 0 20px;
    width: var(--flexSize);
    height: ${((height) => (height?.height ? `${height.height}px` : 'auto'))};
    align-items: ${((alignItem) => (alignItem?.alignItem ? `${alignItem.alignItem}` : 'flex-start'))};
    display: ${((display) => (display?.display ? `${display.display}` : null))};
` as StyledComponent<'div', Record<string, number>, ColProps>;