import { Container, Heading, UnorderedList, ListItem } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import projects from "../data/projects";

const Home = () => {
  return (
    <Container>
      <Heading as='h2' size='lg'>Projects</Heading>
      <UnorderedList>
        {
          projects.map(project => {
            return(
              <ListItem key={project.id}>
                <ChakraLink to={project.url} as={ReactRouterLink}>{project.title}</ChakraLink>
              </ListItem>
            )
          })
        }        
      </UnorderedList>
    </Container>
  )
}

export default Home