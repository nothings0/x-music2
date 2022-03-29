import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SongContext } from '../Contexts/SongContext';


const SuggestList = (props) => {
    const { setIdList } = useContext(SongContext)

    const handleClick = (id) => {
        setIdList(id)
    }
    const suggestList = props.listRender
  return (
    <div className="suggest__album">
        <div className="suggest__album__heading">
            Suggest <span>AlBum</span>
        </div>
        <div className="suggest__album__container">
            {
                suggestList?.map((item, index) => (
                    <Link key={index} to={`/album/${item.encodeId}`} onClick={() => handleClick(item.encodeId)}>
                        <div className="suggest__album__container__item" >
                            <div className="suggest__album__container__item__img">
                                <img src={item.thumbnail} alt="" />
                            </div>
                            <div className="suggest__album__container__item__txt">
                                <h3>{item.title}</h3>
                                <p>{item.artistsNames}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
};

export default SuggestList;