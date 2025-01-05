"use client";
import { Suspense, useContext } from "react";
import ThemeContext, {
  ThemeContextProps,
  ThemeProvider,
} from "./context/ThemeContext";
import AnimalContext, {
  AnimalContextProps,
  AnimalProvider,
} from "./context/AnimalContext";
import AnimalCardContainer from "../components/AnimalCardContainer";
import SearchBar from "../components/SearchBar";

import "./styles.css";

function HomePage() {
  const { theme } = useContext(ThemeContext) as ThemeContextProps;
  const { animals, setSearchTerm } = useContext(
    AnimalContext
  ) as AnimalContextProps;

  return (
    <div className={theme}>
      <SearchBar onSearch={setSearchTerm} />
      <Suspense fallback={<p>Loading animals...</p>}>
        <AnimalCardContainer animals={animals} />
      </Suspense>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <AnimalProvider>
        <HomePage />
      </AnimalProvider>
    </ThemeProvider>
  );
}
