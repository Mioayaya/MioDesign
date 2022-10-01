import styled from "@emotion/styled";

type loadingProps = {
}

export const MioWebTopNavDiv = styled.div<loadingProps>`
  width: 100vw;
  min-width: 1088px;
  height: 75px;
  padding: 0 60px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0 0 10px 3px #e3e3e3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &>:nth-of-type(1) {
    
  }

  &>:nth-of-type(2) {
    justify-content: center;
  }

  &>:last-of-type {
    justify-content: flex-end;
  }

  &>* {
    flex: 1;
    display: flex;
    &>*:not(:last-of-type) {
      margin-right: 10px;
    }
  }
  
`
