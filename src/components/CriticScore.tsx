import { Badge } from "@chakra-ui/react";
import { px } from "framer-motion";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = "";
  if (score > 75) {
    color = "green";
  } else if (score > 60) {
    color = "yellow";
  }
  return (
    <Badge fontSize="14px" padding={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
