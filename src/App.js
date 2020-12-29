import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './components/Message/Message';
import db from './firebase';

const App = () => {
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([
    { username: username, message: input },
  ]);

  useEffect(() => {
    db.collection('messages').onSnapshot((snapshot) => {
      //Firebase data
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your name :'));
  }, []);

  // console.log(input);
  // console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault(); //prevents the page from refreshing
    //when you press send button
    setMessages([...messages, { username: username, message: input }]);
    setInput('');
  };

  return (
    <div className='App'>
      <h1>Messenger clone</h1>
      <form>
        <FormControl>
          <InputLabel>Type your message</InputLabel>
          <Input
            value={input}
            placeholder={'Type your message'}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            variant='contained'
            color='primary'
            type='submit'
            onClick={sendMessage}
            disabled={!input}
          >
            Send
          </Button>
        </FormControl>
      </form>
      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
};

export default App;
