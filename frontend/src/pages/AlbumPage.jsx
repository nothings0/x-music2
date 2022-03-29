import React, {useContext, useEffect, useState} from 'react'
import AlbumRight from '../components/AlbumRight';
import Artists from '../components/Artists';
import MixForU from '../components/MixForU';
import Searching from '../components/Searching';
import { SongContext } from '../Contexts/SongContext';

const AlbumPage = () => {
  const { data, listRender } = useContext(SongContext)
  const [list, setList] = useState([])
  const [title, setTitle] = useState([])
  
  useEffect(()=>{
    if(data.isAlbum){
      setList(data?.sections[0]?.items)
      setTitle(data.sections[0]?.title)
    }
  }, [])
  
  return (
    <div className='album__page'>
      <Searching/>
      <div className="album__container">
        <div className="album__page__left">
          <div className="album__page__left__info">
            <div className="album__page__left__info__img">
              <img src={data.thumbnailM} alt="" />
            </div>
            <div className="album__page__left__info__txt">
              <h3>{data.title}</h3>
              <p>lượt thích: {data.like}</p>
              <p>lượt nghe: {data.listen}</p>
            </div>
          </div>
        </div>
        <div className="album__page__right">
          <AlbumRight listRender={listRender}/>
          {
            data.isAlbum ? <div>
            <h3>{title}</h3>
            <AlbumRight listRender={list}/>
            </div> : null
          }
        </div>
      </div>
      <Artists/>
      <MixForU/>
    </div>
  )
}

export default AlbumPage