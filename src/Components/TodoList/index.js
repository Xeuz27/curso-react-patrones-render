import React, { useContext } from "react";
import "./TodoList.css";
import { TodoContext } from "../../Context/TodoContext";

function TodoList({
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearchResults,
  children,
  render,
}) {
  const renderFunc = children || render;
  const { loading, error, totalTodos,searchText, searchedTodos } = useContext(TodoContext);

  return (
    <section className="TodoList-container">
      {error && onError()}
      {loading && onLoading()}

      {!loading && !totalTodos && onEmptyTodos()}

      {!!totalTodos &&
        !searchedTodos.length &&
        onEmptySearchResults(searchText)}

      {!loading && !error && searchedTodos.map(renderFunc)}
    </section>
  );
}

export { TodoList };
