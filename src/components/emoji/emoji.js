import React from "react";

const EmojiSpan = ({ ariaLabel, children, className }) => (
  <span role="img" aria-label={ariaLabel} className={className}>
    {children}
  </span>
);

export default EmojiSpan;
