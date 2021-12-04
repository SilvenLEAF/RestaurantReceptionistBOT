import React from 'react';
import { Text, Reply } from '@botonic/react';

const VegOrNonVeg = () => (
  <>
    <Text>
      Thanks for your order. Delivery boy will knock your door within 30mins.
      Here's his contact, name: "Manash Sarma" and phone: "+91 9876543210".
    </Text>
    <Text>
      For contacting our manager, 
      Here's his contact, name: "SilvenLEAF" and phone: "+91 0123456789".
      <Reply payload="contact">Contact Delivery Boy</Reply>
      <Reply payload="contact">Contact Manager</Reply>
    </Text>
  </>
)

export default VegOrNonVeg;