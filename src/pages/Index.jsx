import { Box, Flex, Image, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react';
import { FaCamera } from 'react-icons/fa';

const Index = () => {
  const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 });

  const images = [
    { src: 'https://source.unsplash.com/random/800x600?nature,water', alt: 'Nature Water' },
    { src: 'https://source.unsplash.com/random/800x600?nature,mountain', alt: 'Nature Mountain' },
    { src: 'https://source.unsplash.com/random/800x600?nature,forest', alt: 'Nature Forest' },
    { src: 'https://source.unsplash.com/random/800x600?nature,beach', alt: 'Nature Beach' },
    { src: 'https://source.unsplash.com/random/800x600?nature,desert', alt: 'Nature Desert' },
    { src: 'https://source.unsplash.com/random/800x600?nature,ice', alt: 'Nature Ice' },
    { src: 'https://source.unsplash.com/random/800x600?nature,river', alt: 'Nature River' },
    { src: 'https://source.unsplash.com/random/800x600?nature,lake', alt: 'Nature Lake' }
  ];

  return (
    <Box>
      <Flex as="header" width="full" padding={4} backgroundColor="teal.500" color="white" alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold" display="flex" alignItems="center">
          <FaCamera />
          <span style={{ marginLeft: '8px' }}>Nature Gallery</span>
        </Text>
      </Flex>
      <SimpleGrid columns={columns} spacing={4} p={4}>
        {images.map((image, index) => (
          <Image key={index} src={image.src} alt={image.alt} boxSize="100%" objectFit="cover" borderRadius="md" />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;