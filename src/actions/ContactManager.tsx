import React from 'react';
import { Text, Reply } from '@botonic/react';

const ContactManager = () => (
  <>
    <Text>
      I've informed our manager, he'll call you back within 5 mins.
      If not, you can contact him here

      Here's his contact, name: "SilvenLEAF" and phone: "+91 0123456789".
    </Text>
    <Text>
      Thanks, wish you a delicious day!!
      <Reply payload="mainMenu">Go to main menu</Reply>
      <Reply payload="foodMenu">See food menu</Reply>
    </Text>
  </>
)

export default ContactManager;