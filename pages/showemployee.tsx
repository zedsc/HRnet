import React from "react";
import styled from "styled-components";
import Meta from "../components/Meta";
import EnhancedTable from "../components/Table";
import TableDataGrid from "../components/TableDataGrid";
import { borderRadius, colors, shadow } from "../styles/variables";

const StyledBg = styled.div`
  width: 95%;
  height: 95%;
  background-color: ${colors.grayScales.white};
  margin: auto;
  margin-top: 20px;
  overflow: hidden;
  border-radius: ${borderRadius.tenpx};
  box-shadow: ${shadow.primary};
`;

const Title = styled.h2`
  margin: 20px 0px 40px 15px;
`;

const showemployee = () => {
  return (
    <StyledBg>
      <Meta title={"Current employees"} />
      <Title>Current employees</Title>
      {/* <EnhancedTable /> */}
      <TableDataGrid />
    </StyledBg>
  );
};

export default showemployee;
