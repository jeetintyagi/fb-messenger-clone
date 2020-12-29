import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    setMessages([...messages, input]);
    setInput('');
  };
  return (
    <div className='App'>
      <h1>Messenger clone</h1>
      <input
        value={input}
        placeholder={'Type your message'}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      {messages.map((message) => (
        <h1>{message}</h1>
      ))}
    </div>
  );
};

export default App;
