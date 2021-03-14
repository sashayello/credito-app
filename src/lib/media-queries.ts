import { breakpoints } from './settings';

export const respondTo = (bp: keyof typeof breakpoints) => (
  style: TemplateStringsArray | string,
) => `@media (min-width: ${breakpoints[bp]}px) { ${style} }`;

const size = {
  s: `${breakpoints.s}px`,
  m: `${breakpoints.m}px`,
  l: `${breakpoints.l}px`,
};

export const device = (Object.keys(size) as Array<keyof typeof size>).reduce(
  (acc, key) => {
    acc[key] = (style: TemplateStringsArray | string) =>
      `@media (min-width: ${size[key]}) { ${style} }`;
    return acc;
  },
  // eslint-disable-next-line @typescript-eslint/ban-types
  {} as { [index: string]: Function },
);
