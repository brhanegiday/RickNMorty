import { useState, useRef, createContext } from "react";
import { characters } from "../data";

const CharacterContext = createContext();

function CharacterProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [characterModal, setCharacterModal] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputEl = useRef("");

  const handleOnChange = () => {
    handleSearch(inputEl.current.value);
  };
  //   const handleOnChange = (event) => {
  //     setSearchTerm(event.target.value);
  //   };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const searchByName = characters.filter((character) =>
        character.characterName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(searchByName);
    } else {
      setSearchResults(characters);
    }
  };

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
        searchTerm,
        handleOnChange,
        searchResults,
        inputEl,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

const CharacterConsumer = CharacterContext.Consumer;
export { CharacterProvider, CharacterConsumer };
