import React, { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../../Context/TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue, loading } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
