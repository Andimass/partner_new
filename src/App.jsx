import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/screens/home/Header/Header.jsx";
import Geo from "./components/screens/home/Geo/Geo.jsx";
import './index.css';
import Contacts from "./components/screens/home/Contacts/Contacts.jsx";
import Geologic from "./components/screens/home/Geologic/Geologic.jsx";
import Project_Supply from "./components/screens/home/Project_Supply/Project_Supply.jsx";
import Water from "./components/screens/home/Gaz/Water.jsx";
import Cadastr from "./components/screens/home/Cadastr/Cadastr.jsx";
import Communication_System from "./components/screens/home/Communication_System/Electro.jsx";
import About from "./components/screens/home/About/About.jsx";
import Gazification from "./components/screens/home/Gazification/Gazification.jsx";
import Geodezic from "./components/screens/home/Geodezic/Geodezic";
import Architect from "./components/screens/home/Architect/Architect"
import {Helmet} from "react-helmet";

function App() {
  return (
      <>
      <Helmet>
        <title>Проектирование газоснабжения и энергоснабжения, геодезические и кадастровые работы - ПАРТНЕР</title>
        <meta name="description" content="Комплексные решения в области проектирования систем газоснабжения и энергоснабжения. Профессиональные геодезические и кадастровые услуги для вашего проекта. Получите консультацию сейчас!"/>
        <meta name="keywords" content="проектирование, проектирование газоснабжения, энергоснабжение, геодезические услуги, кадастровые работы, инженерные изыскания, кадастр недвижимости"/>
      </Helmet>
    <Routes>
      <Route path='/' element={<Header />}/>
       <Route path='/geo' element={<Geo/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/project' element={<Geologic/>}/>
        <Route path='/water' element={<Water/>}/>
        <Route path='/gazification' element={<Gazification />}/>
        <Route path='/geodezic' element={<Geodezic />}/>
        <Route path='/communication_system' element={<Communication_System/>}/>
        <Route path='/cadastral_works' element={<Cadastr/>}/>
        <Route path='/project_supply' element={<Project_Supply/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/architect' element={<Architect/>}/>
    </Routes>
  </>
  );
}

export default App;




