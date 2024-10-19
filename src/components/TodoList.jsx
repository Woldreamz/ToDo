import React from "react";
import TodoCard from "./TodoCard.jsx";

const TodoList = (props) => {
  const { todos } = props;

  return (
    <div>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </div>
  );
};
export default TodoList;
