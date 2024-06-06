import React, { useState } from 'react';
import './tooltip.css';

const Tooltip = ({ children, tooltipText }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => {
    setVisible(true);
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  return (
    <div className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {visible && <div className="tooltip">{tooltipText}</div>}
    </div>
  );
};

export default Tooltip;
