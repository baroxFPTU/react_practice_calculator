import React from 'react';
import PropTypes from 'prop-types';

CalcKeyboard.propTypes = {
  onClickButton: PropTypes.func
};

CalcKeyboard.defaultProps = {
  onClickButton: null
}

function CalcKeyboard(props) {
  const { onClickButton } = props;

  function handleClickButton (value) {
    if (!onClickButton) return;
    onClickButton(value);
  }
  
  return (
    <div className="calc-keyboard">
      <div>
        <button
          onClick={() => handleClickButton('reset')}
        >AC</button>
        <button
          onClick={() => handleClickButton('reverse')}
        >+/-</button>
        <button
          onClick={() => handleClickButton('percent')}
        >%</button>
        <button
          onClick={() => handleClickButton('/')}
        >÷</button>
      </div>
      <div>
        <button
          onClick={() => handleClickButton('7')}
        >7</button>
        <button
          onClick={() => handleClickButton('8')}
        >8</button>
        <button
          onClick={() => handleClickButton('9')}
        >9</button>
        <button
          onClick={() => handleClickButton('*')}
        >X</button>
      </div>
      <div>
        <button
          onClick={() => handleClickButton('4')}
        >4</button>
        <button
          onClick={() => handleClickButton('5')}
        >5</button>
        <button
          onClick={() => handleClickButton('6')}
        >6</button>
        <button
          onClick={() => handleClickButton('-')}
        >-</button>
      </div>
      <div>
        <button
          onClick={() => handleClickButton('1')}
        >1</button>
        <button
          onClick={() => handleClickButton('2')}
        >2</button>
        <button
          onClick={() => handleClickButton('3')}
        >3</button>
        <button
          onClick={() => handleClickButton('+')}
        >+</button>
      </div>
      <div>
        <button
          onClick={() => handleClickButton('0')}
        >0</button>
        <button
          onClick={() => handleClickButton('.')}
        >.</button>
        <button
          onClick={() => handleClickButton('equal')}
        >=</button>
      </div>
    </div>
  );
}

export default CalcKeyboard;