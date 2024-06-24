import React from "react";
import { Flex } from "@chakra-ui/react";

interface RowProps {
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ children }) => {
  return (
    <Flex
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
    >
      {children}
    </Flex>
  );
};

export default Row;
