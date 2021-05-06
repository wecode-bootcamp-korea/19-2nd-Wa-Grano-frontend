import React, { Component } from 'react';

class CategoriList extends Component {
  render() {
    const { text, index, isClicked, handleCheck } = this.props;
    return (
      <ul className="categoriList">
        <input
          type="checkbox"
          checked={isClicked}
          onClick={() => handleCheck(index)}
        />
        <span className="categoriText">{text}</span>
        <span className="categoriIcon">⋁</span>
      </ul>
    );
  }
}

export default CategoriList;
