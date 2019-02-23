import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, FormGroup, FormControl, Button } from "react-bootstrap";

const initialUser = {
  username: "",
  password: ""
};

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { ...initialUser }
    };
  }

  onChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    alert("Submitted Successfully!");
    this.setState({
      user: { ...initialUser }
    });
  };

  render() {
    return (
      <Row className="form-parent">
        <Col xs sm={{ span: 4, offset: 4 }} className="form-container">
          <Col xs>
            <h3 className="text-center heading">Sign in</h3>
            <p className="text-center text-block text-secondary">
              Login using your username and password.
            </p>
            <form onSubmit={this.onSubmit}>
              <FormGroup>
                <FormControl
                  placeholder="Username"
                  required
                  onChange={this.onChange}
                  value={this.state.user.username}
                  name="username"
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  placeholder="Password"
                  type="password"
                  required
                  onChange={this.onChange}
                  value={this.state.user.password}
                  name="password"
                />
              </FormGroup>
              <FormGroup>
                <Button variant="outline-success" block type="submit">
                  LOGIN
                </Button>
              </FormGroup>
            </form>
            <p className="text-center">
              <Link to="/forgotpassword" className="text-info">
                Forgot Password?
              </Link>
            </p>
            <p className="text-center">
              <Link to="/signup" className="text-info">
                Don't have account? Click here.
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    );
  }
}
