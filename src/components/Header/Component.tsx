import React from "react";
import { getDate } from "../../utils/date";
import Button from "../Button";
import HeaderControls from "../HeaderControls";
export const Component = () => {
  return (
    <header className="App-header">
      <section>
        <span className="App-title-date">{`${getDate()}`}</span>
        <Button
          isHighlighted
          emoji="🔑"
          text="Login"
          ariaLabel="Emoji of key"
        />
      </section>
      <HeaderControls />
    </header>
  );
};
