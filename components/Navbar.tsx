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
  padding: 5px;
`;
const ContainerLogoTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

const ContainerLogo = styled.div`
  width: 180px;
  height: 180px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  margin: 0px;
  text-align: center;
`;

const StyledNavLink = styled(Link)`
  display: block;
  margin: 5px;
  text-decoration: none;
  color: ${colors.grayScales.black};
  &:hover {
    background-color: ${colors.primary};
  }
  &.active {
    background-color: ${colors.primary};
  }
`;

const Navbar = () => {
  const router = useRouter();

  return (
    <StyledBg>
      <ContainerLogoTitle>
        <Link href="/">
          <ContainerLogo>
            <StyledImage src={logo} alt="logo WhealthHealth" />
          </ContainerLogo>
          <Title>HRnet</Title>
        </Link>
      </ContainerLogoTitle>
      <nav className="navbar">
        <StyledNavLink
          href="/addemployee"
          className={router.pathname == "/addemployee" ? "active" : ""}
        >
          Add new employee <MdAddCircleOutline />
        </StyledNavLink>
        <StyledNavLink
          href="/showemployee"
          className={router.pathname == "/showemployee" ? "active" : ""}
        >
          Show employees list <HiUserGroup />
        </StyledNavLink>
      </nav>
    </StyledBg>
  );
};

export default Navbar;
