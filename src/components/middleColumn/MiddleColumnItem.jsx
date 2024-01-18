import React from 'react';
import { useGetChatsQuery } from '../../redux/rtkQuery/rtkQuery';

const MiddleColumnItem = () => {
  const { data, error, isLoading } = useGetChatsQuery();
  console.log('data', data);
  return (
    data &&
    data.map(el => {
      return (
        <div
          key={el._id}
          style={{
            width: '200px',
            height: '40px',
            borderRadius: '8px',
            backgroundColor: 'yellow',
            marginTop: '6px',
          }}
        >
          <p> {el.message}</p>
        </div>
      );
    })
  );
};

export default MiddleColumnItem;
