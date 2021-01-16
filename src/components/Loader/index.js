import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export const Loader = ({ loading }) => {
  return (
    <ClipLoader loading={loading} size={150} />
  );
}