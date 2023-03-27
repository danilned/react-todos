import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "redux/slices/todoSlice";

function TodosControl({ id, allTodosState, setAllTodosState }) {
  const { userId } = useSelector(state => state.app);
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-end gap-2 mb-2 me-2">
      {!allTodosState ? (
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(addTodo({ userId, completed: false, id }));
          }}
        >
          Add Todo
        </button>
      ) : null}
      <button
        className="btn btn-primary d-block"
        onClick={() => setAllTodosState(prev => !prev)}
      >
        {allTodosState ? "My Todos" : "All Todos"}
      </button>
    </div>
  );
}

export default TodosControl;
