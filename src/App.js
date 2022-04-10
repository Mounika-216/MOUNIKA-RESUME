import React from 'react';
import Mainpage from './components/Mainpage';
import Experience from './components/Experience';
import ProjectsWorkedOn from './components/ProjectsWorkedOn';

import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Router>
          <Mainpage/>
          
        </Router>
    </div>
  );
}

export default App;
