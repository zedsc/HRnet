import styled from "styled-components";
import { colors } from "../../styles/variables";
import Image from "next/image";
import Link from "next/link";

//Desktop - devices above 600px width

export const StyledBg = styled.div`
  width: 200px;
  height: 95vh;
  @media (max-width: 600px) {
    width: 40px;
  }
`;
export const ContainerLogoTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const ContainerLogo = styled.div`
  width: 180px;
  height: 180px;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const StyledLinkTitle = styled(Link)`
  text-decoration: none;
  color: ${colors.grayScales.black};
`;

export const Title = styled.h1`
  margin: 10px 0px 20px 0px;
  text-align: center;
`;

export const StyledNavLink = styled(Link)`
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

export const ContainerIcon = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

//Mobile - devices under 600px width

export const SmallContainerLogo = styled.div`
  width: 30px;
  height: 30px;
  margin: 15px auto;
`;

export const SmallContainerIcon = styled.div`
  margin: 10px auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const SmallStyledLink = styled(Link)`
  display: flex;
  padding: 5px;
  color: ${colors.grayScales.black};
  &:hover {
    background-color: ${colors.primary};
  }
  &.active {
    background-color: ${colors.primary};
  }
`;
