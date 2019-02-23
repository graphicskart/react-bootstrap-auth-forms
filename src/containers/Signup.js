import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, FormGroup, FormControl, Button } from "react-bootstrap";

const initialUser = {
  email: "",
  username: "",
  password: "",
  confirm_password: ""
};

export default class Signup extends Component {
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
            <h3 className="text-center heading">Sign up</h3>
            <p className="text-center text-block text-secondary">
              Use below form to create new account.
            </p>
            <form onSubmit={this.onSubmit}>
              <FormGroup>
                <FormControl
                  type="email"
                  placeholder="Email"
                  required
                  onChange={this.onChange}
                  value={this.state.user.email}
                  name="email"
                />
              </FormGroup>
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
                <FormControl
                  placeholder="Confirm Password"
                  type="password"
                  required
                  onChange={this.onChange}
                  value={this.state.user.confirm_password}
                  name="confirm_password"
                />
              </FormGroup>
              <FormGroup>
                <Button variant="outline-success" block type="submit">
                  SIGNUP
                </Button>
              </FormGroup>
            </form>
            <p className="text-center">
              <a
                href="javascript:void(0)"
                className="text-info"
                onClick={() => window.history.back()}
              >
                Already have account?
              </a>
            </p>
          </Col>
        </Col>
      </Row>
    );
  }
}
