import React, { useEffect, useState } from "react";
import "./App.css";
import { getVerseOfTheDay } from "../api/youversion";
import { StateT } from "../types";
import CardsContainer from "./CardsContainer";
import { getDate } from "../utils/date";
import Header from "./Header";
import { initialState } from "../mock/state";

function App() {
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [state, setState] = useState<StateT>(initialState);
  // Fetch on component rendering
  useEffect(() => {
    getVerseOfTheDay().then((p) => setApiResponse(p));
  }, []);
  // API has some response?
  useEffect(() => {
    if (apiResponse) {
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
