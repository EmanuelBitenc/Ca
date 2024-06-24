import React from "react";
import { Button } from "@chakra-ui/react";

interface ButtonCalcProps {
  label: string;
  onClick?: () => void;
}

const ButtonCalc: React.FC<ButtonCalcProps> = ({ label, onClick }) => {
  return (
    <Button p="30px" fontSize={"2xl"} flex="1" m="5px" onClick={onClick}>
      {label}
    </Button>
  );
};

export default ButtonCalc;
