import styled from "@emotion/styled";

type loadingProps = {
}

export const MioMBbTopNavDiv = styled.div<loadingProps>`
  width: 100vw;  
  height: 15vh;
  padding: 0 2vw;
  overflow: hidden;  
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0 0 10px 3px #e3e3e3;
  display: flex;
  flex-direction: column;    

  &>* {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`
