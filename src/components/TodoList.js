import React from 'react';
import TodolistItem from './TodoListItem';
import '../styles/_TodoList.scss';

// todos 배열을 props로 받아와서, 이를 map함수를 이용하여 여러개의 TodolistItem로 반환
const TodoList = ({ todos, onRemove, onToggle }) => {
  // item은 app.js의 todos의 기본 값에 저장되어 있는 요소 하나하나를 의미한다.
  return (
    <div className="TodoList">
      {todos.map((item) => (
        <TodolistItem
          key={item.id}
          todo={item}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

// 리스트 내부에서 사용하는 컴포턴트도 최적화 하는 것이 좋다.
export default React.memo(TodoList);
