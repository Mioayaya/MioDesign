import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import MioMBbTopNav from '../../components/mobile/top-nav'

const MioMBIndex:React.FC = memo(() => {
  return (
    <div>
      <MioMBbTopNav >
        <div>
            <NavLink to={'/web'}><h1>web</h1></NavLink>
            <NavLink to={'/mobile'}><h1>mobile</h1></NavLink>
          </div>
          <div>
            <h1>child3</h1>
            <h1>child4</h1>
            <h1>child5</h1>
            <h1>child6</h1>
          </div>          
      </MioMBbTopNav>
    </div>
  )
})

export default MioMBIndex