import { Box } from "@chakra-ui/react";
import React from "react";
import SingleLoading from "./SingleLoading";
import { centeredFlex } from "@/src/styles/globalClasses";

const LoadingGrid = () => {
  return (
    <Box sx={{ ...centeredFlex }}>
      {[0, 1, 2].map((_char, index) => {
        return <SingleLoading key={index.toString()} />;
      })}
    </Box>
  );
};

export default LoadingGrid;
