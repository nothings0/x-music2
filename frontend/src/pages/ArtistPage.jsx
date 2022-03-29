import React,{useContext} from 'react'
import AlbumRight from '../components/AlbumRight';
import Searching from '../components/Searching';
import SuggestList from '../components/SuggestList';
import { SongContext } from '../Contexts/SongContext';

const ArtistPage = () => {
    const { artistPage, getCountData } = useContext(SongContext)
    const listRenderSong = getCountData(20, artistPage?.sections[0].items)
    const listRenderAlbum = getCountData(5, artistPage?.sections[1].items)
  return (
    <div className="artist_page">
        <Searching/>
        <div className="artist_page__info">
            <div className="artist_page__info__left">
                <div className="artist_page__info__left__intro">
                    <h2>{artistPage?.name}</h2>
                    <p>{artistPage?.sortBiography}</p>
                </div>
                <div className="artist_page__info__left__desp">
                    <div>Tên thật là <span>{artistPage?.realname}</span></div>
                    <div>Sinh ngày <span>{artistPage?.birthday}</span></div>
                    <div>Quốc tịch <span>{artistPage?.national}</span></div>
                    <div><span>{artistPage?.follow}</span> người theo dõi</div>
                </div>
            </div>
            <div className="artist_page__info__right">
                <div className="artist_page__info__right__img">
                    <img src={artistPage?.thumbnailM} alt="" />
                </div>
            </div>
        </div>
        <div className="artist_page__song">
            <AlbumRight listRender={listRenderSong}/>
        </div>
        <div className="artist_page__album">
            <SuggestList listRender={listRenderAlbum}/>
        </div>
    </div>
  )
}

export default ArtistPage