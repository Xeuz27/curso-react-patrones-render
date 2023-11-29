import React from "react";
import { useTodos } from "../Hooks/useTodos";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    addTodo,
    completedTodos,
    completeTodo,
    deleteTodo,
    error,
    loading,
    openModal,
    searchedTodos,
    searchValue, 
    setOpenModal,
    setSearchValue,
    sincronizeTodos,
    totalTodos,
  } = useTodos();

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        sincronizeTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
