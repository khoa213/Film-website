import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PrimaryLayout } from "components/Layout";
import HomePage from "containers/Home";
import NotFoundPage from "containers/404Page";
import DetailPage from "containers/Detail";
import InfoPage from "containers/InfoPage";
import Filmpage from "containers/Filmpage";
import Pricing from "containers/Pricing";
import Payment from "containers/Payment";
import UserProfile from 'containers/UserProfile';
import { MoviesPage } from "containers/Movie";



function App() {
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/moives" element={<MoviesPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/userprofile" element={<UserProfile/>} />
      </Route>
      <Route path="/infopage" element={<InfoPage />} />
      <Route path="/filmpage" element={<Filmpage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;