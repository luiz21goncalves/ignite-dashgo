import { Box, Button, HStack } from "@chakra-ui/react";

export function Pagination() {
  return (
    <HStack
      mt="8"
      spacing="6"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>40</strong>
      </Box>

      <HStack spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bg: "pink.500",
            cursor: "default"
          }}
        >
          1
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          w="4"
          bg="gray.700"
          _hover={{
            bg: "gray.300"
          }}
        >
          2
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          w="4"
          bg="gray.700"
          _hover={{
            bg: "gray.300"
          }}
        >
          3
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          w="4"
          bg="gray.700"
          _hover={{
            bg: "gray.300"
          }}
        >
          4
        </Button>
      </HStack>
    </HStack>
  )
}
