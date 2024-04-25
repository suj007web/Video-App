import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import imgV from '../assets/11.png';


const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '20%',
  transform: 'translate(-50%, -50%)',
  p: '4',
display : ["none", "flex"]
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container minH={'100vh'} maxW={'container.xl'} padding={'16'}>
        <Heading
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Explore
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            src={imgV}
            h={['40', '400']}
            filter={'hue-rotate(-100deg)'}
          ></Image>
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={["4", "16"]} textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            sequi mollitia deserunt reiciendis iste placeat laborum assumenda
            quia quas nobis, animi delectus non voluptatibus, consectetur beatae
            commodi voluptatum ab sit consequuntur veritatis. Nisi adipisci
            accusantium totam reiciendis nemo repudiandae, minima illo, eligendi
            officia, aut repellendus. Sed amet, rem veniam ex explicabo beatae
            quaerat cumque quasi ratione iure quo fugiat fugit consectetur quos
            in a! Accusamus, numquam! Facere praesentium, nisi laboriosam esse
            h={'full'} w={'full'} objectFit={['contain', 'cover']}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w={'full'} h={["50vh", "100vh"]}>
        <Image src={img1} h={'full'} w={'full'} objectFit={['contain', 'cover']}/>
        <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Gaming Heads
        </Heading>
      </Box>

      <Box w={'full'} h={["50vh", "100vh"]}>
        <Image src={img2} h={'full'} w={'full'} objectFit={['contain', 'cover']}/>
        <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Dive Into The Future
        </Heading>
      </Box>

      <Box w={'full'} h={["50vh", "100vh"]}>
        <Image src={img3} h={'full'} w={'full'} objectFit={['contain', 'cover']}/>
        <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Get Ready
        </Heading>
      </Box>

      <Box w={'full'} h={["50vh", "100vh"]}>
        <Image src={img4} h={'full'} w={'full'} objectFit={['contain', 'cover']}/>
        <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Green Green Everywhere
        </Heading>
      </Box>

      <Box w={'full'} h={["50vh", "100vh"]}>
        <Image src={img5} h={'full'} w={'full'} objectFit={['contain', 'cover']}/>
      </Box>
    </Carousel>
  );
};

export default Home;
