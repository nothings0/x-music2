import React, { useContext, useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {addSong} from '../redux/apiRequest'
import { SongContext } from '../Contexts/SongContext';

const Player = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.login.currentUser)
  const { song, currentSong, isPlay, setPlay, artists, titleSong, imgPlayer, isShow, setShow, audioIndex, setAudioIndex, listRender } = useContext(SongContext)

  const [durations, setDuration] = useState(0)
  const [timeSong, setTimeSong] = useState("")
  const [volumeSong, setVolumeSong] = useState(0.5)
  const [currentTimeSong, setCurrentTimeSong] = useState("")
  const [isRepeat, setRepeat] = useState(false)
  const [isRandom, setRandom] = useState(false)
  const [isLike, setLike] = useState(false)

  const audioRef = useRef()
  const inputRef = useRef()
  const repeatRef = useRef()
  const randomRef = useRef()
  const infoImg = useRef()
  const likeRef = useRef()

  const x = audioRef.current?.duration
  

  useEffect(()=>{
    const convertSecondstoTime = () => {
      const given_seconds = audioRef.current.duration;
      
      if(!given_seconds) return
      const minutes = Math.floor(given_seconds / 60);
      const seconds = Math.floor(given_seconds - (minutes * 60));

      const timeString = minutes + ":" + seconds
      setTimeSong(timeString)
    }

    convertSecondstoTime()
  },[x])
  
  const length = listRender?.length
  const PrevIndex = () => {
    if(isRandom){
      playRandomSong()
    }else {
    setAudioIndex(Math.abs(audioIndex - 1) % length)
    }
    setLike(false)
  }

  const NextIndex = () => {
    if(isRandom){
      playRandomSong()
    }else {
      setAudioIndex(Math.abs(audioIndex + 1) % length)
    }
    setLike(false)
  }

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handleShow = () => {
    if(song){
      setShow(!isShow)
    }else{
      alert('Hãy chọn bài hát')
    }
  }

  const handleInput = (e) => {
    const seekTime = audioRef.current.duration / 100 * e.target.value
    audioRef.current.currentTime = seekTime
  }

  const handleUpdateTime = () => {
    const progress = Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)
    inputRef.current.value = progress
    const convertSecondstoTimes = () => {
      const given_seconds = audioRef.current.currentTime;
      
      if(!given_seconds) return
      const minutes = Math.floor(given_seconds / 60);
      const seconds = Math.floor(given_seconds - (minutes * 60));
  
      const timeString = minutes + ":" + seconds
      setCurrentTimeSong(timeString)
    }
  
    convertSecondstoTimes()
  }

  const handleVolume = (e) => {
    const seekVolume = e.target.value
    setVolumeSong(seekVolume)
    audioRef.current.volume = volumeSong
  }

  // const CdThumbAnimate = document.querySelector(".player__info__img")?.animate(
  //   [
  //     { transform: 'rotate(360deg)' }
  //   ], {
  //     duration: 1000,
  //     iterations: Infinity
  //   }
  // );

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
      // console.log(CdThumbAnimate);
      // CdThumbAnimate.pause()
    } else {
      audioRef.current.play();
      // CdThumbAnimate.play()
    }
    setPlay(!isPlay);
  };

  const handleRepeat = () => {
    setRepeat(!isRepeat)
    repeatRef.current.classList.toggle('active', !isRepeat)
  }
  const handleRandom = () => {
    setRandom(!isRandom)
    randomRef.current.classList.toggle('active', !isRandom)
  }
  const handleLike = () => {
    setLike(!isLike)
    likeRef.current.classList.toggle('active', !isLike)
    if(!isLike){
      const newSong = {
        idSong: song,
        name: titleSong,
        artist: artists,
        thumbnail: imgPlayer
      };

      addSong(newSong, dispatch, user?.accessToken)
      alert("da them bai hat")
    }
  }
  
  const playRandomSong = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * length)
    } while (newIndex === audioIndex)
    setAudioIndex(newIndex)
  }

  const handleEnded = () => {
    if(isRepeat){
      audioRef.current.play()
    }else{
      NextIndex()
    }
  }
  

    return (
      <div className={`player ${isShow ? 'show' : ''}`}>
        <div className="player__show" onClick={() => handleShow()}>
        {
          isShow ? <i className="ri-arrow-down-s-line"></i> :
          <i className="ri-arrow-up-s-line"></i>
        }
        </div>
        <div className="player__info">
          <div className="player__info__img" ref={infoImg}>
            <img src={imgPlayer} alt="" />
          </div>
          <div className="player__info__txt">
            <h3>{titleSong}</h3>
            <p>{artists}</p>
          </div>
          <div className="player__info__heart" ref={likeRef} onClick={(e) => handleLike(e)}>
            <i class="ri-heart-line"></i>
          </div>
        </div>
        <div className="player__control">
          <div className="player__control__btn">
            <i className="ri-repeat-line repeat__btn" onClick={handleRepeat} ref={repeatRef}></i>
            <i className="ri-rewind-fill prev_btn" onClick={PrevIndex}></i>
            <div className="player__control__btn__toggle" onClick={e => handlePausePlayClick(e)}>
              {
                isPlay ? <i className="ri-pause-circle-fill main__btn"></i> :
                <i className="ri-play-circle-fill play__btn main__btn"></i>
              }
            </div>
            <i className="ri-speed-fill next_btn" onClick={NextIndex}></i>
            <i className="ri-shuffle-line shuffle__btn" onClick={handleRandom} ref={randomRef}></i>
          </div>
          <div className="player__control__time">
            <span className="time__start">{currentTimeSong}</span>
            <input type="range" min="0" max="100" step="0.1" ref={inputRef} onChange={handleInput}/>
            <span className="time__end">{timeSong}</span>
            <audio 
              src={currentSong} ref={audioRef}
              onLoadedData={handleLoadedData}
              onTimeUpdate={handleUpdateTime}
              onEnded={handleEnded}
            ></audio>
          </div>
          <div className="player__control__volume">
            {
              volumeSong === 0 ? <i className="ri-volume-mute-fill" onClick={() => setVolumeSong(0.5)}></i> : <i className="ri-volume-down-fill" onClick={() => setVolumeSong(0)}></i>
            }
            <input type="range" min="0" max="1" step="0.1" onChange={handleVolume}/>
          </div>
        </div>
      </div>
  )
};

export default Player;
