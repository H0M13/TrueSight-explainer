import React from "react";
import styled from "styled-components";
import { Iframed3dContent } from "./Iframed3dContent";
import { ReactContent } from "./ReactContent";

function App() {
  return (
    <Container>
      <ReactContent />
      <Iframed3dContent />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export default App;
