import React, { useState } from "react";

import "./App.css";
import AddNewTodo from "./components/AddNewTodo/AddNewTodo";
import ListTodo from "./components/ListTodo/ListTodo";
import Container from "@material-ui/core/Container";
import SearchAppBar from "./core/SearchAppBar";

const DEFAULT_TODO_DATA = [
  {
    id: 1000001,
    title: "My First Todo",
    date: new Date(),
    time: null,
    doneStatus: false,
  },
];

function App() {
  const [todos, setTodos] = useState(DEFAULT_TODO_DATA);
  const [eneteredSearchValue, setEneteredSearchValue] = useState(null);

  const onAddNewTodoHandler = (newTodo) => {
    setTodos((previousTodos) => {
      return [newTodo, ...previousTodos];
    });
  };

  const onSearchChangeHandler = (searchValue) => {
    setEneteredSearchValue(searchValue);
  };

  return (
    <div className="App">
      <SearchAppBar onSearchChange={onSearchChangeHandler} />
      <Container maxWidth="md" style={{paddingTop: '22px'}}>
        <AddNewTodo onAddNewTodo={onAddNewTodoHandler} />
        <ListTodo searchValue={eneteredSearchValue} items={todos} />
      </Container>
    </div>
  );
}

export default App;
