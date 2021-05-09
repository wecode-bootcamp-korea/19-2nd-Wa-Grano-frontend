import { Component } from 'react';
import { withRouter } from 'react-router';
import Form from './Components/Form';
import Nav from '../../Component/Nav/Nav';
import Footer from '../../Component/Footer/Footer';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <>
        <Nav />
        <div className="login">
          <Form
            type="signIn"
            text="로그인"
            value={(this.state.email, this.state.password)}
            goToMain={this.goToMain}
            data={inputData}
          />
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(Login);

const inputData = [
  {
    type: 'email',
    text: '이메일 주소',
  },
  {
    type: 'password',
    text: '비밀번호',
  },
];
