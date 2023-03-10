import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";

import logoImg from "../img/logo-big.png";

//ICON
import { FaUserAlt, FaWindowClose, FaRegEyeSlash } from "react-icons/fa";
import { FiKey } from "react-icons/fi";
import { ImEye } from "react-icons/im";

import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/login.css";
function Login() {
  const [password, setPassword] = useState("password");

  const handleShowPassword = () => {
    password === "password" ? setPassword("text") : setPassword("password");
  };

  return (
    <div className="register-wrapper">
      <div className="register_form">
        <div className="register_logo">
          <Image className="register_logo_img" src={logoImg} alt="logo" />
        </div>

        <FaWindowClose title="Close" className="btn-hideRegister" />

        <div className="register_form_layout">
          <div className="register-list-inputs">
            <InputGroup className="mb-3 register_group_input">
              <FaUserAlt className="register_icons" />

              <Form.Control
                className="register-input"
                type="email"
                placeholder="Email..."
                // aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3 register_group_input passwordRelative">
              <FiKey className="register_icons" />
              <Form.Control
                className="register-input"
                type={password}
                placeholder="Password..."
                // aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <ImEye
                className={
                  password === "text"
                    ? "btn-handlePassword d-block"
                    : "btn-handlePassword d-none"
                }
                onClick={handleShowPassword}
              />
              <FaRegEyeSlash
                className={
                  password === "password"
                    ? "btn-handlePassword d-block"
                    : "btn-handlePassword d-none"
                }
                onClick={handleShowPassword}
              />
            </InputGroup>
          </div>
          <div className="register-buttons">
            <Button className="register-btn" variant="success" title="Tr??? l???i">
              Login
            </Button>
            <Button
              className="register-btn"
              variant="secondary"
              type="reset"
              title="????ng k??"
            >
              Register
            </Button>
          </div>
          <div className="forgot_password">
            <Button
              className="forgot_password-btn"
              variant="secondary"
              type="reset"
              title="????ng k??"
            >
              Forgot Password
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
