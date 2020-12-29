import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './components/Message/Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

const App = () => {
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([
    { username: username, message: input },
  ]);

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        //Firebase database setup for CRUD operations
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
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

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setMessages([...messages, { username: username, message: input }]);
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
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
};

export default App;
