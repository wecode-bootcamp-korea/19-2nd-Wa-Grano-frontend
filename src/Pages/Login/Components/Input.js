import { Component } from 'react';
import './Input.scss';

export default class Input extends Component {
  render() {
    const { type, placeholder, handleInput } = this.props;
    return (
      <div className="input">
        <div className="inputWrap">
          <input
            name={type}
            type={type}
            placeholder={placeholder}
            onChange={handleInput}
          />
          {type === 'passwordConfirm' && (
            <div className="passwordInfo"> * 비밀번호 8글자 이상</div>
          )}
        </div>
      </div>
    );
  }
}
