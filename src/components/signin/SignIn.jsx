import React from "react";
import Card from "../UI/Card";
import "./signIn.css";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      signIn: false,
      createAccount: true,
      passwordState: "password",
    };

    this.toggleButtonsInfo = [
      { name: "toggle", label: "SIGN IN", id: "signIn" },
      { name: "toggle", label: "CREATE ACCOUNT", id: "createAccount" },
    ];
    this.signInFormData = [
      { label: "Your E-Mail Address*", name: "email", type: "email" },
      {
        label: "Your Password",
        name: "new-password",
        type: "password",
        eye: true,
      },
    ];
    this.signUpFormData = [
      { label: "Your E-Mail Address*", name: "email", type: "email" },
      {
        label: "Create Password*",
        name: "password",
        type: "password",
        eye: true,
        rules:
          "Password must be 8-20 characters, including: at least one capital letter, at least one small letter, one number and one special character - ! @ # $ % ^ & * () _ +",
      },
      {
        label: "Confirm Password*",
        name: "password",
        type: "password",
        eye: true,
      },
      {
        label: "First Name*",
        name: "name",
        type: "text",
      },
      {
        label: "Surname*",
        name: "surname",
        type: "text",
      },
      {
        label: "Postcode",
        name: "postcode",
        type: "number",
      },
    ];
  }

  handleToggle = (toggleId) => {
    toggleId === "signIn"
      ? this.setState({ signIn: true, createAccount: false })
      : this.setState({ signIn: false, createAccount: true });
  };

  handleEye = () => {
    this.state.passwordState === "password"
      ? this.setState({ passwordState: "text" })
      : this.setState({ passwordState: "password" });
  };

  makeToggleButtons = () =>
    this.toggleButtonsInfo.map((items) => {
      return (
        <div>
          <input
            onClick={() => this.handleToggle(items.id)}
            type="radio"
            name={items.name}
            id={items.id}
            className="sign-in__toggle-input"
          />
          <label className="sign-in__toggle-label" htmlFor={items.name}>
            {items.label}
          </label>
        </div>
      );
    });

  createForm = (data) =>
    data.map((item) => {
      return (
        <label className="sign-in__label" for={item.name}>
          <div className="sign-in__label-box">{item.label}</div>
          <div className="sign-in__input-box">
            <input
              className="sign-in__input"
              type={
                item.name !== "password" ? item.type : this.state.passwordState
              }
              name={item.name}
            />
            {item.eye && this.state.passwordState === "password" ? (
              <BsEyeSlash className="eye " onClick={this.handleEye} />
            ) : item.eye && this.state.passwordState === "text" ? (
              <BsEye className="eye " onClick={this.handleEye} />
            ) : null}
            <div className="sign-in__rules">
              {item.rules ? item.rules : null}
            </div>
          </div>
        </label>
      );
    });

  render() {
    return (
      <div className="sign-in__container">
        <Card className="sign-in__card">
          <div className="sign-in__toggle-btn">{this.makeToggleButtons()}</div>
          <form>
            <div className="sign-in__form">
              {this.state.createAccount
                ? this.createForm(this.signUpFormData)
                : this.createForm(this.signInFormData)}
            </div>
            <div className="btn-wrapper">
              <input
                className="sign-in__form-btn send"
                type="submit"
                value={this.state.createAccount ? "SAVE" : "SUBMIT"}
              />
            </div>
          </form>

          <div className="sign-in__or">or</div>
          <div className="sign-in__bottom">
            <button className="sign-in__form-btn facebook">
              <FaFacebookF />
              Sign Up With Facebook
            </button>
            <a href="#">Cancel</a>
            <div className="sign-in__bottom-links">
              <a href="#">Privacy Policy and Cookies</a> <div>|</div>
              <a href="#">Terms of Sale and Use</a>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default SignIn;
