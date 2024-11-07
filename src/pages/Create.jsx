import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Checkbox,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  SimpleGrid,
  Card,
  Text,
  Tooltip,
  Image,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

// Sample menu items for Veg, Non-Veg, and Dessert
const vegMenu = [
  { id: 1, img: "/img/paneer.png", title: "Vegetable Curry", price: 200 },
  { id: 2, img: "/img/chef.png", title: "Paneer Tikka", price: 250 },
  { id: 3, img: "/img/chef.png", title: "Veg Biryani", price: 300 },
  { id: 4, img: "/img/veg.png", title: "Salad", price: 150 },
  { id: 5, img: "/img/veg.png", title: "Veg Pizza", price: 400 },
  { id: 6, img: "/img/veg.png", title: "Vegetable Stir Fry", price: 220 },
];

const nonVegMenu = [
  { id: 1, img: "/img/biryani.png", title: "Chicken Curry", price: 350 },
  { id: 2, img: "https://via.placeholder.com/150?text=Non-Veg+Item+2", title: "Fish Fry", price: 400 },
  { id: 3, img: "https://via.placeholder.com/150?text=Non-Veg+Item+3", title: "Mutton Rogan Josh", price: 500 },
  { id: 4, img: "https://via.placeholder.com/150?text=Non-Veg+Item+4", title: "Grilled Chicken", price: 450 },
  { id: 5, img: "https://via.placeholder.com/150?text=Non-Veg+Item+5", title: "Prawn Curry", price: 550 },
  { id: 6, img: "https://via.placeholder.com/150?text=Non-Veg+Item+6", title: "BBQ Ribs", price: 600 },
];

const dessertMenu = [
  { id: 1, img: "/img/shake.png", title: "Chocolate Cake", price: 250 },
  { id: 2, img: "https://via.placeholder.com/150?text=Dessert+Item+2", title: "Ice Cream", price: 150 },
  { id: 3, img: "https://via.placeholder.com/150?text=Dessert+Item+3", title: "Fruit Tart", price: 300 },
  { id: 4, img: "https://via.placeholder.com/150?text=Dessert+Item+4", title: "Cheesecake", price: 350 },
  { id: 5, img: "https://via.placeholder.com/150?text=Dessert+Item+5", title: "Panna Cotta", price: 300 },
  { id: 6, img: "https://via.placeholder.com/150?text=Dessert+Item+6", title: "Brownie", price: 200 },
];

export default function Create() {
  const [title, setTitle] = useState(""); // State for item title
  const [description, setDescription] = useState(""); // State for item description
  const [isPriority, setIsPriority] = useState(false); // State for priority checkbox
  const [showMore, setShowMore] = useState(false); // State to control showing more items

  const handleAddItem = (e) => {
    e.preventDefault();
    // Logic to handle adding items can be implemented here
    setTitle("");
    setDescription("");
    setIsPriority(false);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Box maxW="100%" p={5} mb={20}>
      <Tabs variant="enclosed" isLazy>
        <TabList>
          <Tab>Veg Menu</Tab>
          <Tab>Non-Veg Menu</Tab>
          <Tab>Dessert Menu</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box>
              <SimpleGrid columns={4} spacing={10}>
                {vegMenu.slice(0, showMore ? vegMenu.length : 6).map((item) => (
                  <Card key={item.id} borderTop="8px" borderColor="gray.300" bg="green.50" textAlign="center" width="200px" height="300px" display="flex" flexDirection="column" justifyContent="space-between">
                    <Tooltip label={`Price: ₹${item.price}`} bg="yellow.300" color="black" hasArrow>
                      <Image src={item.img} alt={item.title} borderRadius="md" boxSize="full" objectFit="cover" />
                    </Tooltip>
                    <Text fontWeight="bold">{item.title}</Text>
                    <Text mt={2}>₹{item.price}</Text> {/* Added price display */}
                    <Button size="sm" colorScheme="teal" mt="auto">Add to Cart</Button> {/* Positioned at the bottom */}
                  </Card>
                ))}
              </SimpleGrid>
              <Button mt={6} mb={4} onClick={handleShowMore}>
                {showMore ? "Show Less" : "Show More"}
              </Button>
            </Box>
          </TabPanel>

          <TabPanel>
            <Box>
              <SimpleGrid columns={4} spacing={10}>
                {nonVegMenu.slice(0, showMore ? nonVegMenu.length : 6).map((item) => (
                  <Card key={item.id} borderTop="8px" borderColor="gray.300" bg="green.50" textAlign="center" width="200px" height="300px" display="flex" flexDirection="column" justifyContent="space-between">
                    <Tooltip label={`Price: ₹${item.price}`} bg="yellow.300" color="black" hasArrow>
                      <Image src={item.img} alt={item.title} borderRadius="md" boxSize="full" objectFit="cover" />
                    </Tooltip>
                    <Text fontWeight="bold">{item.title}</Text>
                    <Text mt={2}>₹{item.price}</Text> {/* Added price display */}
                    <Button size="sm" colorScheme="teal" mt="auto">Add to Cart</Button> {/* Positioned at the bottom */}
                  </Card>
                ))}
              </SimpleGrid>
              <Button mt={6} mb={4} onClick={handleShowMore}>
                {showMore ? "Show Less" : "Show More"}
              </Button>
            </Box>
          </TabPanel>

          <TabPanel>
            <Box>
              <SimpleGrid columns={4} spacing={10}>
                {dessertMenu.slice(0, showMore ? dessertMenu.length : 6).map((item) => (
                  <Card key={item.id} borderTop="8px" borderColor="gray.300" bg="green.50" textAlign="center" width="200px" height="300px" display="flex" flexDirection="column" justifyContent="space-between">
                    <Tooltip label={`Price: ₹${item.price}`} bg="yellow.300" color="black" hasArrow>
                      <Image src={item.img} alt={item.title} borderRadius="md" boxSize="full" objectFit="cover" />
                    </Tooltip>
                    <Text fontWeight="bold">{item.title}</Text>
                    <Text mt={2}>₹{item.price}</Text> {/* Added price display */}
                    <Button size="sm" colorScheme="teal" mt="auto">Add to Cart</Button> {/* Positioned at the bottom */}
                  </Card>
                ))}
              </SimpleGrid>
              <Button mt={6} mb={4} onClick={handleShowMore}>
                {showMore ? "Show Less" : "Show More"}
              </Button>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* Form to add items */}
      <form onSubmit={handleAddItem}>
        <FormControl isRequired mb="40px">
          <FormLabel>Item Name:</FormLabel>
          <Input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormHelperText>Enter a descriptive item name.</FormHelperText>
        </FormControl>

        <FormControl mb="10">
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Enter a brief description..."
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="10px">
          <Checkbox
            name="isPriority"
            ml="0"
            size="lg"
            colorScheme="orange"
            isChecked={isPriority}
            onChange={(e) => setIsPriority(e.target.checked)}
          />
          <FormLabel mb="0px" ml="20px">This is a prioritized task.</FormLabel>
        </FormControl>

        <Button ml="50px" type="submit">Add</Button>
      </form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority'),
  };
  // Logic to add the task can be added here
  return redirect("/tasks");
};
