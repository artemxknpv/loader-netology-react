import React from 'react';
import { List } from '../List';
import './index.css';
import { AppWrapper } from '../../components/styled/StyledApp';

export const App = () => {
  return (
    <AppWrapper>
      <List />
    </AppWrapper>
  );
}
