import React from "react";
import styled from "styled-components";
import Character from "./Character";
import { characters } from "../data";

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
    <GridContainer>
      {characters.map((character) => (
        <Character character={character} key={character.id} />
      ))}
    </GridContainer>
  );
}

export default CharacterList;
