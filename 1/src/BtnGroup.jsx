import cn from 'classnames';
import React, { useState } from 'react';

const BtnGroup = () => {
  // BEGIN (write your solution here)
  const [activeButton, setActiveButton] = useState(null);

  const handleLeftClick = () => setActiveButton('left');
  const handleRightClick = () => setActiveButton('right');

  return (
    <div className="btn-group" role="group">
      <button
        type="button"
        className={cn('btn', 'btn-secondary', 'left', { active: activeButton === 'left' })}
        onClick={handleLeftClick}
      >
        Left
      </button>
      <button
        type="button"
        className={cn('btn', 'btn-secondary', 'right', { active: activeButton === 'right' })}
        onClick={handleRightClick}
      >
        Right
      </button>
    </div>
  );
  // END
};

export default BtnGroup;