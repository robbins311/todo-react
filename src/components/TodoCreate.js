import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%); /* 반바퀴 */
  color: #fff;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
  svg {
    width: 50px;
    height: 50px;
  }
`;

function TodoCreate() {
  return (
    <>
      <CircleButton>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
