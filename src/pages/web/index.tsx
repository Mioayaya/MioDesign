import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import MioWebTopNav from '../../components/web/top-nav'

const MioWebIndex:React.FC = memo(() => {
  return (
    <div>
      <MioWebTopNav>
        <div>
          <NavLink to={'/web'}><h1>web</h1></NavLink>
          <NavLink to={'/mobile'}><h1>mobile</h1></NavLink>
        </div>
        <div>
          <h1>child3</h1>
          <h1>child4</h1>
        </div>
        <div>
          <h1>child5</h1>
          <h1>child6</h1>
          <h1>child7</h1>
        </div>
      </MioWebTopNav>
    </div>
  )
})

export default MioWebIndex