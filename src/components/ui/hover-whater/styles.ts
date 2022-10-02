import styled from "@emotion/styled";

type IProps = {
  mouseEnter: number;
  hoverP: {
    x: number,
    y: number
  }
}

export const MioCMHoverWhaterDiv = styled.div<IProps>`
  width: 100%;
  margin-top: 50px;
  .card {
    width: 350px;
    height: 350px;
    margin: auto;
    background-color: #bfc;
    position: relative;
    overflow: hidden;
    .hover {
      position: absolute;
      top: ${props => props.hoverP.y+'px'};
      left: ${props => props.hoverP.x+'px'};     
      background-color: #916968;
      border-radius: 50%;
      transform: translate(-50%,-50%);
      animation: ${props => {
        let _ani = 'none';
        if(props.mouseEnter===1) _ani = 'enter 0.5s ease-out forwards';
        if(props.mouseEnter===2) _ani = 'leave 0.5s ease-out forwards';        
        return _ani        
      }};
    }
  }
  // 鼠标进入时的动画
  @keyframes enter {
    0% {
      width: 0;
      height: 0;
    }

    100% {
      width: 1000px;
      height: 1000px;
    }
  }

  @keyframes leave {
    0% {
      width: 1000px;
      height: 1000px;
    }
    100% {
      width: 0;
      height: 0;
    }
  }
`
