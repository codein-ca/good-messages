import React from "react";
import { StateT } from "../../types";
import Card from "../Card";
export const CardsContainer = ({ state }: { state: StateT }) => (
  <>
    {state.cards.map((e) => (
      <Card key={e.id} state={e} />
    ))}

    {process.env.REACT_APP_DEVELOPMENT_MODE === "development" &&
      state.cards.length > 0 &&
      state.cards.length < 9 &&
      new Array(9 - state.cards.length)
        .fill({ id: Math.random() * 1000, content: "" })
        .map((e, i) => (
          <article key={i} className="App-passage">
            ...
          </article>
        ))}
  </>
);
