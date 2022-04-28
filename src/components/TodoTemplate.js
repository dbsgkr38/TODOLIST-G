import React from 'react';
import styled from 'styled-components';

const TodoTemplate = ({ children }) => {
  return (
    <TodoWrapper>
      <AppTitle>Todo List</AppTitle>
      <Content>{children}</Content>
    </TodoWrapper>
  );
};
const TodoWrapper = styled.div`
  width: 512px;
  margin: 6rem auto 0;
  border-radius: 4px;
  overflow: hidden;
`;

const AppTitle = styled.div`
  background: #129E4A;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: #ffffff;
`;

export default TodoTemplate;