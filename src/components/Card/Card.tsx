import React from "react";
import { CardT } from "../../types";
import Button from "../Button";
export const Card = ({ state }: { state: CardT }) => {
  return (
    <article key={state.id} className="App-passage">
      <span className="content">{state.content}</span>
      <aside className="card-options">
        <Button emoji="📌" ariaLabel="Emoji of pin" />
        <Button emoji="✅" ariaLabel="Emoji of checkmark" />
        <Button emoji="🚧" ariaLabel="Emoji of construction sign" />
        <hr />
        <Button emoji="🚮" ariaLabel="Emoji of trash can" />
      </aside>
    </article>
  );
};
