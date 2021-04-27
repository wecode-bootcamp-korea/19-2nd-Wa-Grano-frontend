import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import Social from './Social';
import AllBox from '../../SignUp/Components/AllBox';
import { API } from '../../../config';
import './Form.scss';

class Form extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
  };

  goToMain = e => {
    const { email, password } = this.state;
    e.preventDefault();
    fetch(`${API}/users/signin`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(data => data.json())
      .then(data => {
        if (data.access_token) {
          alert('로그인 성공');
          this.props.history.push('/');
          localStorage.setItem('token', data.TOKEN);
        } else {
          alert('로그인 실패');
        }
      });
  };

  goTosignIn = e => {
    const { email, password, passwordConfirm, name } = this.state;
    e.preventDefault();
    fetch(`${API}/users/signup`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
        name: name,
      }),
    })
      .then(data => data.json())
      .then(data => {
        if (data.access_token) {
          alert('회원가입 성공');
          this.props.history.push('/login');
          localStorage.setItem('token', data.TOKEN);
        } else {
          alert('회원가입 실패');
        }
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { type, text, data } = this.props;
    const { email, password, passwordConfirm, name } = this.state;

    return (
      <div>
        <div className="form">
          <div className="loginTitle">{text}</div>
          <div>
            {data.map((input, idx) => {
              return (
                <Input
                  key={idx}
                  type={input.type}
                  text={input.text}
                  handleInput={this.handleInput}
                />
              );
            })}
          </div>
          {type === 'signUp' && <AllBox />}
          <Button
            text={text}
            type={type}
            email={email}
            password={password}
            passwordConfirm={passwordConfirm}
            name={name}
            goToMain={this.goToMain}
            goTosignIn={this.goTosignIn}
            // onClick={[this.goToMain, this.goTosignIn]}
          />
          {type === 'signIn' && (
            <div className="logincheckBox">
              <input type="checkbox" value="1" />
              <span className="loginCheckBoxText">
                자동 로그인 · 비밀번호 찾기
              </span>{' '}
            </div>
          )}
          <Social text={text} />
          {type === 'signIn' && (
            <p className="signInText">
              아직 와그라노의 멤버가 아니세요?{' '}
              <button onClick={() => this.props.history.push('/sign-up')}>
                회원가입
              </button>
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Form);
