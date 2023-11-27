
import {
    HStack,
    Heading,
    VStack,
    Text,
    Image,
    Card,
    CardBody,
    Stack,
  } from "@chakra-ui/react";

function ChoseUs() {
  return (
    <>   <VStack
    my="25"
    mx={{ base: "0", md: "5", lg: "10", xl: "20" }}
    p="3%"
    //  borderWidth="thin"
    // w="90%"
  >
    <Heading size="xl" textAlign="center" mb="10">
        Why Choose Us
      </Heading>

    <HStack
      columnGap={{ base: "100%", lg: "20", xl: "25" }}
      wrap="wrap"
      justifyContent="center"
      bgColor="transparent"
    >
      <Card maxW={{lg:"xs",xl:"sm"}}borderWidth="thin" borderColor="gray.200">
        <CardBody>
          <Image
            src="/Choose-1.png"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" color="#E2A0E3" textAlign="center">
              24/7 Chat Support
            </Heading>
            <Text textAlign="center">
              Got a query? Ping us at anytime and our superhuman chat
              executives will fly in to help community.
            </Text>
          </Stack>
        </CardBody>
      </Card>

      <Card maxW={{lg:"xs",xl:"sm"}} borderWidth="thin" borderColor="gray.200">
        <CardBody>
          <Image
            src="/Choose-2.png"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" color="#E2A0E3" textAlign="center">
              Community
            </Heading>
            <Text textAlign="center">
              Don't miss out on any updates and excitement. Join our
              worldwide community channels and check out our social media.
            </Text>
          </Stack>
        </CardBody>
      </Card>

      <Card maxW={{lg:"xs",xl:"sm"}} borderWidth="thin" borderColor="gray.200">
        <CardBody>
          <Image
            src="/Choose-3.png"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" color="#E2A0E3" textAlign="center">
              Help center
            </Heading>
            <Text textAlign="center">
              We have an extensive library of how to articles and queries.
              Get answers to  questions in a click.
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </HStack>
  </VStack>
</>
  )
}

export default ChoseUs