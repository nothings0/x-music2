import React,{useContext} from 'react'
import AlbumRight from '../components/AlbumRight'
import Chart from '../components/Chart'
import Searching from '../components/Searching'
import WeekChart from '../components/WeekChart';

import { SongContext } from '../Contexts/SongContext';


const ChartPage = () => {

  const { chart, chartWeek, getCountData } = useContext(SongContext)

  const listChart = getCountData(10, chart.items)
  const rank = Object.keys(listChart)
  return (
    <>
    <Searching/>
    <Chart/>
    <div className="rank-container">
      <AlbumRight listRender={listChart} rank={rank}/>
    </div>
    <WeekChart/>
    </>
  )
}

export default ChartPage