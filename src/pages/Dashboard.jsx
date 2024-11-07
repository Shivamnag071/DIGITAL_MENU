import { ViewIcon, UnlockIcon} from "@chakra-ui/icons";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData()
  return (

      <SimpleGrid  spacing={10} minChildWidth="300px">
        {tasks && tasks.map(task=>(
          <Card key={task.id} borderTop="8px" borderColor="grey.300" bg="green.50">
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img}/>
                <Box>
                  <Heading as="h3" size="sm">{task.title}</Heading>
                  <Text>by {task.author} </Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color="red.600">
            <Text> {task.description} </Text>

            </CardBody>
            <Divider borderColor="grey.200"/>
            <CardFooter>
             <HStack>
              <Button variant="ghost" leftIcon={<UnlockIcon/>}> Explore</Button>
              <Button variant="ghost" leftIcon={<ViewIcon/>}> More</Button>
             </HStack>

            </CardFooter>

          </Card>
        ))}
        
      </SimpleGrid>
   
  );
}

export const tasksLoader = async() =>{
  const  res = await fetch('http://localhost:3000/tasks')

  return res.json()
}
