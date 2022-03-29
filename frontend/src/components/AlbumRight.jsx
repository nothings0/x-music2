import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { SongContext } from '../Contexts/SongContext';

const AlbumRight = (props) => {

    const { song, setSong, setPlay, setTitleSong, setArtists, setImgPlayer, setAudioIndex } = useContext(SongContext)

    const handleClick = (idSong, title, artists, img, index) => {
        setSong(idSong)
        setTitleSong(title)
        setArtists(artists)
        setImgPlayer(img)
        setAudioIndex(index)
        setPlay(true)
    }

  return (
    <div className="album__right">
        {
            props.listRender?.map((item,index) => (
                <div className={`album__right__item ${song === item.encodeId ? 'active' : ''}`} key={index} onClick={() => handleClick(item.encodeId, item.title || item.name, item.artistsNames || item.artist, item.thumbnail, index)}>
                    
                    <div className="album__right__item__right">
                        {
                            props.rank ? <div className="album__right__item__right__rank">
                            {index + 1}
                        </div> : null
                        }
                        <div className="album__right__item__right__ava">
                            <img src={item.thumbnail} alt="" />
                        </div>
                        <div className="album__right__item__right__txt"> 
                            <div className="album__right__item__right__txt__name">{item.title || item.name}</div>
                            <div className="album__right__item__right__txt__author">{item.artistsNames || item.artist}</div>
                        </div>
                    </div>
                    
                </div>
            ))
        }
    </div>
  )
}

AlbumRight.propTypes = {
    rank: PropTypes.number
}

export default AlbumRight