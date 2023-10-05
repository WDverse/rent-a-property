// Importing necessary styles and components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Define a functional component called SignUp
const Login = () => {
    return (
        <div style={{ backgroundColor: "white" }}>
            <h2>Login</h2>

            <Form style={{ width: "" }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Control type="email" placeholder="Your email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
                    <Form.Control  type ="password" placeholder="******" required />
                </Form.Group>
                <Button variant="dark" as="input" type="submit" value="Submit" />{" "}
            </Form>
        </div>
    );
};
// Export the SignUp component as the default export of this module
export default Login;
