import { Flex } from "@chakra-ui/react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Flex
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bgGradient="radial( #051937, #0b2b56, #103e77, #14529a, #1667be)"
    >
      {children}
    </Flex>
  );
};

export default Container;
