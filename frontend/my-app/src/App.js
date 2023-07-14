import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { PrimaryLayout } from 'components/Layout';
import HomePage from 'containers/Home';
import NotFoundPage from 'containers/404Page';
import DetailPage from 'containers/Detail';
import InfoPage from 'containers/InfoPage';
import Filmpage from 'containers/Filmpage';

function App() {
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Route>
      <Route path="/infopage" element={<InfoPage />} />
      <Route path="/filmpage" element={<Filmpage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
