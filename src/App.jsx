import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider for theme support

// layouts and pages
import RootLayout from './layouts/RootLayout';
import Dashboard, { tasksLoader } from './pages/Dashboard';
import Create, { createAction } from './pages/Create';
import Profile from './pages/Profile';
import Info from './pages/Info'; // Ensure this import is present for the Info page

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={tasksLoader} />
      <Route path="create" element={<Create />} action={createAction} />
      <Route path="profile" element={<Profile />} />
      <Route path="info" element={<Info />} /> {/* Ensure path is lowercase 'info' */}
    </Route>
  )
);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
