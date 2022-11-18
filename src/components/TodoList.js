import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";
import TodoItems from "./TodoItems";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItems
          key={todo.id}
          id={todo.id}
          done={todo.done}
          text={todo.text}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
