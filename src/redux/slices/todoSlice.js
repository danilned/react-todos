import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const { todos } = await fetch("https://dummyjson.com/todos").then(data =>
    data.json()
  );

  return todos;
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todosIsLoading: true,
    todos: []
  },
  reducers: {
    editTodos(state, { payload }) {
      state.todos = payload;
    },
    addTodo(state, { payload }) {
      state.todos.push(payload);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.todosIsLoading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.todosIsLoading = false;
      });
  }
});

export default todoSlice.reducer;
export const { editTodos, addTodo } = todoSlice.actions;
