import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { colors } from "../styles/variables";

const StyledMain = styled.main`
  width: 100%;
  background-color: ${colors.primary};
`;

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default Layout;
