import useScreenshot from "../hooks/useScreenshots";
import { SimpleGrid, Image } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshot(gameId);
  console.log(data);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((result) => (
        <Image key={result.id} src={result.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
