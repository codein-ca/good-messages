import React, { useEffect, useState } from "react";
import "./App.css";
import { getVerseOfTheDay } from "../api/youversion";
import { State } from "../types/state";
import CardsContainer from "./CardsContainer";
import { getDate } from "../utils/date";
import Header from "./Header";

function App() {
  const [apiResponse, setApiResponse] = useState("");
  const [state, setState] = useState<State>({
    cards: [],
  });
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
      <Header />
      <main className="App-main">
        <CardsContainer state={state} />
      </main>
    </div>
  );
}

export default App;
