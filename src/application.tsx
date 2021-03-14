import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Scope } from 'effector/fork';
import { Provider } from 'effector-react/ssr';

import { Pages } from './pages';

import { Header } from './ui/organisms'

interface Props {
  root: Scope;
}

const Globals = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
  }
`;

export const Application: React.FC<Props> = ({ root }) => (
  <Provider value={root}>
      <Globals />
      <Header />
      <Pages />
  </Provider>
);
