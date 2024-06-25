import React from "react";
import { Button } from "@chakra-ui/react";

interface ButtonCalcProps {
  label: string;
  onClick?: () => void;
}

const ButtonCalc: React.FC<ButtonCalcProps> = ({ label, onClick }) => {
  return (
    <Button
      fontSize={{
        base: "2xl",
      }}
      flex="1"
      m={{
        base: "1px",
        sm: "5px",
      }}
      onClick={onClick}
      p={{
        base: "0px",
        sm: "30px",
      }}
    >
      {label}
    </Button>
  );
};

export default ButtonCalc;
