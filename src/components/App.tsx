import React from 'react';
import './App.css';

function App() {
  const username = '';
  const date = new Date(Date.now());

  return (
    <>
      <header className="App-header">
        <h1 className="App-title">Welcome{username ? ` ${username}` : null}!</h1>
      </header>
      <main className="App-main">
        <input type="text" className="App-input"/>
      </main>
      <footer className="App-footer">
        <p className="App-paragraph">This app was created on {`${date.toDateString()}`}</p>
      </footer>
    </>
  );
}

export default App;
