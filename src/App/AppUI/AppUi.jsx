import React, { useContext } from "react";
import {
    ChangeAlert,
    CreateTodoButton,
    EmptyTodos,
    Modal,
    TodoCounter,
    TodoForm,
    TodoHeader,
    TodoItem,
    TodoList,
    TodoSearch,
    TodosError,
    TodosLoading,
} from "../../Components";
import { TodoContext } from "../../Context/TodoContext";

const AppUi = () => {
  const {
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    sincronizeTodos,
  } = useContext(TodoContext);
  return (
    <>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>

      <TodoList
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />

      <ChangeAlert sincronize={sincronizeTodos} />
    </>
  );
};

export default AppUi;
