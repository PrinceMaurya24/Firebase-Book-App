import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/Firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const firebase = useFirebase();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (firebase.isLoggIn) {
      navigate("/");
    }
  }, [firebase, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login user with email:", email);
    await firebase.signInUser(email, password);
    console.log("Login registered successfully");
  };

  return (
    <div className="container mt-5 mb-5 p-5 border border-2 rounded shadow bg-light text-dark ">
      <div className="text-center mb-4">
        <h1>Login Page</h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <div className="text-center mt-4">
        <h1 className="mb-5">OR</h1>
        <Button
          onClick={async () => {
            try {
              await firebase.signinWithGoogle();
            } catch (error) {
              console.error("Google sign-in error:", error);
              alert("Google sign-in failed: " + error.message);
            }
          }}
          variant="danger">
          Signin With Google
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
