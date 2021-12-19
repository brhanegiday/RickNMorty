import { useState, createContext } from "react";
import { characters } from "../data";

const CharacterContext = createContext();

function CharacterProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [characterModal, setCharacterModal] = useState([]);

  const handleModal = (id) => {
    const character = characters.filter((charID) => charID.id === id);
    if (character) {
      setCharacterModal(character);
      setOpenModal(true);
    }
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const handleLikeButton = (id) => {
    const tempChars = [...characters];
    const character = tempChars.find((charID) => charID.id === id);
    character.likes = true;
  };
  const handleUnLikeButton = (id) => {
    const tempChars = [...characters];
    const character = tempChars.find((charID) => charID.id === id);
    character.likes = false;
  };
  return (
    <CharacterContext.Provider
      value={{
        characters,
        handleLikeButton,
        handleUnLikeButton,
        handleModal,
        openModal,
        characterModal,
        closeModal,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

const CharacterConsumer = CharacterContext.Consumer;
export { CharacterProvider, CharacterConsumer };
