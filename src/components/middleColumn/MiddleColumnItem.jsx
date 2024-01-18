import React from 'react';
import {
  useDeleteMessageMutation,
  useGetChatsQuery,
} from '../../redux/rtkQuery/rtkQuery';

const MiddleColumnItem = () => {
  const { data, error, isLoading } = useGetChatsQuery();
  const [deleteMessage] = useDeleteMessageMutation();
  console.log('data', data);
  return (
    data &&
    data.map(el => {
      return (
        <div
          onClick={() => deleteMessage(el._id)}
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
