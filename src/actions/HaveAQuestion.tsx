import React from 'react';
import { Text, Reply } from '@botonic/react';

const HaveAQuestion = () => (
  <>
    <Text>
      Nice, what question do you have?
      <Reply payload="order">See the food menu</Reply>
      <Reply payload="contactDelivery">Where is my order?</Reply>
      <Reply payload="contactDelivery">Track my order</Reply>
      <Reply payload="contactManager">I want to contact the delivery boy</Reply>
      <Reply payload="contactManager">I want to contact the manager</Reply>
      <Reply payload="contactDelivery">I have a complaint</Reply>
    </Text>
  </>
)

export default HaveAQuestion;