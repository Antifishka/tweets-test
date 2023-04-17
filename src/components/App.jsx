import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from 'globalStyles/globalStyle';
import { Layout } from "./Layout/Layout";

const Home = lazy(() => import('pages/Home/Home'));
const Tweets = lazy(() => import('pages/Tweets/Tweets'));

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

      <GlobalStyle />
    </>  
  );
};
 
export default App;
