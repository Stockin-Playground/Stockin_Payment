import React, { Component, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { getLogin } from "./loginAPI";

const Login = () => {
  const history = useHistory();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    getLogin(formDataObj)
      .then(() => {
        onDetailClient();
      })
      .catch((err) => {
        console.log("gagal loginn error");
      });
  };

  const onDetailClient = useCallback(
    () => history.push("/dashboard"),
    [history]
  );

  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="card text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img
                  src="/static/media/stockin_landscape.05de50b2.png"
                  alt="logo"
                />
              </div>
              <h4>Stockin Invoice Login</h4>
              <h6 className="font-weight-light">Sign in to continue.</h6>
              <Form onSubmit={onFormSubmit} className="pt-3">
                <Form.Group className="d-flex search-field">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    size="lg"
                    className="h-auto"
                    name="email"
                  />
                </Form.Group>
                <Form.Group className="d-flex search-field">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    size="lg"
                    className="h-auto"
                    name="password"
                  />
                </Form.Group>
                <div className="mt-3">
                  <Button
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    type="submit"
                  >
                    SIGN IN
                  </Button>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <a
                    href="getLogin"
                    onClick={(event) => event.stopPropagation()}
                    className="auth-link text-muted"
                  >
                    Lupa password ?
                  </a>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
