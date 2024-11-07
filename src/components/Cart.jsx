import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Cart = () => {
  // Assuming you manage cart items via a context or state
  const cartItemsCount = 3; // Replace with actual count from state/context

  return (
    <Box position="relative">
      <Text fontSize="lg" color="blue.500">
        Cart ({cartItemsCount})
      </Text>
      {/* You can add a tooltip or dropdown here for detailed cart items */}
    </Box>
  );
};

export default Cart;
