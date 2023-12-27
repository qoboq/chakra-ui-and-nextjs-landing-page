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
import { MdOutlineArchitecture } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa6";

import { ReactElement } from "react"

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
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Mūsų paslaugos
          </Text>
          <Heading>Reikalinga sąmata už priimtina kaina ir greitai?</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
           Jeigu taip, siūlome sąmatas tiek verslui tiek privačiam klientui. Sąmatos banko paskolai gauti, draudimui, sąmatos statybos kainai įvertinti ir kita.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature

  text={
    <div style={{ display: "flex", flexDirection: "column" }}>

      <Text color={"gray.800"}>
        <p>Privatiems asmenims:</p>
        <ul>
          <li style={{ color: "gray.800", fontWeight: "500" }}>Sąmatų skaičiavimas banko paskolai gauti.</li>
          <li style={{ color: "gray.800", fontWeight: "500" }}>Sąmatos skaičiavimas nutikus draudiminiam įvykiui.</li>
          <li style={{ color: "gray.800", fontWeight: "500" }}>Siūlomų darbų sąmatų kainų patikrinimas</li>
          <li style={{ color: "gray.800", fontWeight: "500" }}>Konsultavimas statybos kainos klausimais</li>
          <li style={{ color: "gray.800", fontWeight: "500" }}>Kainų užklausos medžiagų tiekėjams.</li>
        </ul>
      </Text>
    </div>
  }
/>


            <Feature

              text={
                <div style={{ display: "flex", flexDirection: "column" }}>
            
                  <Text color={"gray.800"}>
                    <p>Statybų įmonėms :</p>
                    <ul>
                      <li style={{ color: "gray.800", fontWeight: "500" }}>Visų statybos darbų Sąmatų skaičiavimas.</li>
                      <li style={{ color: "gray.800", fontWeight: "500" }}>Visa pagalba dalyvaujant Viešuosiuose pirkimuose nuo starto iki pateikimo.</li>
                      <li style={{ color: "gray.800", fontWeight: "500" }}>Sąmatų analizė, klaidų paieškos.</li>
                      <li style={{ color: "gray.800", fontWeight: "500" }}>Objektų aktavimas.</li>
                    </ul>
                  </Text>
                </div>
              }
            />
            <Feature
              text={
                <div style={{ display: "flex", flexDirection: "column" }}>
            
                  <Text color={"gray.800"}>
                    <p>Architektams projektuotojams:</p>
                    <ul>
                      <li style={{ color: "gray.800", fontWeight: "500" }}>Skaičiuojamosios kainos nustatymas. </li>
                    </ul>
                  </Text>
                </div>
              }
            />
          </Stack>
        </Stack>
        <Flex>
  <Image
    rounded={"md"}
    alt={"feature image"}
    src={"/hero.jpg"}  // Corrected path
    objectFit={"cover"}
  />
</Flex>

      </SimpleGrid>
    </Container>
  )
}
