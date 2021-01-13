import M from 'materialize-css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
