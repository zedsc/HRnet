import "../styles/typo.import.scss";
import type { AppProps } from "next/app";
import styled from "styled-components";
import Layout from "../components/Layout";
import { borderRadius, fonts, shadow } from "../styles/variables";

const StyledBg = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  box-shadow: ${shadow.primary};
  border-radius: ${borderRadius.tenpx};
  overflow: hidden;
  font-family: ${fonts.base};
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledBg>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledBg>
  );
}
