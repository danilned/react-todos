import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "components/Layout";
import Login from "components/Login";
import About from "components/About/About";
import TodosContainer from "components/Todos/TodosContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<Layout children={<TodosContainer />} />}
        />
        <Route path="/about" element={<Layout children={<About />} />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
