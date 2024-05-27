import { Box, Flex } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="grey" color="whitesmoke" px={6} py={8}>
      <CodeEditor />
      <Flex align="center" justify="center" margin="20px">
        <h1>Made with &#10084; Krishna,rishabh,rahul,nikita</h1>
      </Flex>
    </Box>
  );
}

export default App;
