import React from 'react';
import { Text, Reply } from '@botonic/react';

const ContactDelivery = () => (
  <>
    <Text>
      I've informed our delivery boy, he'll call you back within 5 mins.
      If not, you can contact him here

      Here's his contact, name: "Manash Sarma" and phone: "+91 9876543210".
    </Text>
    <Text>
      Thanks, wish you a delicious day!!
      <Reply payload="mainMenu">Go to main menu</Reply>
      <Reply payload="foodMenu">See food menu</Reply>
    </Text>
  </>
)

export default ContactDelivery;