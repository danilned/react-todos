import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTodos } from "redux/slices/todoSlice";
import constants from "assets/constants";
import Pagination from "common/Pagination";
import TodosControl from "./TodosControl";
import Todo from "./Todo";

const { displayTodos } = constants;

function TodosContainer() {
  const [page, setPage] = useState(0);
  const [allTodosState, setAllTodosState] = useState(true);
  const { todos } = useSelector(state => state.todos);
  const { userId } = useSelector(state => state.app);
  const dispatch = useDispatch();

  const editTodo = useCallback(
    todo => {
      const copy = [...todos];
      copy.splice(
        todos.findIndex(cur => cur.id === todo.id),
        1,
        todo
      );
      dispatch(editTodos(copy));
    },
    [todos]
  );

  const removeTodo = useCallback(
    id => {
      const copy = [...todos];
      copy.splice(
        todos.findIndex(cur => cur.id === id),
        1
      );
      dispatch(editTodos(copy));
    },
    [todos]
  );

  const filtredTodos = useMemo(
    () => (allTodosState ? todos : todos.filter(cur => cur.userId === userId)),
    [todos, allTodosState]
  );

  useEffect(() => {
    setPage(0);
  }, [allTodosState]);

  return (
    <div className="todos-container">
      <TodosControl
        id={todos.length + 1}
        setAllTodosState={setAllTodosState}
        allTodosState={allTodosState}
      />
      {filtredTodos.slice(page, page + displayTodos).map((cur, index) => (
        <Todo
          key={cur.id}
          todo={cur}
          index={index + page}
          allTodos={allTodosState}
          editTodo={editTodo}
          removeTodo={removeTodo}
        />
      ))}
      <Pagination
        total={filtredTodos.length / displayTodos}
        page={page / displayTodos}
        setPage={setPage}
      />
    </div>
  );
}

export default TodosContainer;
