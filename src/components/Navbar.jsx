import { StarIcon, SearchIcon } from '@chakra-ui/icons';
import { Flex, Text, Heading, Spacer, Button, HStack, Avatar, AvatarBadge, InputGroup, Input, useToast, Box, IconButton } from '@chakra-ui/react';
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // Import React Router's useNavigate
import Cart from './Cart';

export default function Navbar() {
  const toast = useToast();
  const navigate = useNavigate(); // Hook to navigate to different pages

  const showToast = () => {
    toast({
      title: 'Order Placed',
      description: 'Successfully',
      duration: 1500,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <StarIcon />
    });
  };

  const handleSearchClick = () => {
    navigate('/menu'); // Navigate to the menu page
  };

  return (
    <Flex 
      as="nav" 
      p="10px"
      mb="40px"
      bg="blue.200"   
      alignItems="center"
    >
      <Heading as="h1" size="lg">SWAGATAM</Heading>
      <Spacer/>

      <InputGroup maxW="300px" mr="10px">
        <Input placeholder="Search..." />
      </InputGroup>

      <IconButton
        icon={<SearchIcon />}
        aria-label="Search Menu"
        onClick={handleSearchClick} // Redirect to menu page when clicked
        mr="10px"
      />

      <HStack spacing="10px">
        <Button colorScheme="red" size="sm" onClick={showToast}>
          Order
        </Button>
        <FiShoppingCart size="24px" /> {/* Shopping Cart Icon */}
        <Avatar src="/img/cheff.png">
          <AvatarBadge width="1.3em" bg="orange.500">
            <text fontSize="xxs" color="blue">3</text>
          </AvatarBadge>
        </Avatar>
        <Text>UserId@gmail.com</Text>
      </HStack>
    </Flex>
  );
}
