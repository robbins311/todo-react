import React from "react";
import styled from "styled-components";
import TodoItems from "./TodoItems";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
function TodoList() {
  return (
    <TodoListBlock>
      <TodoItems text="프로젝트 생성하기" done={true} />
      <TodoItems text="프로젝트 생성하기" done={true} />
      <TodoItems text="프로젝트 생성하기" done={false} />
      <TodoItems text="프로젝트 생성하기" done={false} />
      <TodoItems text="프로젝트 생성하기" done={true} />
      <TodoItems text="프로젝트 생성하기" done={false} />
      <TodoItems text="프로젝트 생성하기" done={true} />
      <TodoItems text="프로젝트 생성하기" done={false} />
      <TodoItems text="프로젝트 생성하기" done={true} />
      <TodoItems text="프로젝트 생성하기" done={false} />
      <TodoItems text="프로젝트 생성하기" done={true} />
      <TodoItems text="프로젝트 생성하기" done={false} />
      <TodoItems text="프로젝트 생성하기" done={true} />
      <TodoItems text="프로젝트 생성하기" done={false} />
      <TodoItems text="프로젝트 생성하기" done={true} />
    </TodoListBlock>
  );
}

export default TodoList;
