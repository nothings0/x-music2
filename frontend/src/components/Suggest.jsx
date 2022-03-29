import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SongContext } from '../Contexts/SongContext';


const Suggest = () => {
    const { setIdList, top100, getCountData } = useContext(SongContext)
    const listTop = getCountData(5, top100[0]?.items)
    return (
        <div className="suggest">
            <div className="suggest__heading">Top <span>100</span></div>
            <div className="suggest__list">
                {
                    listTop?.map((item, index) => (
                        <Link to={`album/${item.encodeId}`} className="suggest__list__item" key={index} onClick={() => {setIdList(item.encodeId)}}>
                            <div className="suggest__list__item__img">
                                <img src={item.thumbnail} alt="" />
                            </div>
                            <h3>{item.title}</h3>
                            <p>Nhiều nghệ sĩ</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
};

export default Suggest;
