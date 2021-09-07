import { Box, Stack, Text } from '@chakra-ui/react';

import { PaginationItem } from './PaginationItem';

type PaginationProps = {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentePage?: number;
  onPageChange: (page: number) => void;
};

const siblingsCount = 1;

function genaragePagesArray(from: number, to: number): number[] {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentePage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages =
    currentePage > 1
      ? genaragePagesArray(currentePage - siblingsCount - 1, currentePage - 1)
      : [];

  const nextPages =
    currentePage < lastPage
      ? genaragePagesArray(
          currentePage,
          Math.min(currentePage + siblingsCount, lastPage),
        )
      : [];

  function generageSiblingsPaginationItems(pagesArray: number[]) {
    return pagesArray.map((page) => (
      <PaginationItem onPageChange={onPageChange} key={page} number={page} />
    ));
  }

  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      spacing="6"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>40</strong>
      </Box>

      <Stack direction="row" spacing="2">
        {currentePage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentePage > 2 + siblingsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          generageSiblingsPaginationItems(previousPages)}

        <PaginationItem
          onPageChange={onPageChange}
          isCurrent
          number={currentePage}
        />

        {nextPages.length > 0 && generageSiblingsPaginationItems(nextPages)}

        {currentePage + siblingsCount < lastPage && (
          <>
            {currentePage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
