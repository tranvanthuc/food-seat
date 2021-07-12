import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getListRequest } from './movieSlice';

function Index() {
  const [list, loading] = useAppSelector(({ movie: { list, loading } }) => [
    list,
    loading,
  ]);

  console.log(loading);
  console.log(list);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getListRequest());
  }, [dispatch]);

  if (loading) return <div>Loading....</div>;

  return (
    <div>
      {list.map((movie, index) => (
        <div key={index}>{movie.title}</div>
      ))}
    </div>
  );
}

export default Index;
