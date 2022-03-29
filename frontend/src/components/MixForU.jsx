import React,{ useContext} from 'react';
import { Link } from 'react-router-dom';

import { SongContext } from '../Contexts/SongContext';

const MixForU = () => {
    const { listForU, setIdList } = useContext(SongContext)
    const handleClick = (id) => {
      setIdList(id)
    }

  return (
    <div className='mix'>
      <div className="mix__heading">
        <span>Mix </span>
        riêng cho bạn
      </div>
      <div className="mix__container">
        {
          listForU?.map((item, index) => (
            <Link to={`/album/${item.encodeId}`} className="mix__container__item" key={index} onClick={() => handleClick(item.encodeId)}>
              <div className="mix__container__item__img">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="mix__container__item__txt">
                <p>nhiều nghệ sĩ</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default MixForU