import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { FontStyles } from 'globalStyles/fontStyles';
import { GlobalStyle } from 'globalStyles/globalStyle';
import { Layout } from "./components/Layout/Layout";

const Home = lazy(() => import('pages/Home'));
const Tweets = lazy(() => import('pages/Tweets'));

const App = () => {
  return (  
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>  
      </Routes>

      <FontStyles />
      <GlobalStyle />
    </>  
  );
};
 
export default App;
