import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "redux/slices/appSlice";

function Theme() {
  const { theme } = useSelector(state => state.app);
  const dispatch = useDispatch();

  return (
    <div className="theme-settings">
      <button
        onClick={() => {
          dispatch(changeTheme("dark"));
        }}
        className={`clear-button moon ${theme === "dark" ? "fill" : ""}`}
      >
        <i className="bi bi-moon" />
      </button>
      <button
        onClick={() => {
          dispatch(changeTheme("bright"));
        }}
        className={`clear-button sun ${theme === "bright" ? "fill" : ""}`}
      >
        <i className="bi bi-brightness-high" />
      </button>
    </div>
  );
}

export default Theme;
