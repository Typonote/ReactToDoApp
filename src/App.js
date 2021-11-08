import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useRef, useState } from 'react';

// 할일 2500개 생성 => 느려진 것을 체감할 수 있다.
// 느려지는 원인
// 1. 자신이 전달받은 props가 변경될 때.
// 2. 자신의 state가 바뀔 때.
// 3. 부모 컴포넌트가 리렌더링 될 때.
// 4. forUpdate 함수가 실행될 때.
// 체크 가 발생한 부분만 리렌더링 되어야 하지만, 2500개 모두 리렌더링되고 있음.
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function App() {
  const [todos, setTodos] = useState(createBulkTodos);
  //createBulkTodos()가 아닌 createBulkTodos 형태로 넣어주면, 컴포넌트가 처음 렌더링 될때만 함수가 실행한다.

  // id 값은 렌더링 되는 정보가 아니기 때문에, useRef사용
  const nextId = useRef(2501);

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

  const OnToggleHandler = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={OnInsertHandler} />
      <TodoList
        todos={todos}
        onRemove={OnRemoveHandler}
        onToggle={OnToggleHandler}
      />
    </TodoTemplate>
  );
}

export default App;
