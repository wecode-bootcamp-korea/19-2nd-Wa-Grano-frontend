import { Component } from 'react';
import '../../Login/Components/Button.scss';
export default class Button extends Component {
  render() {
    const emailCondition = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordCondition = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    const {
      type,
      text,
      email,
      password,
      passwordConfirm,
      name,
      goToMain,
      goTosignIn,
    } = this.props;
    const signInValidation =
      emailCondition.test(email) && passwordCondition.test(password);
    const signUpValidation =
      emailCondition.test(email) &&
      passwordCondition.test(password) &&
      password === passwordConfirm &&
      name.length > 2;
    const obj = {
      signInValidation: signInValidation,
      signUpValidation: signUpValidation,
    };

    return (
      <div>
        <button
          className={obj[`${type}Validation`] ? 'validCheck' : 'button'}
          onClick={type === 'signIn' ? goToMain : goTosignIn}
        >
          {text}
        </button>
      </div>
    );
  }
}
