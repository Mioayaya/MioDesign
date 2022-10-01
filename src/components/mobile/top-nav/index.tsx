import React, { memo, ReactElement } from 'react'

import { MioMBbTopNavDiv } from './styles'

interface Iprops {
  children: Array<ReactElement>
}

const MioMBbTopNav:React.FC<Iprops> = memo((props) => {  
  const { children } = props;  
  
  return (
    <MioMBbTopNavDiv >
      <>
        {children[0]}
      </>
      <>
        {children[1]}
      </>      
    </MioMBbTopNavDiv>
  )
})


export default MioMBbTopNav