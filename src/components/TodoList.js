import React from 'react';
import TodolistItem from './TodoListItem';
import '../styles/_TodoList.scss';

// todos 배열을 props로 받아와서, 이를 map함수를 이용하여 여러개의 TodolistItem로 반환
const TodoList = () => {
  return (
    <div className="TodoList">
      <TodolistItem />
      <TodolistItem />
      <TodolistItem />
    </div>
  );
};

export default TodoList;
