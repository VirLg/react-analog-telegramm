import styled from '@emotion/styled';

export const ItemDiv = styled.div`
  height: 80px;
  width: 410px;
  display: flex;
  outline: 1px solid red;
  border-radius: 12px;
  align-items: center;
  &:hover,
  &:focus {
    background-color: #e8e8e8;
  }
`;
export const AvatarDiv = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  outline: 1px solid red;
  margin-left: 8px;
  margin-right: 8px;
`;
export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;
