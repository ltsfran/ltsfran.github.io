import {
  Heading,
  Box,
  Text,
  Image,
  Flex
} from '@chakra-ui/react';

const Profile: React.FC = () => {
  const profileImage = `${process.env.PUBLIC_PATH}/profile.png`;

  return (
    <Flex
      justify="space-between"
      align="center"
      marginTop={{ base: '20px', sm: '50px' }}
      marginBottom={{ base: '20px', sm: '50px' }}
      direction={{ base: 'column', sm: 'row' }}>
      <Box
        maxW={{ base: 'max', sm: 'xs' }}
        order={{ base: 2, sm: 1}}>
        <Heading
          as="h1"
          fontSize="2.5rem"
          lineHeight="3rem">Hi, I'm Luis</Heading>
        <Text
          fontSize="1.125rem"
          marginTop="5px"
          marginBottom="10px">
          Frontend Developer
        </Text>
        <Text>Luis is a developer based in Peru with a passion for learning new technologies and putting them into practice.</Text>
      </Box>
      <Image
        boxSize="200px"
        objectFit="cover"
        borderRadius="full"
        order={{ base: 1, sm: 2}}
        marginBottom={{ base: '20px', sm: 0 }}
        src={profileImage}
        alt="Profile image" />
    </Flex>
  );
};

export default Profile;
