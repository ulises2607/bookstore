import React from 'react';
import { useSelector } from 'react-redux';

const Categories = () => {
  const status = useSelector((state) => state.categories.status);

  return (
    <h1>
      {status}
    </h1>
  );
};

export default Categories;
