import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import '../styles/_TodoListItem.scss';

// 각 할일 항목에 대한 정보를 보여주는 컴포넌트 => todo 객체를 props로 받아와서 상태에 따른 다른 스타일의 UI를 보여줌.
const TodoListItem = ({ todo, onRemove, onToggle }) => {
  // 값은 app.js의 todos의 기본 값에 자장되어 있다.
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

// 함수형 컴포넌트에서는 React.memo를 통해 리렌더링 최적화를 할 수 있다.
export default React.memo(TodoListItem);
