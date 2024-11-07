import React, { useState } from "react";
import { AtSignIcon, CalendarIcon, EditIcon, InfoOutlineIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, List, ListIcon, ListItem, Tooltip, IconButton, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isSidebarVisible, setSidebarVisible] = useState(true); // Sidebar visibility state

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <Box>
      {/* Hamburger Menu (on top) */}
      <IconButton
        icon={isSidebarVisible ? <CloseIcon /> : <HamburgerIcon />}
        aria-label="Toggle Sidebar"
        onClick={toggleSidebar}
        colorScheme="teal"
        variant="outline"
        m={2}
      />

      {/* Show sidebar when visible */}
      {isSidebarVisible ? (
        <List color="black" fontSize="1.5em" fontWeight="bold" spacing={4}>
          <ListItem>
            <Tooltip label="Go to Dashboard" aria-label="Dashboard tooltip" placement="right">
              <NavLink 
                to="/" 
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5em 1em',
                  borderRadius: '8px', // Smooth corners
                  background: isActive ? 'white' : 'transparent', // White background when active
                  color: isActive ? 'black' : 'white', // Change text color when active
                  textDecoration: 'none', // Remove underline from the link
                  boxShadow: isActive ? '0 2px 4px rgba(0, 0, 0, 0.2)' : 'none', // Optional shadow effect
                })}
              >
                <ListIcon as={CalendarIcon} color="white.600" />
                Dashboard
              </NavLink>
            </Tooltip>
          </ListItem>

          <ListItem>
            <Tooltip label="Create or Edit Menu" aria-label="Menu tooltip" placement="right">
              <NavLink 
                to="/create" 
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5em 1em',
                  borderRadius: '8px',
                  background: isActive ? 'white' : 'transparent',
                  color: isActive ? 'black' : 'white',
                  textDecoration: 'none',
                  boxShadow: isActive ? '0 2px 4px rgba(0, 0, 0, 0.2)' : 'none',
                })}
              >
                <ListIcon as={EditIcon} color="white.600" />
                Menu
              </NavLink>
            </Tooltip>
          </ListItem>

          <ListItem>
            <Tooltip label="View or Edit Profile" aria-label="Profile tooltip" placement="right">
              <NavLink 
                to="/profile" 
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5em 1em',
                  borderRadius: '8px',
                  background: isActive ? 'white' : 'transparent',
                  color: isActive ? 'black' : 'white',
                  textDecoration: 'none',
                  boxShadow: isActive ? '0 2px 4px rgba(0, 0, 0, 0.2)' : 'none',
                })}
              >
                <ListIcon as={AtSignIcon} color="white.600" />
                Profile
              </NavLink>
            </Tooltip>
          </ListItem>

          <ListItem>
            <Tooltip label="Additional Information" aria-label="Info tooltip" placement="right">
              <NavLink 
                to="/info" 
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5em 1em',
                  borderRadius: '8px',
                  background: isActive ? 'white' : 'transparent',
                  color: isActive ? 'black' : 'white',
                  textDecoration: 'none',
                  boxShadow: isActive ? '0 2px 4px rgba(0, 0, 0, 0.2)' : 'none',
                })}
              >
                <ListIcon as={InfoOutlineIcon} color="white.600" />
                Info
              </NavLink>
            </Tooltip>
          </ListItem>
        </List>
      ) : (
        // Restaurant-specific content when sidebar is hidden
        <VStack spacing={4} p={4} textAlign="center">
          <Heading as="h3" size="lg" color="teal.500">
            Welcome to Our Restaurant!
          </Heading>
          <Text fontSize="md" color="gray.600">
            Explore our menu, reserve a table, and enjoy your dining experience.
          </Text>
          <Button colorScheme="blackAlpha" size="sm" variant="solid">
            Reserve a Table
          </Button>
          <Button colorScheme="teal" size="sm" variant="outline">
            View Menu
          </Button>
        </VStack>
      )}
    </Box>
  );
}
