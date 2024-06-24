import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="white" p={4}>
      <VStack spacing={4} textAlign="center">
        <Box>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" alt="Stripe Logo" boxSize="50px" />
        </Box>
        <Heading as="h1" size="lg" color="gray.800">
          Congratulations [Company Name]!
        </Heading>
        <Text fontSize="md" color="gray.600">
          You've just received your first payment through Stripe.
        </Text>
        <Text fontSize="md" color="gray.600">
          Your first payout for this payment of <strong>$[Amount]</strong> (minus any fees) should land in your bank account on <strong>[Date]</strong>.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;