import React from "react";
import styled from "styled-components";
import { CharacterConsumer } from "../context/CharacterContext";
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
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

function CharModal() {
  return (
    <CharacterConsumer>
      {(value) => {
        const { openModal, closeModal } = value;
        const { image, characterName, episodeList, likes, numEpisodes } =
          value.characterModal;
        console.log(value.characterModal);
        {
          openModal && (
            <ModalContainer>
              <div style={{ backround: "#fff" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    >
                      <Image
                        src={image}
                        alt={characterName}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>{characterName}</div>
                    <div>{likes ? <AiFillHeart /> : <AiOutlineHeart />}</div>
                  </div>

                  <div>
                    <Button>{numEpisodes} Episodes</Button>
                    <IoCloseCircleOutline
                      style={{ color: "#333" }}
                      onClick={closeModal}
                    />
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }
      }}
    </CharacterConsumer>
  );
}

export default CharModal;
