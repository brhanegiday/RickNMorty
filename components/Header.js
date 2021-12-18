import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
const Container = styled.div`
  background-color: #fff;
  height: 4rem;
  border-bottom: 2px solid #eee;
`;

const HeaderContainer = styled.div`
  max-width: 90%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
`;

const Input = styled.input`
  padding: 0.6rem;
  border-radius: 20px;
  outline: none;
  width: 27rem;
  padding-left: 3rem;
  background-color: #f3f3f3;
  border: 1px solid #f3f3f3;
`;
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify: center;
`;
const ThemeModeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify: center;
  cursor: pointer;
`;
function Header() {
  return (
    <Container>
      <HeaderContainer>
        <Image
          src="/images/Rick_and_Morty.png"
          alt="Header Logo"
          width={120}
          height={40}
        />
        <InputWrapper>
          <AiOutlineSearch style={{ position: "absolute", left: "1rem" }} />
          <Input type="text" placeholder="Search Characters" value="" />
        </InputWrapper>

        <ThemeModeContainer>
          <MdDarkMode />
          <p style={{ fontSize: "0.8rem" }}>Dark Mode</p>
        </ThemeModeContainer>
      </HeaderContainer>
    </Container>
  );
}

export default Header;
