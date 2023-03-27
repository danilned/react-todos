import React, { useState } from "react";
import CrossButton from "common/CrossButton";

function Todo({ todo, index, allTodos, editTodo, removeTodo }) {
  const [edit, setEdit] = useState(false);

  return (
    <div className="todo">
      <div className="form-group row align-items-center">
        <div className="col">{`${index + 1}.`}</div>
        <div className="todo-text">
          {edit ? (
            <input
              onKeyDown={e => {
                if (e.key === "Enter") setEdit(false);
              }}
              onChange={({ nativeEvent }) => {
                editTodo({
                  ...todo,
                  todo: nativeEvent.target.value
                });
              }}
              onBlur={() => setEdit(false)}
              autoFocus
              className="form-control"
              type="text"
            />
          ) : (
            <button
              onDoubleClick={() => {
                if (!(todo.completed || allTodos)) setEdit(true);
              }}
              className={`clear-button ${
                todo.completed ? "text-decoration-line-through" : ""
              }`}
            >
              {todo.todo ?? "This todo doesn't have any text"}
            </button>
          )}
        </div>
        {allTodos ? null : (
          <>
            <div className="check padding-0">
              <input
                onChange={() =>
                  editTodo({ ...todo, completed: !todo.completed })
                }
                checked={!!todo.completed}
                className="form-check-input"
                type="checkbox"
              />
            </div>
            <div className="remove">
              <CrossButton click={removeTodo} args={[todo.id]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Todo;
