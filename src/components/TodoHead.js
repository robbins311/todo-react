import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #e4e4e4;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  // state context로 불러옴
  const todos = useTodoState();
  console.log(todos);
  const unDoneTask = todos.filter((todo) => !todo.done);

  // 날짜 출력
  const today = new Date();
  const dateString = today.toLocaleDateString("kr-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("kr-KR", { weekday: "long" });

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">
        {unDoneTask.length} things left{" "}
        {unDoneTask.length > 1 ? "To-dos" : "To-do"}
      </div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
