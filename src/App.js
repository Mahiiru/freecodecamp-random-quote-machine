import './App.css';
import { QuoteMachine } from './components/QuoteMachine';
import { useState, useEffect} from 'react';

function App() {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    const options = {
      method: 'GET'
    };
    
    fetch('https://api.quotable.io/random?tags=famous-quotes', options)
      .then(response => response.json())
      .then(data => {
        setAuthor(data.author);
        setText(data.content);
      })
      .catch(err => console.error(err));
  }, []);

  const handleClick = () => {
    const options = {
      method: 'GET'
    };
    
    fetch('https://api.quotable.io/random?tags=famous-quotes', options)
      .then(response => response.json())
      .then(data => {
        setAuthor(data.author);
        setText(data.content);
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="App" id="quote-box">
      <QuoteMachine text={text} author={author}></QuoteMachine>
      <button type="button" className="btn btn-primary btn-lg" id="new-quote" onClick={handleClick}>New quote</button>
    </div>
  );
}

export default App;
