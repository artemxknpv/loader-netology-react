import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/actions';

export const List = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(actions.fetchList.start())
  }, [])

  return (
    <div>Loader</div>
  );
}