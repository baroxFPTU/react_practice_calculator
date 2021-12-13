import React, {memo} from 'react';

function CalcDisplay(props) {
  const {result} = props;

  return (
    <div className="calc-display">
      {result}
    </div>
  );
}

export default memo(CalcDisplay);