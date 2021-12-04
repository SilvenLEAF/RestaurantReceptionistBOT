import React from 'react';
import { Text, Reply } from '@botonic/react';

const VegOrNonVeg = () => (
  <>
    <Text>
      Nice, do you want Veg or Non-veg?
      <Reply payload="veg">Veg</Reply>
      <Reply payload="nonveg">Non-Veg</Reply>
    </Text>
  </>
)

export default VegOrNonVeg;