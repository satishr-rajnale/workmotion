import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <EmployeeList m={10} />
    </ChakraProvider>
  );
}

export default App;
