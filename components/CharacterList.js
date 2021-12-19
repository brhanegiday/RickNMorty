import React from "react";
import styled from "styled-components";
import Character from "./Character";
import { CharacterConsumer } from "../context/CharacterContext";
const GridContainer = styled.div`
  max-width: 90%;
  margin: auto;
  padding: 1.5rem 0.4rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
`;

function CharacterList() {
  return (
    <CharacterConsumer>
      {(value) => (
        <GridContainer>
          {value.characters.map((character) => (
            <Character
              character={character}
              key={character.id}
              handleLikeButton={value.handleLikeButton}
              handleUnLikeButton={value.handleUnLikeButton}
              handleModal={value.handleModal}
              openModal={value.openModal}
              characterModal={value.characterModal}
            />
          ))}
        </GridContainer>
      )}
    </CharacterConsumer>
  );
}

export default CharacterList;
