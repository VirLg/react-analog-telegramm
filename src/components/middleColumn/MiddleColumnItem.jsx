import React from 'react';
import { useGetChatsQuery } from '../../components/redux/rtkQuery/rtkQuery';
import { useDispatch } from 'react-redux';

import { modalShow } from '../../components/redux/slice';
const MiddleColumnItem = ({ handleID }) => {
  const { data, error, isLoading } = useGetChatsQuery();

  const dispatch = useDispatch();

  const handleModalShow = id => {
    dispatch(modalShow(true));
    handleID(id);
  };
  return (
    data &&
    data.map(el => {
      return (
        <div
          onClick={() => handleModalShow(el._id)}
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
