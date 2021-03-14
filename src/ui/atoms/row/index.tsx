import styled, { StyledComponent } from 'styled-components';

interface RowProps {
    direction?: 'row' | 'column',
    padding?: 'small' | 'medium' | 'large',
    bgColor?: string,
    borderRadius?: string,
    border?: string,
    paddingTopRemove?: boolean,
}

export const Row = styled.div<RowProps>`
    --flexDirection: ${(direction) => (`${direction.direction}`)};
    --paddingProp: ${((padding) => (padding?.padding === 'small' ? '10px 0' : (padding?.padding === 'medium' ? '20px 0' : (padding?.padding === 'large' ? '40px 0' : null))))};
    flex-direction: var(--flexDirection);
    flex-wrap: wrap;
    display: flex;
    padding: var(--paddingProp);
    padding-top: ${((paddingTopRemove) => (paddingTopRemove?.paddingTopRemove ? '0' : null))};
    background-color: ${((bgColor) => (bgColor?.bgColor ? `${bgColor?.bgColor}` :  null))};
    border-radius: ${((borderRadius) => (borderRadius?.borderRadius ? `${borderRadius?.borderRadius}` : null))};
    border: ${((border) => (border?.border ? `${border?.border}` : null))};
    border-top: none;
` as StyledComponent<'div', Record<string, number>, RowProps>;