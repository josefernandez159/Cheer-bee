import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from '../components/Home/Home'
import Main from '../components/template/Main'

export default props =>
  <Routes>
    <Route exact path='/' element={<Home />}/>
    <Route path='/Main' element={<Main />}/>
    <Route path='*' element={<Home />}/>
  </Routes>
;
