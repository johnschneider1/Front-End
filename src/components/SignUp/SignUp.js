import React, { useState } from "react";
import { postRegister } from "../../store/actions";
import { connect } from "react-redux";
import "./SignUp.css";

const SignUp = props => {
  const [form, setForm] = useState({ username: "admin", password: "password" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.postRegister(form);
  };

  return (
    <div className="login">
      <div className="formContainer">
        <h1 className="title">Sign Up</h1>
        <p>Already Have an Account Sign In</p>
        <form onSubmit={handleSubmit} className="loginForm">
          <p className="loginInputs">
            <label>username</label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              placeholder="username"
              value={form.username}
            />
          </p>
          <p className="loginInputs">
            <label>password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="password"
              value={form.password}
            />
          </p>
          {/* <p className="loginInputs">
            <label>password</label>

            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="email"
              value={form.password}
            />
          </p> */}

          {/* <p className="loginInputs">
            <label>password</label>

            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="email"
              value={form.password}
            />
          </p> */}

          {/* <p className="loginInputs">
            <label>password</label>

            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="email"
              value={form.password}
            />
          </p> */}
          <button className="loginSubmit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  { postRegister }
)(SignUp);
