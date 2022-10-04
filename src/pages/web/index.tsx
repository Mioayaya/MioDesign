import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import MioCMHoverWhater from '../../components/ui/hover-whater'

import MioWebTopNav from '../../components/web/top-nav'
import SpringLearn01 from '../../ui-learn/spring/01'
import SpringLearn02 from '../../ui-learn/spring/02'

const MioWebIndex:React.FC = memo(() => {
  return (
    <div>
      <MioWebTopNav>
        <div>
          <NavLink to={'/web'}><h1>web</h1></NavLink>
          <NavLink to={'/mobile'}><h1>mobile</h1></NavLink>
        </div>
        <div>
          <h1>child1</h1>
          <h1>child2</h1>
        </div>
        <div>
          <h1>child3</h1>
          <h1>child4</h1>
          <h1>child5</h1>
        </div>
      </MioWebTopNav>
        <SpringLearn01 />
        <SpringLearn02 />
    </div>
  )
})

export default MioWebIndex