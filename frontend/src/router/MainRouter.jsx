import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AlbumPage from '../pages/AlbumPage'
import ChartPage from '../pages/ChartPage'
import HomePage from '../pages/HomePage'
import MyMusicPage from '../pages/MyMusicPage'
import SettingPage from '../pages/SettingPage'
import Auth from '../components/Auth'
import Register from '../components/Register'
import User from '../pages/User'
import ArtistPage from '../pages/ArtistPage'

const MainRouter = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/mymusic' element={<MyMusicPage/>}/>
        <Route path='/album/:slug' element={<AlbumPage/>}/>
        <Route path='/chart' element={<ChartPage/>}/>
        <Route path='/setting' element={<SettingPage/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/nghe-si/:slug' element={<ArtistPage/>}/>
      </Routes>
    </div>
  )
}

export default MainRouter