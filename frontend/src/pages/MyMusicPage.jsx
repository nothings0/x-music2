import React, { useState, useEffect } from 'react'
import Searching from '../components/Searching'
import AlbumRight from '../components/AlbumRight';
import { useDispatch, useSelector } from 'react-redux';
import { getSong } from '../redux/apiRequest';
import { useNavigate } from 'react-router-dom';
const ava = require("../assets/ava1.png");

const MyMusicPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.login.currentUser)
  const listSong = useSelector(state => state.song.listSong.songs)
  useEffect(() => {
    if(!user){
      alert("ban can phai dang nhap")
      navigate("/login")
    }
    getSong(dispatch, user?.accessToken)
  }, [])

  return (
    <div className="my_music__page">
      <Searching/>
      <div className="my_music__page__container">
        <div className="my_music__page__container__info">
          <div className="my_music__page__container__info__img">
            <img src={ava} alt="" />
          </div>
          <h3>{user?.user.userName}</h3>
        </div>
        <AlbumRight listRender={listSong}/>
      </div>
    </div>
  )
}

export default MyMusicPage