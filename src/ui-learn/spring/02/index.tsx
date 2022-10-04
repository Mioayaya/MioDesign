import { FC, useState, useEffect } from 'react';
import { useSpring, config, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import { SpringLearn02Div } from './styles';

interface Props  {

}

const SpringLearn02 : FC<Props> = () => {
  const [ step,setStep ] = useState<{x:number,y:number}>({x:0,y:0});
  const [ flag,setFlag ] = useState<boolean>(false);
  const [ Y,setY ] = useState<number>(0);
  const STEP:number = 5;
  const [{ x,y,rotate }, api] = useSpring(() => ({
    x: step.x,
    y: step.y,   
    rotate: 0,
    config: config.wobbly
  }))
  const bind = useDrag(({ active,movement:[x,y]}) => {
    if(active) {
      setStep({x,y});
      setY(y);
    }else {
      setStep({x:-x,y:0});
      setFlag(true);
    }
  })
  
  useEffect(() => {
    api.start({y:step.y,x:step.x,rotate:90});
    if(flag) {
      setTimeout(() => {
        let _x:number,_y:number;
        step.x>0?_x=-step.x+STEP:_x=-step.x-STEP;        
        _y=0;
        setStep({x:_x,y:_y});
        if(Math.abs(step.x)<=STEP) {
          setStep({x:0,y:0});
          setFlag(false);
        }             
      },100)
    }
  }, [step])
  
  return (
    <SpringLearn02Div {...bind()}>
      <animated.div className="sakana"  style={{ x,y,rotate: -30 }}>        
      </animated.div>
    </SpringLearn02Div> 
  )
}

export default SpringLearn02