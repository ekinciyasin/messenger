import axios from "axios";
import React, { useState } from "react";
import Input from "../components/Input";
import { login } from "../api/apiCalls";

export default function Login() {
  const [userInput, setUserInput] = useState({
    username: null,
    password: null,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserInput((prevState) => {
      return { ...prevState, [name]: value };
    });
    console.log(userInput.username + " " + userInput.password);
  };
  const onClickLogin = async (event) => {
    event.preventDefault();
    const { username, password } = userInput;
    const body = {
      username,
      password,
    };
    console.log(body);
    await axios.get("/api/1.0/login", body);
  };
  return (
    <div className="container">
      <form>
        <Input
          name="username"
          label="Username"
          error={undefined}
          onChange={onChangeHandler}
        />
        <Input
          name="password"
          label="Password"
          error={undefined}
          type="password"
          onChange={onChangeHandler}
        />
        <div className="text-center form-group mt-3">
          <button className="btn btn-primary" onClick={onClickLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
