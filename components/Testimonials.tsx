import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react"

import { ReactElement } from "react"
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          
          <Heading>Kontaktai</Heading>
          <Text color={"gray.800"} fontSize={"lg"}>
           Telefono numeris: +370 686 79140
          
          </Text>
          <Text color={"gray.800"} fontSize={"lg"}>
          Elektroninis paštas: statybossamatos1@gmail.com
          
          </Text>

          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            
            
          </Stack>
        </Stack>


      </SimpleGrid>
    </Container>
  )
}
