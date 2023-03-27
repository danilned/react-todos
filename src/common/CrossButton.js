import React from "react";

function CrossButton({ click, args }) {
  return (
    <div className="cross-button">
      <button onClick={() => click(...args)} className="btn btn-danger btn-sm">
        <span>×</span>
      </button>
    </div>
  );
}

export default CrossButton;
