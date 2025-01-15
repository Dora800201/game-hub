import { create } from "zustand";
import SearchInput from "./components/SearchInput";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setPlatformId: (platformId: number) => void;
  setGenreId: (genreId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId: number) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genreId: genreId },
    })),
  setPlatformId: (platformId: number) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId: platformId },
    })),
  setSortOrder: (sortOrder: string) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder },
    })),
}));

export default useGameQueryStore;
