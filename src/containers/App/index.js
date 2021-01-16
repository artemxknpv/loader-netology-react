import React from 'react'
import { useSelector } from 'react-redux';
import { List } from '../../components/List';

export const App = () => {
  const isLoading = useSelector(state => state)
  console.log(isLoading)
  return (
    <List />
  );
}
