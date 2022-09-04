import React from 'react';
import Header from './Header';

import BestBooks from './BestBook';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
          </Routes>
          
        </Router>
      </>
    )
  }
}

export default App;