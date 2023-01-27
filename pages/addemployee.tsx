import React from "react";
import styled from "styled-components";
import FormAddEmployee from "../components/form/Form";
import Meta from "../components/Meta";
import { borderRadius, colors, shadow } from "../styles/variables";

const StyledBg = styled.div`
  width: 95%;
  height: 95%;
  background-color: ${colors.grayScales.white};
  margin: auto;
  margin-top: 20px;
  overflow: auto;
  border-radius: ${borderRadius.tenpx};
  box-shadow: ${shadow.primary};
`;

const Title = styled.h2`
  margin: 20px 0px 40px 15px;
`;

const Addemployee = () => {
  return (
    <StyledBg>
      <Meta title={"Add an employee"} />
      <Title>Add an employee</Title>
      <FormAddEmployee />
    </StyledBg>
  );
};

export default Addemployee;
