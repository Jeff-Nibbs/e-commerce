import React from "react";
import "./signIn.css";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";

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
    this.signUpFormData = [
      { label: "Your E-Mail Address*", name: "email", type: "email" },
      {
        label: "Create Password*",
        name: "password",
        type: "password",
        eye: true,
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
    this.signInFormData = [
      { label: "Your E-Mail Address*", name: "email", type: "email" },
      { label: "Your Password", name: "password", type: "password", eye: true },
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
          />
          <label htmlFor={items.name}>{items.label}</label>
        </div>
      );
    });

  createSignInForm = () =>
    this.signInFormData.map((item) => {
      return (
        <label for={item.name}>
          <input
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
          {item.label} <br />
        </label>
      );
    });

  createSignUpForm = () =>
    this.signUpFormData.map((item) => {
      return (
        <label for={item.name}>
          <input
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
          {item.label}
          <br />
        </label>
      );
    });

  render() {
    return (
      <div>
        {this.makeToggleButtons()}
        {this.state.createAccount ? this.createSignUpForm() : null}
        {this.state.signIn ? this.createSignInForm() : null}
        <div className="btn-wrapper">
          <input type="submit" value="Save" />
        </div>
      </div>
    );
  }
}

export default SignIn;
