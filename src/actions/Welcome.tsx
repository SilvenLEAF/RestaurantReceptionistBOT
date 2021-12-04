import React from 'react';
import { Text, Reply } from '@botonic/react';


const Welcome = () => (
  <>
    <Text>
      Hello! Nice to meet you.
      How can I help you?
      <Reply payload="order">Place an order</Reply>
      <Reply payload="question">Have a question</Reply>
    </Text>
  </>
);

export default Welcome;