import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId } from "redux/slices/appSlice";

function Login() {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useCallback(() => {
    dispatch(setUserId(id));
    navigate("/home");
  }, [id]);

  return (
    <div className="center login w-25">
      <div className="form-group">
        <div className="mb-3">
          <label className="form-label">Indetification</label>
          <input
            type="number"
            placeholder="Enter your ID (Only digits)"
            className="form-control"
            onChange={e => setId(e.target.value)}
          />
        </div>
        <button onClick={auth} className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
