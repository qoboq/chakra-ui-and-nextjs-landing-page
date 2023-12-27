import Head from "next/head"
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react"

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Box
        width="100%"
        maxWidth="100vw"
        height="100vh"
        overflowX="hidden"
        bgImage="url('/bg.jpg')" // Replace with your image path
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Box maxW={"3xl"} mx="auto" textAlign={"center"} pt="20vh">
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color={"white"} // Adjust color for visibility against background
          >
            Statybos sąmatų skaičiavimai <br />

          </Heading>

          <Text color={"gray.800"}
           fontWeight={400}
           fontSize={{ base: "2xl", sm: "2xl", md: "3xl" }}>
          Sąmatos verslui ir privačiam sektoriui
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            
          </Stack>
        </Box>
      </Box>
    </>
  )
}
