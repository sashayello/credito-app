import styled, { StyledComponent } from 'styled-components';

interface ColProps {
    size?: number,
    height?: number,
    alignItem?: string,
    justifyContent?: string,
    display?: string,
    textColor?: string,
    textAlign?: string
}

export const Col = styled.div<ColProps>`
    --flexSize: ${((size) => (size?.size ? `calc( ${100 * 1 / size.size}% - 40px)`: '100%'))};

    padding: 0 20px;
    width: var(--flexSize);
    height: ${((height) => (height?.height ? `${height.height}px` : 'auto'))};
    align-items: ${((alignItem) => (alignItem?.alignItem ? `${alignItem.alignItem}` : 'flex-start'))};
    justify-content: ${((justifyContent) => (justifyContent?.justifyContent ? `${justifyContent.justifyContent}` : 'flex-start'))};
    display: ${((display) => (display?.display ? `${display.display}` : null))};
    color: ${((textColor) => (textColor?.textColor ? `${textColor?.textColor}` : null))};
    font-size: ${((textColor) => (textColor?.textColor ? `0.75rem` : null))};
    font-weight: ${((textColor) => (textColor?.textColor ? `700` : null))};
    position: relative;
    text-align: ${((textAlign) => (textAlign?.textAlign ? `${textAlign?.textAlign}` : null))};
` as StyledComponent<'div', Record<string, number>, ColProps>;