import React from 'react';
import Card from '../Card';
import { listTables } from 'constants/searchPage';

const Index = () => {
  return (
    <div>
      {listTables.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default Index;