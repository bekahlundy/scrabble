import React from 'react';

const DisplaySection = ({word, scoreWord}) => {
    if (word === '') {
      return(
        <div></div>
      )
    } else {
      return (
      <div>
        {scoreWord}
        yello
      </div>
    )
    }
}

export default DisplaySection;
