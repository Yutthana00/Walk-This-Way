import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const AboutUsBox = ({ children }) => {
  return <Box>{children}</Box>;
};

const AboutUsAvatar = ({
  src,
  name,
  title,
}

) => {

  return (
    <Flex align={'center'} direction={'column'}>
      <Avatar size={'2xl'} src={src} alt={name} mb={5} />
      <Stack spacing={0} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const AboutUs = () => {

  return (
    <>
        <Box bg={useColorModeValue('gray.100', 'gray.700')}>
            <Container maxW={'md'} py={16} as={Stack} spacing={12}>
            <Stack spacing={10} align={'center'}>
                <Heading>Meet Our Team!</Heading>
                <Text>-  Who are we and why we built this - </Text>
            </Stack>
            
            <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: 10, md: 4, lg: 10 }}>
                
                <AboutUsBox>
                <AboutUsAvatar
                    src={
                    ''
                    }
                    name={'Yutthana T'}
                    title={'Founder & CEO'}
                />
                </AboutUsBox>
                <AboutUsBox>
                

                <AboutUsAvatar
                    src={
                    ''
                    }
                    name={'Yasmin A'}
                    title={'Founder & CEO'}
                />

                </AboutUsBox>
                <AboutUsBox>
                
                <AboutUsAvatar
                    src={
                    ''
                    }
                    name={'Emily'}
                    title={'Founder & CEO'}
                />
                </AboutUsBox>
            </Stack>
        </Container>
        </Box>
    </>
  );
};

export default AboutUs;