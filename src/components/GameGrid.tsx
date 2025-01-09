import React, { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GramCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={2}
      spacing={6}
    >
      {isLoading &&
        skeletons.map((index) => (
          <GramCardContainer key={index}>
            <GameCardSkeleton />
          </GramCardContainer>
        ))}

      {data?.results.map((game) => (
        <GramCardContainer key={game.id}>
          <GameCard game={game}></GameCard>
        </GramCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
