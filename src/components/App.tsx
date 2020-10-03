import React, { useEffect, useState } from "react";
import "./App.css";
import { getVerseOfTheDay } from "../api/youversion";
import { State } from "../types/state";

function App() {
  const getDate = () => new Date(Date.now()).toDateString();
  const [date] = useState(getDate());
  const [apiResponse, setApiResponse] = useState("");
  const [state, setState] = useState<State>({
    cards: [],
  });
  // State changed? Console it
  useEffect(() => {
    if (process.env.REACT_APP_DEVELOPMENT_MODE === "development") {
      console.info(state);
    }
  }, [state]);
  // Fetch on component rendering
  useEffect(() => {
    getVerseOfTheDay().then((p) => setApiResponse(p));
  }, []);
  // API has some response?
  useEffect(() => {
    if (apiResponse !== "") {
      setState((state) => ({
        ...state,
        cards: [...state.cards, { id: getDate(), content: apiResponse }],
      }));
    }
  }, [apiResponse]);
  return (
    <div className="App-root">
      <header className="App-header">
        <section>
          <span className="App-title-date">{`${date}`}</span>
          <button className="header__control highlight">🔑Login here</button>
        </section>
        <section>
          <button className="header__control">➕</button>
          <button className="header__control">📆</button>
          <button className="header__control">⏰</button>
          <button className="header__control">🛒</button>
          <button className="header__control">📧</button>
          <button className="header__control">☔</button>
          <button className="header__control">🔢</button>
        </section>
      </header>
      <main className="App-main">
        {state.cards.map((e) => (
          <article key={e.id} className="App-passage">
            <span className="content">{e.content}</span>
            <aside className="card-options">
              <button className="card-options__control">📌</button>
              <button className="card-options__control">✅</button>
              <button className="card-options__control">⚙</button>
              {/* <button className="card-options__control">💾</button> */}
              <button className="card-options__control">🚮</button>
            </aside>
          </article>
        ))}

        {state.cards.length > 0 &&
          state.cards.length < 9 &&
          new Array(9 - state.cards.length)
            .fill({ id: Math.random() * 1000, content: "" })
            .map((e) => (
              <article key={e.id} className="App-passage">
                ...
              </article>
            ))}
      </main>
    </div>
  );
}

export default App;
