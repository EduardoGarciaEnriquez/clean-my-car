import { useEffect, useState } from "react";
import { FormField, Button, Form, Header, Message } from "semantic-ui-react";
import { Link, Navigate } from "react-router-dom";

const emailInput = document.querySelector(
  'input[name="email"]'
) as HTMLInputElement;
const passwordInput = document.querySelector(
  'input[name="password"]'
) as HTMLInputElement;

const LoginForm = () => {
  const [error, seterror] = useState<boolean>(false);

  useEffect(() => {}, [error]);

  const onSubmit = () => {
    let email = emailInput?.value;
    let password = passwordInput?.value;

    //fake async api petition
    if (email && password) {
      //update loading state to true
      seterror(false);
      setTimeout(() => {
        if (email === "admin@mail.com" && password === "1234") {
          sessionStorage.setItem("isAuthenticated", "JWT");
          //navigation not working yet, should re render on succes, might add that to the useEffect
          //redux could be a good fix too. 
          <Navigate to="/" replace />;
        } else {
          seterror(true);
        }
        //update loading state to false
      }, 500);
    }
  };

  return (
    <Form onSubmit={onSubmit} error={error}>
      <Header as="h3">Log in</Header>
      <FormField required>
        <label>E-mail</label>
        <input name="email" type="email" placeholder="joe@email.com" />
      </FormField>
      <FormField required>
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
      </FormField>
      <p>
        <Link to="/forgot-password">Forgot password?</Link>
      </p>
      <Button
        //loading should be here
        className="primary-button"
        type="submit"
      >
        Login
      </Button>
      <Message
        error
        header="Wrong credentials"
        content="You can only login with a given e-mail address and the right password."
      />
    </Form>
  );
};

export default LoginForm;
