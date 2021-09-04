import { InputGroup, Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/react';

export default function InputFields() {
  return (
    <InputGroup mt={18} p={25}>
      <Input w='30%' p={2} mr={5} placeholder='Contract address' size='md' />
      <Input w='30%' p={2} mr={5} placeholder='Token ID' size='md' />
      <Button>Submit</Button>
    </InputGroup>
  );
}
