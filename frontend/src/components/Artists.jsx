import React,{ useContext} from 'react';
import { Link } from 'react-router-dom';

import { SongContext } from '../Contexts/SongContext';


const Artists = () => {

  const { data, setAlias } = useContext(SongContext)
  const listArtist = data?.artists

  return (
    <div className='artist'>
      <div className="artist__heading">
        <span>Nghệ sĩ </span>
        Tham gia
      </div>
      <div className="artist__container">
        { listArtist?.length > 0 ? 
          listArtist.map((item, index) => (
            <div className="artist__container__item" key={index}>
              <div className="artist__container__item__img">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="artist__container__item__txt">
                <h3>{item.name}</h3>
                <p>{item.totalFollow} quan tâm</p>
              </div>
              <div className="artist__container__item__btn">
                <Link to={item.link} onClick={() => setAlias(item.alias)}>quan tam</Link>
              </div>
            </div>
          )) : null
        }
      </div>
    </div>
  )
}

export default Artists