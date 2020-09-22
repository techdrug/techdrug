import React from 'react';
import './assets/vendor/bootstrap/css/bootstrap-grid.css'
import './assets/vendor/icofont/icofont.min.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/css/style.css'

import Navbar from './Components/header'
import Home from './Components/pages/home'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
