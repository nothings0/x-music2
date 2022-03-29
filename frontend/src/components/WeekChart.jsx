import React, { useContext } from 'react'
import { SongContext } from '../Contexts/SongContext';
import AlbumRight from './AlbumRight';


const WeekChart = () => {
    
  const { chartWeek, getCountData } = useContext(SongContext)
    const korea = getCountData(5, chartWeek.korea.items)
    const vn = getCountData(5, chartWeek.vn.items)
    const usuk = getCountData(5, chartWeek.us.items)
    const rank = Object.keys(korea)
  return (
    <div className="week_chart">
        <div className="week_chart__heading">
            Bảng xếp hạng tuần
        </div>
        <div className="week_chart__box">
            <div className="week_chart__box__item">
                <h3>Việt nam</h3>
                <AlbumRight listRender={vn} rank={rank}/>
            </div>
            <div className="week_chart__box__item">
                <h3>us - uk</h3>
                <AlbumRight listRender={usuk} rank={rank}/>
            </div>
            <div className="week_chart__box__item">
                <h3>Korea</h3>
                <AlbumRight listRender={korea} rank={rank}/>
            </div>
        </div>
    </div>
  )
}

export default WeekChart