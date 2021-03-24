import React from "react";
import styled from "styled-components";

export const ReactContent = () => {
  return (
    <Container>
      <TransparentSection>
        <Header>Transparent content moderation powered by Chainlink</Header>
      </TransparentSection>
      <WhiteSection>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
        <Header>Transparent content moderation powered by Chainlink</Header>
      </WhiteSection>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 500px;
  min-height: calc(100vh - 500px);
  pointer-events: none;
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
`;

const TransparentSection = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteSection = styled.div`
  padding: 100px;
  position: relative;
  min-height: calc(100vh - 500px);
  background-color: white;
  color: black;
`;

const Header = styled.h1``;
