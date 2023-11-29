import React, { useContext } from "react";
import "./TodosLoading.css";
import { TodoContext } from "../../Context/TodoContext";

function TodosLoading() {
  const {searchedTodos} = useContext(TodoContext);
  return searchedTodos.map((index) => (
    <div key={index} className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">cargando</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  ));
}

export { TodosLoading };
