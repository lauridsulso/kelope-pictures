import React, { useState } from "react";
import Main from "./components/Main";
import Contact2 from "./components/Contact2";
// import Navigation from "./components/Navigation";
import News from "./components/News";
import Contact from "./components/Contact";

function App() {
  const [showNews, setShowNews] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // const handleContactClick = () => {
  //   setShowContact(true);
  // };

  // const handleNewsClick = () => {
  //   setShowNews(true);
  // };

  // const handleBackClick = () => {
  //   setShowNews(false);
  // };

  return (
    <div className="App">
      {/* <Navigation
        onContactClick={handleContactClick}
        onNewsClick={handleNewsClick}
        onBackClick={handleBackClick}
      /> */}

      {!showNews && <Main />}
      {!showNews && <Contact2 />}
      {showNews && <News />}
      {showContact && <Contact />}
    </div>
  );
}

export default App;
