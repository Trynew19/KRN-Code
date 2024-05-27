import { useState, useEffect } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import App from "../App";

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Clear the timer when the component is unmounted to avoid memory leaks
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      {isLoading && (
        <Box
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <Spinner size="xl" color="green.500" />
          <br />
          {/* <h1 style={{ color: "white" }}>Just wait baby</h1> */}
        </Box>
      )}
      {!isLoading && <App />}
    </>
  );
};

export default LoadingPage;
