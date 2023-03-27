import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTodos } from "redux/slices/todoSlice";
import Header from "./Header/Header";
import Loader from "common/Loader";

function Layout({ children }) {
  const { todosIsLoading } = useSelector(state => state.todos);
  const { theme, userId } = useSelector(state => state.app);
  const [loading, setLoading] = useState(!todosIsLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/");
      return;
    }

    dispatch(fetchTodos());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (loading === todosIsLoading) {
        return;
      }

      setLoading(todosIsLoading);
    }, +process.env.REACT_APP_LOADER_TIMEOUT);
  }, [todosIsLoading]);

  return (
    <div className={`content ${theme}`}>
      {todosIsLoading || loading ? (
        <Loader opacity={Number(!(todosIsLoading ^ loading))} />
      ) : (
        <>
          <Header />
          {children}
        </>
      )}
    </div>
  );
}

export default Layout;
