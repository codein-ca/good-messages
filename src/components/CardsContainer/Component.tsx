import React from "react";
import { State } from "../../types/state";
import Card from "../Card";
export const Component = ({ state }: { state: State }) => (
  <>
    {state.cards.map((e) => (
      <Card state={e} />
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
