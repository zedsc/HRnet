import React from "react";
import styled from "styled-components";
import { fontSize } from "../styles/variables";

const StyledTitle = styled.h2`
  margin: 150px auto 0px auto;
  font-size: ${fontSize[24]};
  text-align: center;
  @media (max-width: 600px) {
    font-size: ${fontSize[18]};
  }
`;

const ContainerTitle = styled.div`
  display: flex;
`;

const Custom404 = () => {
  return (
    <ContainerTitle>
      <StyledTitle>
        Sorry! The page you are looking for doesn{"'"}t exist 😢
      </StyledTitle>
    </ContainerTitle>
  );
};

export default Custom404;
