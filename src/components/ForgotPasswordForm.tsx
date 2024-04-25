import { FormField, Button, Form, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => (
  <Form>
    <Header as="h3">Forgot password</Header>

    <FormField
      required
    >
      <label>E-mail</label>
      <input type="email" placeholder="joe@email.com" />
    </FormField>
    <Button className="primary-button" type="submit">
      Send recover link
    </Button>
    <p>
       Go back to <Link to='/login'>Login</Link>
    </p>
  </Form>
);

export default ForgotPasswordForm;
