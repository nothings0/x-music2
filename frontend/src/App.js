import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/store'

import SidebarLeft from './components/SidebarLeft'
import Player from './components/Player';
import {SongContext} from './Contexts/SongContext'
import axios from 'axios'
import MainRouter from './router/MainRouter';


function App() {
  const [data, setData] = useState([])
  const [song, setSong] = useState(undefined)
  const [top, setTop] = useState([])
  const [idList, setIdList] = useState('ZWZB969E')
  const [suggestList, setSuggestList] = useState([{}])
  const [banner, setBanner] = useState([])
  const [forU, setForU] = useState([])
  const [currentSong, setCurrentSong] = useState('')
  const [isPlay, setPlay] = useState(false)
  const [isShow, setShow] = useState(false)
  const [titleSong, setTitleSong] = useState('')
  const [artists, setArtists] = useState('')
  const [alias, setAlias] = useState('')
  const [imgPlayer, setImgPlayer] = useState()
  const [value, setValue] = useState('')
  const [valueSearch, setValueSearch] = useState([])
  const [chart, setChart] = useState([])
  const [chartWeek, setChartWeek] = useState([])
  const [idAlbum, setIdAlbum] = useState('')
  const [audioIndex, setAudioIndex] = useState(0);
  const [artistPage, setArtistPage] = useState([]);
  // const [dark, setDark] = useState(false);
  const URL = "https://music-nothings.herokuapp.com"
  
  
  const getCountData = (count, x) => {
    const start = 0
    return x?.slice(start, start + count)
  }
  const listRender = getCountData(50, data?.song?.items)
  const top100 = getCountData(1, top)
  const listForU = getCountData(5, forU)

  // useEffect(() => {
  //   document.body.classList.toggle('dark')
  // }, [dark])

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${URL}/api/playlist?id=${idList}`)
        setData(res.data.data)
      } catch (error) {
      }
    }
    getData()
  }, [idList])

  useEffect(() => {
    if(song){
      const getCurrentSong = async () => {
        try {
          setSong(listRender[audioIndex].encodeId)
          const res = await axios.get(`${URL}/api/song?id=${song}`)
          setCurrentSong(res.data.data[128] || res.data.url.data[128])
        } catch (error) {
          alert("Bài hát chỉ dành cho tài khoản VIP");
        }
      }
      getCurrentSong()
    }
  }, [song, audioIndex])

  

  useEffect(() => {
    const getSearch = async () => {
      try {
          const res = await axios.get(`${URL}/api/search?keyword=${value}`)
          setValueSearch(res.data.data?.songs)
      } catch (error) {
        console.log(error.message);
      }
    }
    getSearch()
  }, [value])

  useEffect(() => {
    const getHome = async () => {
      try {
          const res = await axios.get(`${URL}/api/home?page=1`)
          setSuggestList(res.data.data.items[3]?.items)
          setBanner(res.data.data.items[0]?.items)
          const resTwo = await axios.get(`${URL}/api/home?page=2`)
          setForU(resTwo.data.data.items[1]?.items)
        } catch (error) {
          console.log(error.message);
        }
      }
      getHome()
    }, [])

    useEffect(() => {
      const getTop = async () => {
          try {
              const res = await axios.get(`${URL}/api/top100`)
              setTop(res.data.data)
          } catch (error) {
          }
      }
      getTop()
    }, [])

    useEffect(() => {
      const getChartHome = async () => {
          try {
              const res = await axios.get(`${URL}/api/chart-home`)
              setChart(res.data.data.RTChart)
              setChartWeek(res.data.data.weekChart)
          } catch (error) {
          }
      }
      getChartHome()
    }, [])
    useEffect(() => {
      const getArtist = async () => {
          try {
              const res = await axios.get(`${URL}/api/artist?name=${alias}`)
              setArtistPage(res.data.data);
          } catch (error) {
            console.log(error);
          }
      }
      getArtist()
    }, [alias])
    
  
  return (
    <Provider store={store}>
    <SongContext.Provider value={{song, setSong, data, getCountData, setData, currentSong, setCurrentSong, isPlay, setPlay, setTitleSong, setArtists, titleSong, artists, imgPlayer, setImgPlayer, setIdList, setShow, isShow, value, setValue, valueSearch, audioIndex, setAudioIndex, suggestList, banner, top100, data, listRender, listForU, chart, setIdAlbum, chartWeek, alias, setAlias, artistPage}}>
      <Router>
        <div id="app">
          <SidebarLeft/>
          <MainRouter/>
          <Player/>
        </div>
      </Router>
    </SongContext.Provider>
    </Provider>
  );
}

export default App;
