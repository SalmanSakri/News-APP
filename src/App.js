
import './App.css';
import Navbar from "./component/Navbar"
import "./App.css"
import News from "./component/News"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar"

import React, { useState } from 'react'
import Footer from './component/Footer';

const App = () => {
  const pageSize = 10;
  const apikey = process.env.API_KEY
  const [progress, setProgress] = useState(0);

  return (
    // <div>
    <Router>
      <Navbar />
      <LoadingBar
      height={4}
      color="rgb(255 0 0)"
      progress={progress}
      />


      <Routes>
        <Route exact path='/' element= {<News setProgress={setProgress} apiKey={apikey} key="general" pageSize={pageSize} country="in" category="general" />}/>
      </Routes>

      <Routes>
        <Route exact path='/business' element=
         {
         <News setProgress={setProgress} apiKey={apikey} key="business" pageSize={pageSize} country="in" category="business"/>
          }/>
      </Routes>


      <Routes>
        <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
      </Routes>

      <Routes>
        <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apikey} key="general" pageSize={pageSize} country="in" category="general" />} />
      </Routes>

      <Routes>
        <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apikey} key="health" pageSize={pageSize} country="in" category="health" />} />
      </Routes>


      <Routes>
        <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apikey} key="science" pageSize={pageSize} country="in" category="science" />} />
      </Routes>

      <Routes>
        <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apikey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
      </Routes>

      <Routes>
        <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apikey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
      </Routes>

      <Footer/>

    </Router>

    // {/* </div> */}
  );
}
export default App;
