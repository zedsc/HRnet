import Link from "next/link";
import styled from "styled-components";
import { colors } from "../../styles/variables";

/////// STYLED COMPONENTS //////
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledDivColumn = styled.div`
  display: flex;
  flex-direction: colmun;
  justify-content: space-around;
`;

export const StyledFieldset = styled.fieldset`
  font-size: 16px;
  padding-top: 10px;
  margin: 0 5px 20px 5px;
`;

export const StyledLinkModal = styled(Link)`
  text-decoration: none;
  color: ${colors.grayScales.white};
  &:visited {
    color: ${colors.grayScales.white};
  }
`;

/////// MUI STYLES //////
// Personnal informations - names & birthdate
export const responsivePersonnal = {
  // flex: { xs: "100%", sm: "1 / 2" },
  mx: "0.5rem",
  my: "0.5rem",
  //width: { xs: "100%", sm: 1 / 2 },
  width: { xs: "calc(100% - 20px)", sm: 1 / 2 },
};

// Address
export const responsiveStreetNb = {
  width: { xs: "calc(100% - 20px)", sm: 1 / 4 },
  mx: "0.5rem",
  my: "0.5rem",
};

export const responsiveStreet = {
  width: { xs: "calc(100% - 20px)", sm: 3 / 4 },
  mx: "0.5rem",
  my: "0.5rem",
};

export const responsiveCityState = {
  width: { xs: "calc(100% - 20px)", sm: 2 / 5 },
  mx: "0.5rem",
  my: "0.5rem",
};

export const responsiveZipcode = {
  width: { xs: "calc(100% - 20px)", sm: 1 / 5 },
  mx: "0.5rem",
  my: "0.5rem",
};

// Company
export const responsiveDept = {
  width: { xs: "calc(100% - 20px)", sm: 2 / 3 },
  mx: "0.5rem",
  my: "0.5rem",
};

export const responsiveStardate = {
  width: { xs: "calc(100% - 20px)", sm: 1 / 3 },
  mx: "0.5rem",
  my: "0.5rem",
};

// Button
export const buttonStyle = {
  ":hover": { bgcolor: colors.tertiary },
  bgcolor: colors.secondary,
  my: "1rem",
};
