import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { FontStyle } from './FontStyle';
import Home from './pages/Home';
import Team from './pages/Team';
import Service_Gachiga from './pages/Service_Gachiga';
import FQA from './pages/FQA';
import Career from './pages/Career';

const Container = styled.div`
  position: absolute;
  top: 100;
  left: 0;
  width: 100%;
  height: 100vh;
`;

function App() {
    return(<Container>
        <FontStyle>
            <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/team" exact={true} element={<Team />} />
                <Route path="/service" exact={true} element={<Service_Gachiga />} />
                <Route path="/fqa" exact={true} element={<FQA />} />
                <Route path="/career" exact={true} element={<Career />} />
            </Routes>
        </FontStyle>
    </Container>
  
)}

export default App;

//            <Route path="/team" exact={true} element={<Team />} />
//<Route path="/service" exact={true} element={<Service />} />
//<Route path="/career" exact={true} element={<Career />} />