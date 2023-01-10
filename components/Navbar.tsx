import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import logo from "../public/logo.svg";
import { MdAddCircleOutline } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { colors } from "../styles/variables";
import { useRouter } from "next/router";

const StyledBg = styled.div`
  width: 200px;
  height: 95vh;
`;
const ContainerLogoTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const ContainerLogo = styled.div`
  width: 180px;
  height: 180px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const StyledLinkTitle = styled(Link)`
  text-decoration: none;
  color: ${colors.grayScales.black};
`;

const Title = styled.h1`
  margin: 10px 0px 20px 0px;
  text-align: center;
`;

const StyledNavLink = styled(Link)`
  display: flex;
  padding: 10px;
  text-decoration: none;
  color: ${colors.grayScales.black};
  &:hover {
    background-color: ${colors.primary};
  }
  &.active {
    background-color: ${colors.primary};
  }
`;

const ContainerIcon = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const Navbar = () => {
  const router = useRouter();

  return (
    <StyledBg>
      <ContainerLogoTitle>
        <StyledLinkTitle href="/">
          <ContainerLogo>
            <StyledImage src={logo} alt="logo WhealthHealth" />
          </ContainerLogo>
          <Title>HRnet</Title>
        </StyledLinkTitle>
      </ContainerLogoTitle>
      <nav className="navbar">
        <StyledNavLink
          href="/addemployee"
          className={router.pathname == "/addemployee" ? "active" : ""}
        >
          Add new employee{" "}
          <ContainerIcon>
            <MdAddCircleOutline />
          </ContainerIcon>
        </StyledNavLink>
        <StyledNavLink
          href="/showemployee"
          className={router.pathname == "/showemployee" ? "active" : ""}
        >
          Show employees list{" "}
          <ContainerIcon>
            <HiUserGroup />
          </ContainerIcon>
        </StyledNavLink>
      </nav>
    </StyledBg>
  );
};

export default Navbar;
