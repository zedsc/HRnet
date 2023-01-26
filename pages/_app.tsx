import "../styles/typo.import.scss";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import styled from "styled-components";
import Layout from "../components/Layout";
import { borderRadius, fonts, shadow } from "../styles/variables";
import { debounce } from "debounce";
import { saveState } from "../store/browser-storage";
import { store } from "../store/store";

const StyledBg = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  box-shadow: ${shadow.primary};
  border-radius: ${borderRadius.tenpx};
  overflow: hidden;
  font-family: ${fonts.base};
`;

//Saving the state to the browser storage
store.subscribe(
  debounce(() => {
    //delays the execution of the function
    saveState(store.getState());
  }, 800)
);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <StyledBg>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyledBg>
    </Provider>
  );
};

export default App;
