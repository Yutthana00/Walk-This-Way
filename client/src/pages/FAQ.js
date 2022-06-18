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

const AboutUs = ({ children }) => {
    return <Box>{children}</Box>;
  };
  
const AboutUsBox = ({ children }) => {
  return <Box>{children}</Box>;
};
const AboutUsContent = ({ children }) => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        p={8}
        rounded={'xl'}
        align={'center'}
        pos={'relative'}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: 'solid transparent',
          borderLeftWidth: 16,
          borderRight: 'solid transparent',
          borderRightWidth: 16,
          borderTop: 'solid',
          borderTopWidth: 16,
          borderTopColor: useColorModeValue('white', 'gray.800'),
          pos: 'absolute',
          bottom: '-16px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
        {children}
      </Stack>
    );
  };

const AboutUsText = ({ children }) => {
return (
    <Text
    textAlign={'center'}
    color={useColorModeValue('gray.600', 'gray.400')}
    fontSize={'lg'}>
    {children}
    </Text>
);
};

const AboutUsHeading = ({ children }) => {
    return (
      <Heading as={'h3'} fontSize={'xl'}>
        {children}
      </Heading>
    );
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

const FAQ = () => {
    return (

<Box bg={useColorModeValue('gray.100', 'gray.700')}>
    <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
            <Heading padding={'20px'}>Frequently Asked Questions</Heading>
            <Text></Text>
        </Stack>
            <Stack direction={{ base: 'column', md: 'column' }}
            spacing={{ base: 10, md: 4, lg: 20 }}>
                <AboutUs>
                    <AboutUsContent>
                        <AboutUsHeading>Why Walk-this-Way was created? </AboutUsHeading>
                            <AboutUsText>
                            Dedicated place for users to post travel location with enough information for others to be able sort out and visit.
                            </AboutUsText>
                    </AboutUsContent>
                </AboutUs>

                <AboutUs>
                <AboutUsContent>
                    <AboutUsHeading>Do I need an account?</AboutUsHeading>

                        <AboutUsText>
                            Yes, an account is needed to view and post your own trips. Go on the main page and follow the steps.
                        </AboutUsText>
                </AboutUsContent>
                </AboutUs>

                <AboutUs>
                <AboutUsContent>
                    <AboutUsHeading>How to use Walk-This-Way?</AboutUsHeading>

                        <AboutUsText>
                            Simply create an account to view or post on our timeline, it is quick and simple to get started. 
                        </AboutUsText>
                </AboutUsContent>
                </AboutUs>

                <AboutUs>
                <AboutUsContent>
                    <AboutUsHeading>Having Trouble?</AboutUsHeading>
                        <AboutUsText>
                            Please report any issues on our website with contact information in the footer and we will see to the issues as soon as possible.
                        </AboutUsText>
                    </AboutUsContent>
                    </AboutUs>
        </Stack>
    </Container>
</Box>   

    );
};
export default FAQ;
 
