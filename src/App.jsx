import React, {useState} from 'react';
import './App.css'
import FlashcardArray from './components/FlashcardArray.jsx'

const App = () => {
  const [numberOfCards, setNumberOfCards] = useState(0);

  return(
    <div className="App">
      <div className="background-container">
        <div className="content">
          <h1>Computer Algorithms Study Guide</h1>
          <h2>Test your knowledge of Computer Algorithms</h2>
          <h2>Number of Cards: {numberOfCards}</h2>
          <FlashcardArray setNumberOfCards={setNumberOfCards}/>
        </div>
      </div>
    </div>
  )
}

export default App;