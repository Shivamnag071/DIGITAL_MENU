import {AtSignIcon,  CheckCircleIcon,  EditIcon,  EmailIcon,  ExternalLinkIcon,  HamburgerIcon,  PhoneIcon,  SettingsIcon,  StarIcon, 
 TimeIcon 
} from "@chakra-ui/icons";
import { TabList, TabPanels, Tab, Tabs, TabPanel, List, ListItem, ListIcon, Table, Thead, Tbody, Tr, Th, Td, 
         Button } from "@chakra-ui/react";

import { useState } from 'react';

export default function Profile() {
  // State to manage whether to show more orders
  const [showMore, setShowMore] = useState(false);

  // Example order data (this could be dynamic and fetched from an API)
  const orders = [
    { id: 1, name: "Chicken Biryani", price: 250, date: "25th September 2024", status: "Delivered" },
    { id: 2, name: "Veg Pizza", price: 400, date: "10th September 2024", status: "Cancelled" },
    { id: 3, name: "Paneer Butter Masala", price: 350, date: "5th September 2024", status: "Delivered" },
    { id: 4, name: "Dosa", price: 150, date: "1st September 2024", status: "Delivered" },
    { id: 5, name: "Pasta", price: 300, date: "29th August 2024", status: "Delivered" },
    { id: 6, name: "Burger", price: 200, date: "25th August 2024", status: "Delivered" },
    { id: 7, name: "French Fries", price: 100, date: "20th August 2024", status: "Delivered" },
  ];

  // Control how many orders to show (default is 5)
  const visibleOrders = showMore ? orders : orders.slice(0, 5);

  return (
    <Tabs mt="40px" p="20px" colorScheme="green.200">
      <TabList>
        <Tab _selected={{ color: 'brown', bg: 'purple.200' }}> Account Info </Tab>
        <Tab _selected={{ color: 'brown', bg: 'purple.200' }}> Order History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          
          <List spacing={4}>
            <ListItem>
              <ListIcon as={StarIcon} color="yellow.400"/>
              Shyama Prasad
            </ListItem>
            <ListItem>
              <ListIcon as={PhoneIcon} color="blue.400"/>
              +91 9479663412
            </ListItem>
            <ListItem>
              <ListIcon as={EmailIcon} color="red.500"/> 
              Email: shivamnag20bcs0166@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={EditIcon} color="orange.500"/>
              <Button variant="link" colorScheme="teal">Edit</Button>
            </ListItem>
            <ListItem>
              <ListIcon as={SettingsIcon}/>
              <Button variant="link" colorScheme="teal">Settings</Button>
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="green.400" />
              Last Login: 30th September 2024
            </ListItem>
            <ListItem>
              <ListIcon as={AtSignIcon} color="purple.500" />
              Username: shyama_prasad
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="blue.400" />
              Membership Status: Active
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Notification Preferences: Enabled
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
          {/* Order History Section */}
          <Table variant="simple" size="md">
            <Thead>
              <Tr>
                <Th>Serial No.</Th>
                <Th>Date of Order</Th>
                <Th>Item Name</Th>
                <Th>Price (INR)</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {visibleOrders.map((order, index) => (
                <Tr key={order.id}>
                  <Td>{index + 1}</Td>
                  <Td>{order.date}</Td>
                  <Td>{order.name}</Td>
                  <Td>₹{order.price}</Td>
                  <Td>
                    <CheckCircleIcon color={order.status === "Delivered" ? "green.400" : "red.400"} /> {order.status}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          {/* Button to toggle between showing more or less orders */}
          {orders.length > 5 && (
            <Button mt={4} colorScheme="purple" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less" : "Load More Older Orders"}
            </Button>
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
