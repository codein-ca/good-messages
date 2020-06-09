import React, { useEffect, useState } from 'react';
import './App.css';
import { getVerseOfTheDay } from './API_YOUVERSION';
// import { getImageResponse, ImageResponse } from './API_UNSPLASH';

function App() {
  const date = new Date(Date.now()).toDateString();
  const [passage, setPassage] = useState<string>('');
  // const [imageResponse, setImageResponse] = useState<ImageResponse>({
  //   user: { name: '', links: { html: '' } },
  //   urls: { regular: '', full: '', small: '' },
  // });
  useEffect(() => {
    getVerseOfTheDay().then((p) => setPassage(p));
    // getImageResponse().then((i) => setImageResponse(i));
  }, []);

  // const unsplashImage = {
  //   backgroundImage: 'url(' + imageResponse.urls.regular + ')',
  //   minHeight: '100vh',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  //   display: 'flex',
  //   flexDirection: 'column' as 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // };

  return (
    <div className="App-root">
      {/*<aside style={unsplashImage} />*/}
      <header className="App-header">
        <span className="App-title-date">{`${date}`}</span>
      </header>
      <main className="App-main">
        <h1 className="App-passage">{passage}</h1>
      </main>
      {/*<footer>*/}
      {/*  <h2 className="App-footer">*/}
      {/*    Photo by{' '}*/}
      {/*    <a className="App-author-link" href={imageResponse.user.links.html}>{imageResponse.user.name}</a>{' '}*/}
      {/*    from <a href="https://unsplash.com">Unsplash</a>*/}
      {/*  </h2>*/}
      {/*</footer>*/}
    </div>
  );
}

export default App;
