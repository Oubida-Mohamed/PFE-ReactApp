import React, { useEffect, useState } from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Page_visiteur from './components/page_visiteur/page-visiteur';
import Page_dv_Vendeur from './components/page_devenir_vendeur/page_dv_vendeur';
import PageServices from './components/page_visiteur_2/page_services';
import Detail_Services  from './components/page_visiteur_2/page_detail_services';

export default function App() {


  return (< >
      <Routes>
        <Route path='/' element={<Page_visiteur/>}/> 
        <Route path='/Services' element={<PageServices/>}/>
        <Route path='/devenir_vendor' element={<Page_dv_Vendeur/>}/>
        <Route path='/Services/:categorie/:header/:subcategorie/:id' element={<PageServices/>}/>
        <Route path='/Services/:search2' element={<PageServices/>}/>
        <Route path='/Services/:id' element={<Detail_Services/>}/>
      </Routes>
      
        

    </>

     
  )
};