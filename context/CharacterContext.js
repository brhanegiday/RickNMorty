import { createContext } from "react";
import { characters } from "../data";

const CharacterContext = createContext();

function CharacterProvider({ children }) {
  const handleLikeButton = (id) => {
    const tempChars = [...characters];
    const character = tempChars.find((charID) => charID.id === id);
    character.likes = true;
    console.log(character);
  };
  const handleUnLikeButton = (id) => {
    const tempChars = [...characters];
    const character = tempChars.find((charID) => charID.id === id);
    character.likes = false;
    console.log(character);
  };
  return (
    <CharacterContext.Provider
      value={{ characters, handleLikeButton, handleUnLikeButton }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

const CharacterConsumer = CharacterContext.Consumer;
export { CharacterProvider, CharacterConsumer };
