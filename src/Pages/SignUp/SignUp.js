import { Component } from 'react';
import Form from '../Login/Components/Form';
import Nav from '../../Component/Nav/Nav';
import './SignUp.scss';

export default class Login extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="signUp">
          <Form type="signUp" text="회원가입" data={signUpData} />
        </div>
      </>
    );
  }
}

const signUpData = [
  {
    type: 'email',
    text: '이메일 주소',
  },
  {
    type: 'password',
    text: '비밀번호',
  },
  {
    type: 'passwordConfirm',
    text: '비밀번호 확인',
  },
  {
    type: 'name',
    text: '이름',
  },
];
