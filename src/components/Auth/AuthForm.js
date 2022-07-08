import { useRef, useState } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const sumbmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
  };

  return (
    <form onSubmit={sumbmitHandler}>
      <section className={classes.auth}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            ref={emailInputRef}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            ref={passwordInputRef}
          ></input>
        </div>
        <div className={classes.actions}>
          <button>Sign In</button>
        </div>
      </section>
    </form>
  );
};

export default AuthForm;
