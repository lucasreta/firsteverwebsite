import { BrowserRouter as Router, Route } from "react-router-dom";

import MainLayout from './views/MainLayout';

function App() {
  return (
    <Router>
      <Route path="/:url?"  component={MainLayout} />
    </Router>
  );
}

export default App;
