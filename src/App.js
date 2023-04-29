
import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageOne from './views/PageOne';
import PageTwo from './views/PageTwo';
import PageThree from './views/PageThree';
import PageFour from './views/PageFour';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<PageOne/>}/>
          <Route path="/pagetwo" element={<PageTwo/>} />
          <Route path="/pagethree" element={<PageThree />} />
          <Route path="/pagefour" element={<PageFour />} />
          </Routes>
        </Router>
      </div>
      );
    }
    
    export default App;
    // <Route exact path="/" element={<Home />}/>
