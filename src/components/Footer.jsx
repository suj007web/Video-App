import {
  Box,
  Stack,
  VStack,
  HStack,
  Heading,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.800'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textAlign={'center'}>Subscribe for updates</Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter email here ..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={0}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textAlign={'center'}>NewTube</Heading>
          <Text>All rights reserved @2024</Text>
        </VStack>

        <VStack w={'full'}>
            <Heading size={'md'}>
                Socail Media
            </Heading>
            <Button variant={'link' } colorScheme={'white'}>
                <a href="https://youtube.com" target='_blank'>Youtube</a>
            </Button>
            <Button variant={'link' } colorScheme={'white'}>
                <a href="https://instagram.com" target='_blank'>Instagram</a>
            </Button>
            <Button variant={'link' } colorScheme={'white'}>
                <a href="https://linkedin.com" target='_blank'>LinkedIn</a>
            </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
