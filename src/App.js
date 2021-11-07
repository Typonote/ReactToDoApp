import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useRef, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '겉옷 빨래하기',
      checked: true,
    },
    {
      id: 2,
      text: '책상 정리',
      checked: true,
    },
    {
      id: 3,
      text: '부모님 안부전화 드리기',
      checked: false,
    },
  ]);

  // id 값은 렌더링 되는 정보가 아니기 때문에, useRef사용
  const nextId = useRef(4);

  const OnInsertHandler = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1 씩 더하기
    },
    [todos],
  );

  const OnRemoveHandler = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={OnInsertHandler} />
      <TodoList todos={todos} onRemove={OnRemoveHandler} />
    </TodoTemplate>
  );
}

export default App;
