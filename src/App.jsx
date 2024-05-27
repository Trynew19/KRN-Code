import { Box, Flex } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="grey" color="whitesmoke" px={6} py={8}>
      <CodeEditor />
      <Flex align="center" justify="center" margin="20px" flexDirection="column">
      <h1>&copy; {2024} KRN CODE. All rights reserved.</h1>
      <br />
      <h1>Made with &#10084; Krishna, Rishabh, Rahul, Nikita</h1>
    </Flex>

    </Box>
  );
}

export default App;
