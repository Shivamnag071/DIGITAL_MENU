import { Text, Box, Heading, Image, List, ListItem, ListIcon } from '@chakra-ui/react';
import React from 'react';
import { StarIcon, PhoneIcon, EmailIcon } from "@chakra-ui/icons";

export default function Info() {
  return (
    <Box p={8} maxW="1200px" mx="auto">
      {/* About Us */}
      <Heading as="h2" size="xl" mb={4}>
        About Us
      </Heading>
      <Text mb={6}>
        Welcome to [Restaurant Name], where food is our passion! Established in [Year], we have been serving the finest culinary delights to our valued guests. Our goal is to bring the freshest ingredients and authentic flavors to your table. Whether you’re dining in or ordering online, we ensure each meal is prepared with love and care.
      </Text>
      <Text mb={6}>
        <strong>Mission:</strong> To provide an exceptional dining experience with a blend of quality ingredients and outstanding service.
      </Text>
      <Text mb={6}>
        <strong>Vision:</strong> To be a community favorite, where good food brings people together.
      </Text>

      {/* Our Chefs */}
      <Heading as="h2" size="xl" mb={4}>
        Meet Our Chefs
      </Heading>
      <Text mb={6}>
        Our talented chefs come from various culinary backgrounds, bringing their expertise to every dish they prepare.
      </Text>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={StarIcon} color="yellow.400" />
          <strong>Chef Shyama Prasad:</strong> Specializes in traditional Indian cuisine with a modern twist.
        </ListItem>
        <ListItem>
          <ListIcon as={StarIcon} color="yellow.400" />
          <strong>Chef Lisa Patel:</strong> Expert in desserts and baking, known for her signature cheesecakes and pastries.
        </ListItem>
        <ListItem>
          <ListIcon as={StarIcon} color="yellow.400" />
          <strong>Chef John Richards:</strong> A grill master with a passion for seafood and BBQ delights.
        </ListItem>
      </List>

      {/* Menu Philosophy */}
      <Heading as="h2" size="xl" my={6}>
        Our Food Philosophy
      </Heading>
      <Text mb={6}>
        At [Restaurant Name], we believe in sourcing the freshest ingredients to ensure that every bite is filled with flavor and nourishment. We work closely with local farmers to bring organic and sustainably grown produce to your plate. Our dishes are crafted using traditional methods combined with innovative techniques to offer a unique blend of classic and modern flavors.
      </Text>
      <Text mb={6}>
        We also offer a wide range of vegetarian, vegan, and gluten-free options, ensuring there’s something for everyone.
      </Text>

      {/* Special Offers */}
      <Heading as="h2" size="xl" mb={4}>
        Special Offers
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={StarIcon} color="yellow.400" />
          <strong>Lunch Special:</strong> Enjoy 20% off on all lunch orders between 12 PM to 3 PM.
        </ListItem>
        <ListItem>
          <ListIcon as={StarIcon} color="yellow.400" />
          <strong>Happy Hour:</strong> Get 1+1 on all drinks from 5 PM to 7 PM every day.
        </ListItem>
        <ListItem>
          <ListIcon as={StarIcon} color="yellow.400" />
          <strong>Weekend Combo:</strong> Order any main dish and get a dessert of your choice free.
        </ListItem>
      </List>

      {/* Customer Reviews */}
      <Heading as="h2" size="xl" my={6}>
        Customer Reviews
      </Heading>
      <Text mb={4}>
        <em>"The best food I've ever tasted! The flavors are incredible, and the service is top-notch."</em> – Riya M.
      </Text>
      <Text mb={4}>
        <em>"Their desserts are heavenly! Chef Lisa’s brownies are a must-try."</em> – Arjun P.
      </Text>
      <Text mb={4}>
        <em>"The atmosphere is cozy, and the staff is super friendly. A perfect place for family dinners."</em> – Megha K.
      </Text>

      {/* Health and Safety */}
      <Heading as="h2" size="xl" mb={4}>
        Health and Safety
      </Heading>
      <Text mb={6}>
        At [Restaurant Name], we follow strict health and safety guidelines to ensure the well-being of our staff and guests. Our kitchen and dining areas are sanitized regularly, and we maintain social distancing protocols. All our chefs and staff are trained in proper hygiene practices, and we ensure that your food is prepared and delivered with utmost care.
      </Text>

      {/* Contact Information */}
      <Heading as="h2" size="xl" mb={4}>
        Contact Information
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={PhoneIcon} color="blue.400" />
          Phone: +91 9876543210
        </ListItem>
        <ListItem>
          <ListIcon as={EmailIcon} color="red.500" />
          Email: contact@restaurantname.com
        </ListItem>
        <ListItem>
          Address: 123 Food Street, Culinary Town, India
        </ListItem>
        <ListItem>
          Hours of Operation: Monday - Sunday: 11:00 AM - 11:00 PM
        </ListItem>
      </List>

      {/* Gallery (Optional, Add Images if Needed) */}
      <Heading as="h2" size="xl" my={6}>
        Our Gallery
      </Heading>
      <Box display="flex" gap={6}>
        <Image src="https://via.placeholder.com/200" alt="Gallery Image 1" />
        <Image src="https://via.placeholder.com/200" alt="Gallery Image 2" />
        <Image src="https://via.placeholder.com/200" alt="Gallery Image 3" />
        <Image src="https://via.placeholder.com/200" alt="Gallery Image 3" />
        <Image src="https://via.placeholder.com/200" alt="Gallery Image 3" />
      </Box>

      {/* FAQs */}
      <Heading as="h2" size="xl" my={6}>
        Frequently Asked Questions (FAQs)
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={StarIcon} color="yellow.400" />
          <strong>Do you offer home delivery?</strong> Yes, we do! You can place an order directly through our website or call us for deliveries.
        </ListItem>
        <ListItem>
          <ListIcon as={StarIcon} color="yellow.400" />
          <strong>Do you have vegan or gluten-free options?</strong> Yes, we have a variety of vegan and gluten-free dishes available on our menu.
        </ListItem>
        <ListItem>
          <ListIcon as={StarIcon} color="yellow.400" />
          <strong>Can I book a table in advance?</strong> Absolutely! You can reserve a table by calling us or through our website.
        </ListItem>
      </List>
    </Box>
  );
}
