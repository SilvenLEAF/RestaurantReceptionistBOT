import React from 'react';
import { Text, Reply } from '@botonic/react';

const PlaceAnOrder = () => (
  <>
    <Text>
      Nice, what do you want to eat today?
      <Reply payload="hamburger">Hamburger</Reply>
      <Reply payload="pizza">Pizza</Reply>
      <Reply payload="sandwich">Sandwich</Reply>
      <Reply payload="taco">Taco</Reply>
      <Reply payload="burrito">Burrito</Reply>
    </Text>
  </>
)

export default PlaceAnOrder;