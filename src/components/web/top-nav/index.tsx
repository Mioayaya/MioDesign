import React, { memo, ReactElement } from 'react'

import { MioWebTopNavDiv } from './styles'

interface Iprops {
  children: Array<ReactElement>
}

const MioWebTopNav:React.FC<Iprops> = memo((props) => {  
  const { children } = props;  
  
  return (
    <MioWebTopNavDiv >
      <>
        {children[0]}
      </>
      <>
        {children[1]}
      </>
      <>
        {children[2]}
      </>
    </MioWebTopNavDiv>
  )
})


export default MioWebTopNav