import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [response, setResponse] = useState([]);
  
  useEffect( () => {
    (async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character/');
      const responseJSON = await response.json();
      setResponse(responseJSON.results);
    })();
  }, []);

  return (
    <div className="grid">
      { response.map((currentChar) => <Card data={currentChar} key={Math.random()} />) }
    </div>
  );  
}

export default App;
