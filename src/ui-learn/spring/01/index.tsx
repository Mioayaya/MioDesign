import { FC, useState } from 'react';
import { useSpring, config } from 'react-spring'

import { SpringLearn01Div } from './styles';

interface Props  {

}

const SpringLearn01 : FC<Props> = () => {
  const [ flip,setFlip ] = useState<boolean>(false);
  const props = useSpring({
    to: { opacity: 1 }, 
    from: { opacity: 0 },    
  })
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number:0.00},
    number: 1.00,
    delay: 1000,
    config: config.molasses,
    onRest: () => setFlip(!flip)
  })
  return (
    <SpringLearn01Div style={props}>
      {/* I will fade in */}
      {number.to(n => n.toFixed(2))}
    </SpringLearn01Div> 
  )
}

export default SpringLearn01