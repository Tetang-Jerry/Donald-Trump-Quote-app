import { useState } from "react";
import "./App.css";
import QuoteButton from "./components/QuoteButton";
import Result from "./components/Result";
import Header from "./components/Header";
import MemeButton from "./components/MemeButton";

function App() {
  const [quote, setQuote] = useState({}); // Assuming quote is an object
  const [meme, setMeme] = useState('');
  const [isQuoteVisible, setIsQuoteVisible] = useState(true); // State to track visibility

  const handleQuote = (newQuote) => {
    setQuote(newQuote);
    setIsQuoteVisible(true); // Show quote when a new quote is fetched
  };

  const handleMeme = (newMeme) => {
    setMeme(newMeme);
    setIsQuoteVisible(false); // Hide quote when a new meme is fetched
  };

  return (
    <div className="App">
      <Header />
      <img
        src="/Assets/donald-trump-and-social-media-cartoon-vector-12467687.jpg"
        alt="donald"
        className="h-[300px] mx-auto my-10"
      />

      <div className="flex mx-auto justify-center gap-10">
        <QuoteButton setQuote={handleQuote} />
        <MemeButton setMeme={handleMeme} />
      </div>
      
      <Result quote={isQuoteVisible ? quote : {}} meme={isQuoteVisible ? '' : meme} />
    </div>
  );
}

export default App;
