import { Component } from 'react';
import './AllBox.scss';

export default class AllBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allchecked: false,
      checked0: false,
      checked1: false,
      checked2: false,
      checked3: false,
    };
  }
  handleAllchecked = () => {
    const { allchecked } = this.state;
    this.setState({
      allchecked: !allchecked,
    });
  };

  handleCheckElement = index => {
    this.setState(
      {
        [`checked${index}`]: !this.state[`checked${index}`],
      },
      () => {
        this.setState({
          allchecked:
            this.state.checked0 &&
            this.state.checked1 &&
            this.state.checked2 &&
            this.state.checked3,
        });
      }
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.allchecked !== prevState.allchecked) {
      if (this.state.allchecked) {
        // console.log('pass');
        this.setState({
          checked0: true,
          checked1: true,
          checked2: true,
          checked3: true,
        });
      } else {
        this.setState({
          checked0: false,
          checked1: false,
          checked2: false,
          checked3: false,
        });
      }
    }
  }

  render() {
    return (
      <div className="allBox">
        <div className="allCheck">
          <div className="allround">
            <input
              type="checkbox"
              onClick={this.handleAllchecked}
              checked={this.state.allchecked}
            />
            <h1 className="textArea">전체 동의</h1>
          </div>
        </div>
        {CHECKBOX.map((info, index) => {
          return (
            <div className="signUpCheck" key={index}>
              <div className="round">
                <input
                  type="checkbox"
                  checked={this.state[`checked${index}`]}
                  onClick={() => this.handleCheckElement(index)}
                  value="cheked"
                />
                <h1 className="signUpTextArea">{info.text}</h1>
                {info.id === 4 && (
                  <h1 className="signUpTextGray">{info.text2}</h1>
                )}
                <span className="agreeText">{info.agree}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const CHECKBOX = [
  {
    id: 1,
    text: '이용약관 동의',
    agree: '(필수)',
    checked0: false,
  },
  {
    id: 2,
    text: '만 14세 이상 확인',
    agree: '(필수)',
    checked1: false,
  },
  {
    id: 3,
    text: '개인정보 수집 및 이용동의',
    agree: '(필수)',
    checked2: false,
  },
  {
    id: 4,
    text2: '이메일 뉴스레터 수신 동의',
    agree: '(선택)',
    checked3: false,
  },
];
