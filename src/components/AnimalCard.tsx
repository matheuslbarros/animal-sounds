import Image from 'next/image';

import { Animal } from '../app/types/Animal';
import styles from "./AnimalCard.module.css";

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  const handleCardClick = () => {
    new Audio(animal.audio).play()
  };

  return (
    <div className={styles.animalCard} onClick={handleCardClick}>
      <Image src={animal.image} alt={animal.name} width={112} height={112} className={styles.animalCardImage} />
      <h3>{animal.name}</h3>
      {/*
      <audio controls>
        <source src={animal.audio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      */}
    </div>
  );
};

export default AnimalCard;