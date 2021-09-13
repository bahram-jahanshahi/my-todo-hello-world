import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { Card } from "@material-ui/core";

function ListTodo(props) {

  const filteredTodos = props.items;  
  const searchValue = props.searchValue;

  const filteredItems = props.items.filter( (todo) => {
      if (searchValue === null || searchValue.trim().length === 0) {
          return true;
      }
      return todo.title.includes(searchValue);
  });

  return <Card variant="outlined">
      {filteredItems.map((todo) => (
          <TodoItem key={todo.id} item={todo} />
      ))}  
  </Card>;
}

export default ListTodo;
