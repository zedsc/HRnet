import React from "react";
import Meta from "../components/Meta";
import styled from "styled-components";
import { fontSize } from "../styles/variables";

const StyledTitle = styled.h2`
  margin: 150px auto 0px auto;
  font-size: ${fontSize[48]};
  text-align: center;
  @media (max-width: 600px) {
    font-size: ${fontSize[32]};
  }
`;

const ContainerTitle = styled.div`
  display: flex;
`;

const Index = () => {
  return (
    <>
      <Meta />
      <ContainerTitle>
        <StyledTitle>Welcome to HRnet</StyledTitle>
      </ContainerTitle>
    </>
  );
};

export default Index;
