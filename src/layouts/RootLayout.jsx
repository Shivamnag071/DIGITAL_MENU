import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Grid, GridItem } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

export default function RootLayout() {
  return (
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.200">
        <GridItem
          as="aside"
          colSpan={{ base: 6, lg: 2, xl: 1 }}
          bg="#C05621"
          minHeight={{ lg: '100vh' }}
          p={{ base: '20px', lg: '30px' }}
        >
          <Sidebar/>
        </GridItem>

        <GridItem
          as="main"
          colSpan={{ base: 6, lg: 4, xl: 5 }}
          bg="#FED7D7"
          p="00px"
          ml="00px"
        >
          <Navbar />
          <Outlet />
          <Footer/>
        </GridItem>
      </Grid>
    
  );
}
