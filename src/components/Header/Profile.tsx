import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Luiz Gonçalves</Text>
        <Text color="gray.300" fontSize="small">
          luizhbgoncalves@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Luiz Gonçalves" src="https://github.com/luiz21goncalves.png"/>
    </Flex>
  )
}
