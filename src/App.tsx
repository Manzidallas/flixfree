import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import '../src/App.css'
import Search from './components/Search'
import View from './components/View'
import { SkeletonTheme } from 'react-loading-skeleton'
import NotFound from './components/Nopage'


const App = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>}/>    
            <Route path='/search' element={<Search/>}/>    
            <Route path='/view/:id' element={<View/>}/>    
            <Route path='/search/view/:id' element={<View/>}/>    
          <Route path='/' element={<Navbar/>}>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  )
}

export default App