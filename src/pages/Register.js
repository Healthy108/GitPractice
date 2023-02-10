import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";

import logoImg from "../img/logo-big.png";

//ICON
import { FaUserAlt, FaWindowClose, FaRegEyeSlash } from "react-icons/fa";
import { FiKey } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { ImEye } from "react-icons/im";

import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/register.css";

function Register({ showRegister, handleShowRegister }) {
  const [password, setPassword] = useState("password");

  const handleShowPassword = () => {
    password === "password" ? setPassword("text") : setPassword("password");
  };

  return (
    <div
      className={
        showRegister === true
          ? "d-flex register-wrapper"
          : "d-none register-wrapper"
      }
    >
      <div className="register_form">
        <div className="register_logo">
          <Image className="register_logo_img" src={logoImg} alt="logo" />
        </div>

        <FaWindowClose
          title="Close"
          className="btn-hideRegister"
          onClick={handleShowRegister}
        />

        <div className="register_form_layout">
          <div className="register-list-inputs">
            <InputGroup className="mb-3 register_group_input">
              <FaUserAlt className="register_icons" />
              <Form.Control
                className="register-input"
                type="text"
                placeholder="Full name..."
                // aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3 register_group_input">
              <MdEmail className="register_icons" />
              <Form.Control
                className="register-input"
                type="email"
                placeholder="Email..."
                // aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3 register_group_input">
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

            <InputGroup className="mb-3 register_group_input">
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

            <InputGroup className="mb-3 register_group_input">
              <HiUserGroup className="register_icons" />
              <Form.Select className="register-option">
                <option>BGD</option>
                <option>BA</option>
                <option>Dev</option>
                <option>Tester</option>
              </Form.Select>
            </InputGroup>
          </div>
          <div className="register-buttons">
            <Button
              className="register-btn"
              variant="secondary"
              title="Trở lại"
              onClick={handleShowRegister}
            >
              Back
            </Button>
            <Button
              className="register-btn"
              variant="success"
              type="reset"
              title="Đăng ký"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
