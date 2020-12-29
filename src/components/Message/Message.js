import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

const Message = ({ username, message }) => {
  const isUser = username === message.username;
  return (
    <div className={`message ${isUser && 'message__user'}`}>
      <Card className={isUser ? 'message__userCard' : 'message__guestcard'}>
        <CardContent>
          <Typography
            variant='h5'
            color='white'
            component='h2'
            gutterBottom
          >
            {message.username}: {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
