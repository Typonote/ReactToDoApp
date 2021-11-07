import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import '../styles/_TodoInsert.scss';

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
const TodoInsert = () => {
  const [value, setValue] = useState('');
  // 함수를 재사용하고, 렌더링을 최적화 하기 위해 useCallback을 사용.
  const onChangeHandler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChangeHandler}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
