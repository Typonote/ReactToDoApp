import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState } from 'react';

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

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
