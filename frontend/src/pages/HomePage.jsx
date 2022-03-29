import React from 'react'
import Searching from '../components/Searching'
import SidebarCenter from '../components/SidebarCenter'
import SidebarRight from '../components/SidebarRight'

const HomePage = () => {
  return (
    <>
      <Searching/>
      <div className="row wrap">
          <div className="col l-10 m-12 c-12 sidebar__center">
              <SidebarCenter/>
          </div>
          <div className="col l-2 wrap">
              <SidebarRight/>
          </div>
      </div>
    </>
  )
}

export default HomePage