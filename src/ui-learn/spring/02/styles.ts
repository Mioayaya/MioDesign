import styled from "@emotion/styled";
import { animated } from 'react-spring'

interface Iprops {
}

export const SpringLearn02Div = styled(animated.div)<Iprops>`
  width: 300px;
  height: 300px;
  margin: auto;
  .sakana {    
    user-select: none;
    width: 100%;
    height: 100%;    
    background-image: url("/src/assets/5.jpg");
    background-size: cover;
    
  }
`