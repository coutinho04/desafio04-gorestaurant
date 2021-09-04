import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';

import GlobalStyle from './styles/global';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
