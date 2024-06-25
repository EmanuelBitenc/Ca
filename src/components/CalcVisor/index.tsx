import React from "react";
import { Input } from "@chakra-ui/react";

interface CalcVisorProps {
  value: string;
}

const CalcVisor: React.FC<CalcVisorProps> = ({ value }) => {
  return (
    <Input
      w={{ base: "full" }}
      h="120px"
      fontSize="4xl"
      disabled
      _hover={{ cursor: "default" }}
      textAlign={"end"}
      value={value}
    />
  );
};

export default CalcVisor;
