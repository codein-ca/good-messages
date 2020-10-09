import React from "react";
export const Component = ({
  isHighlighted,
  emoji,
  text,
  ariaLabel,
  customClassname,
}: {
  ariaLabel: string;
  emoji?: string;
  text?: string;
  isHighlighted?: boolean;
  customClassname?: string;
}) => {
  return (
    <button
      className={`button ${
        isHighlighted ? "highlight" : ""
      } ${customClassname}`}
    >
      {emoji && (
        <span role="img" aria-label={ariaLabel} className="button--icon">
          {emoji}
        </span>
      )}
      {text && <span className="button--text">{text}</span>}
    </button>
  );
};
