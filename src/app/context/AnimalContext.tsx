import React, { createContext, useState, useEffect } from "react";

interface Animal {
  name: string;
  image: string;
  audio: string;
}

export interface AnimalContextProps {
  animals: Animal[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const AnimalContext = createContext<AnimalContextProps>({
  animals: [],
  searchTerm: "",
  setSearchTerm: () => {},
});

export const AnimalProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [allAnimals, setAllAnimals] = useState<Animal[]>([]);
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchAllAnimals() {
      const res = await fetch("animals.json");
      const data = await res.json();
      setAllAnimals(data);
    }
    fetchAllAnimals();
  }, []);

  useEffect(() => {
    setAnimals(
      allAnimals.filter((animal) =>
        animal.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [allAnimals, searchTerm]);

  const value: AnimalContextProps = {
    animals,
    searchTerm,
    setSearchTerm,
  };

  return (
    <AnimalContext.Provider value={value}>{children}</AnimalContext.Provider>
  );
};

export default AnimalContext;
