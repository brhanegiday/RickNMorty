import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import CharModal from "./CharModal";

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.7rem 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 10px;
  border: 1.5px solid #eee;
`;

const LeftItem = styled.div`
  display: flex;
  align-items: center;
  gap: 3.8rem;
  margin-top: 0.5rem;
`;
const MiddleItem = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
`;
const RightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4.5rem;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0.3rem 0.6rem;
  background: #dcf84a;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const CharacterName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  font-size: 1.1rem;
`;
const OriginText = styled.div`
  font-size: 14px;
  font-weight: 300;
`;
const SpeciesText = styled.div`
  font-size: 12px;
  font-weight: 500;
  padding-top: 0.3rem;
`;

function Character({
  character,
  handleLikeButton,
  handleUnLikeButton,
  handleModal,
}) {
  const [likeButton, setLikeButton] = useState(false);

  return (
    <Wrapper>
      <Image
        src={character.image}
        alt={character.characterName}
        width={120}
        height={150}
      />
      <div>
        <LeftItem>
          <CharacterName>{character.characterName}</CharacterName>
          <div onClick={() => setLikeButton((val) => !val)}>
            {likeButton ? (
              <AiFillHeart
                onClick={() => handleLikeButton(character.id)}
                style={{
                  cursor: "pointer",
                  color: "#dcf84a",
                }}
              />
            ) : (
              <AiOutlineHeart
                onClick={() => handleUnLikeButton(character.id)}
                style={{
                  cursor: "pointer",
                  color: "#333",
                }}
              />
            )}
          </div>
        </LeftItem>
        <MiddleItem>
          <div>
            <OriginText>Origin</OriginText>
            <SpeciesText>{character.origin}</SpeciesText>
          </div>
          <div>
            <OriginText>Species</OriginText>
            <SpeciesText>{character.species}</SpeciesText>
          </div>
        </MiddleItem>
        <RightItem>
          <div></div>
          <Button onClick={() => handleModal(character.id)}>
            <div style={{ fontSize: "0.7rem" }}> See Episods</div>{" "}
            <BsArrowRightShort style={{ fontSize: "1.3rem" }} />
          </Button>
        </RightItem>
      </div>
    </Wrapper>
  );
}

export default Character;
