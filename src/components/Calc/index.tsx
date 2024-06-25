import { Box, Flex, Link, Text } from "@chakra-ui/react";
import CalcVisor from "../CalcVisor";
import ButtonCalc from "../Button";
import { useState } from "react";
import Row from "../Row";

const Calc = () => {
  const [value, setValue] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [sinal, setSinal] = useState("");

  const handleAddNumber = (number: string) => {
    setValue((prev) => `${prev === "0" ? "" : prev}` + `${number}`);
  };

  const minus = () => {
    setFirstNumber(value);
    setValue("");
    setSinal("-");
  };
  const multi = () => {
    setFirstNumber(value);
    setValue("");
    setSinal("*");
  };
  const div = () => {
    setFirstNumber(value);
    setValue("");
    setSinal("/");
  };
  const add = () => {
    setFirstNumber(value);
    setValue("");
    setSinal("+");
  };

  const result = () => {
    switch (sinal) {
      case "-": {
        const response = Number(firstNumber) - Number(value);
        setValue(response.toString());
        setFirstNumber("0");
        break;
      }
      case "+": {
        const response = Number(firstNumber) + Number(value);
        setValue(response.toString());
        setFirstNumber("0");
        break;
      }
      case "/": {
        const response = Number(firstNumber) / Number(value);
        setValue(response.toString());
        setFirstNumber("0");
        break;
      }
      case "*": {
        const response = Number(firstNumber) * Number(value);
        setValue(response.toString());
        setFirstNumber("0");
        break;
      }
    }
  };

  const clearValue = () => {
    setValue("0");
    setFirstNumber("0");
    setSinal("");
  };

  return (
    <Flex flexDirection={"column"} gap={24}>
      <Text
        textAlign={"center"}
        fontSize={42}
        fontFamily={"monospace"}
        cursor={"default"}
        color={"white"}
      >
        Calc Project
      </Text>
      <Box
        m="20px"
        boxShadow="0px 0px 0px 20px #121233"
        bg="white"
        rounded="md"
      >
        <CalcVisor value={value} />

        <Box width="100%">
          <Row>
            <ButtonCalc label="*" onClick={multi} />
            <ButtonCalc label="/" onClick={div} />
            <ButtonCalc label="0" onClick={() => handleAddNumber("0")} />
            <ButtonCalc label="C" onClick={clearValue} />
          </Row>
          <Row>
            <ButtonCalc label="7" onClick={() => handleAddNumber("7")} />
            <ButtonCalc label="8" onClick={() => handleAddNumber("8")} />
            <ButtonCalc label="9" onClick={() => handleAddNumber("9")} />
            <ButtonCalc label="-" onClick={minus} />
          </Row>
          <Row>
            <ButtonCalc label="4" onClick={() => handleAddNumber("4")} />
            <ButtonCalc label="5" onClick={() => handleAddNumber("5")} />
            <ButtonCalc label="6" onClick={() => handleAddNumber("6")} />
            <ButtonCalc label="+" onClick={add} />
          </Row>
          <Row>
            <ButtonCalc label="1" onClick={() => handleAddNumber("1")} />
            <ButtonCalc label="2" onClick={() => handleAddNumber("2")} />
            <ButtonCalc label="3" onClick={() => handleAddNumber("3")} />
            <ButtonCalc label="=" onClick={result} />
          </Row>
          <Flex justifyContent="end" fontSize={10} mr={2} mt={5}>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/emanuelbitencourt/"
            >
              By bitenCorp
            </Link>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Calc;
