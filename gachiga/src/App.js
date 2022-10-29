import React, { useState, useEffect } from 'react';
import {Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { FontStyle } from './FontStyle';
import Home from './pages/Home';
import Team from './pages/Team';
import Service_Gachiga from './pages/Service_Gachiga';
import Service_Meonjeoga from './pages/Service_Meonjeoga';
import FAQ from './pages/FAQ';
import Career from './pages/Career';
import Terms from './pages/Terms';



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
                <Route path="/service/gachiga" exact={true} element={<Service_Gachiga />} />
                <Route path="/service/meonjeoga" exact={true} element={<Service_Meonjeoga />} />
                <Route path="/faq" exact={true} element={<FAQ />} />
                <Route path="/career" exact={true} element={<Career />} />
                <Route path="/terms/tos" exact={true} element={<Terms />} />
            </Routes>
        </FontStyle>
    </Container>
  
);
}

export default App;

