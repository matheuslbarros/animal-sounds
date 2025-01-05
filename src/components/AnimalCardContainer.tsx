import React from 'react';

import { Animal } from '../app/types/Animal';
import AnimalCard from './AnimalCard';
import styles from './AnimalCardContainer.module.css';

interface AnimalCardContainerProps {
  animals: Animal[];
}

const AnimalCardContainer: React.FC<AnimalCardContainerProps> = ({ animals }) => {
  return (
    <div className={styles.animalCardContainer}>
      {animals.map((animal) => (
        <AnimalCard key={animal.name} animal={animal} />
      ))}
    </div>
  );
};

export default AnimalCardContainer;