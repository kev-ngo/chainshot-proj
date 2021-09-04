import { Flex, Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      align='center'
      justify='flex-end'
      padding='1rem'
      borderBottom='1px solid grey'
    >
      <Flex mr={10} align='center'>
        <Button mr={7} onClick={toggleColorMode}>
          <MoonIcon />
        </Button>
        <Button>Connect Wallet</Button>
      </Flex>
    </Flex>
  );
}
