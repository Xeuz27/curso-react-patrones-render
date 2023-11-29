/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useTodos } from "../Hooks/useTodos";

import AppUi from "./AppUI/AppUi";
import { TodoProvider } from "../Context/TodoContext";
function App() {
  return (
    <TodoProvider>
    
      <AppUi />
    </TodoProvider>
  );
}

export default App;
