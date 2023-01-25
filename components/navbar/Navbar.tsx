import React from "react";
import Link from "next/link";
import logo from "../../public/logo.svg";
import { MdAddCircleOutline } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  StyledBg,
  ContainerLogoTitle,
  ContainerLogo,
  ContainerIcon,
  StyledImage,
  StyledLinkTitle,
  StyledNavLink,
  Title,
  SmallContainerLogo,
  SmallContainerIcon,
  SmallStyledLink,
} from "./navbar.styled";

const getWindowDimension = () => {
  const { innerWidth: width } = window;

  return width;
};

const Navbar = () => {
  const router = useRouter();
  const [windowDimension, setWindowDimension] = React.useState<Number>(0);

  const handleResize = () => {
    setWindowDimension(getWindowDimension());
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimension! > 600 ? (
    <StyledBg>
      <ContainerLogoTitle>
        <StyledLinkTitle href="/">
          <ContainerLogo>
            <StyledImage src={logo} alt="logo WhealthHealth" priority />
          </ContainerLogo>
          <Title>HRnet</Title>
        </StyledLinkTitle>
      </ContainerLogoTitle>
      <nav className="navbar">
        <StyledNavLink
          href="/addemployee"
          className={router.pathname == "/addemployee" ? "active" : ""}
        >
          Add new employee
          <ContainerIcon>
            <MdAddCircleOutline />
          </ContainerIcon>
        </StyledNavLink>
        <StyledNavLink
          href="/showemployee"
          className={router.pathname == "/showemployee" ? "active" : ""}
        >
          Show employees list
          <ContainerIcon>
            <HiUserGroup />
          </ContainerIcon>
        </StyledNavLink>
      </nav>
    </StyledBg>
  ) : (
    <StyledBg>
      <Link href="/">
        <SmallContainerLogo>
          <StyledImage src={logo} alt="logo WhealthHealth" priority />
        </SmallContainerLogo>
      </Link>
      <nav>
        <SmallStyledLink
          href="/addemployee"
          className={router.pathname == "/addemployee" ? "active" : ""}
        >
          <SmallContainerIcon>
            <MdAddCircleOutline size={20} />
          </SmallContainerIcon>
        </SmallStyledLink>
        <SmallStyledLink
          href="/showemployee"
          className={router.pathname == "/showemployee" ? "active" : ""}
        >
          <SmallContainerIcon>
            <HiUserGroup size={20} />
          </SmallContainerIcon>
        </SmallStyledLink>
      </nav>
    </StyledBg>
  );
};

export default Navbar;
