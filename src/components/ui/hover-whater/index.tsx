import React, { memo, useRef, useState } from 'react'

import { MioCMHoverWhaterDiv } from './styles'

interface Iprops {

}

const MioCMHoverWhater:React.FC<Iprops> = memo((props) => {
  const [ mouseEnter,setMouseEnter] = useState<number>(0);
  const [ hoverP,setHovweP ] = useState<{x:number,y:number}>({x:0,y:0});
  const [ stop,setStop ] = useState<boolean>(true);
  const cardRef = useRef({} as HTMLDivElement);

  // methods
  const cardMouseEnter = (e:React.MouseEvent):void => {
    if(stop) {
      const p = {
      x: (e.clientX-cardRef.current.offsetLeft),
      y: (e.clientY-cardRef.current.offsetTop)
      }
      setHovweP(p);
      setMouseEnter(1);      
    }
  }

  const cardMouseLeave = (e:React.MouseEvent):void => {
    if(stop) {
      const p = {
        x: (e.clientX-cardRef.current.offsetLeft),
        y: (e.clientY-cardRef.current.offsetTop)
      }
      setHovweP(p);
      setMouseEnter(2);
      setStop(false);
      setTimeout(() => {
        setStop(true);
      },500);
    }
   
  }

  return (
    <MioCMHoverWhaterDiv mouseEnter={mouseEnter} hoverP={hoverP}>
      <div className="card"
           ref={cardRef}
           onMouseEnter={e => cardMouseEnter(e)}
           onMouseLeave={e => cardMouseLeave(e)}
      >
        <div className="hover"></div>
      </div>
    </MioCMHoverWhaterDiv>
  )
})

export default MioCMHoverWhater