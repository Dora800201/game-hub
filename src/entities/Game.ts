import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  description_raw: string;
  slug: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metacritic: number;
  rating_top: number;
}
