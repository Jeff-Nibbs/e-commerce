import React from "react";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      signIn: false,
      createAccount: true,
    };

    this.toggleButtonsInfo = [
      { name: "toggle", label: "SIGN IN", id: "signIn" },
      { name: "toggle", label: "CREATE ACCOUNT", id: "createAccount" },
    ];
    this.signUpFormData = [
      { label: "Your E-Mail Address*", name: "email", type: "email" },
      {
        label: "Create Password*",
        name: "crPassword",
        type: "password",
      },
      {
        label: "Confirm Password*",
        name: "coPassword",
        type: "password",
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
      { label: "Your Password", name: "password", type: "password" },
    ];
  }

  handleToggle = (toggleId) => {
    toggleId === "signIn"
      ? this.setState({ signIn: true, createAccount: false })
      : this.setState({ signIn: false, createAccount: true });
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
          <input type={item.type} name={item.name} />
          {item.label} <br />
        </label>
      );
    });

  createSignUpForm = () =>
    this.signUpFormData.map((item) => {
      return (
        <label for={item.name}>
          <input type={item.type} name={item.name} />
          {item.label} <br />
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
