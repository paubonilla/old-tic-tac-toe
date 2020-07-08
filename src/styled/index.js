import styled from 'styled-components'

export const PageWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(#F8F9FD, #2997F1);
`

export const GameInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  margin: 0 auto;

`

export const Button = styled.button`
  /* display: inline; */
  /* margin: 20px 0; */
  height: 25px;
  width: 120px;
  border-radius: 5px;
  border: none;
  outline: none;
  background: #dcab6f;
  cursor: pointer;
`

export const SquareButton = styled.button`
  background: #f6fe81;
  color: #173ef2;
  border: 1px solid #4a2908;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  width: 80px;
  height: 80px;
  text-align: center;
  font-family: 'Special Elite', cursive;
  font-size: 40px;
  font-weight: bold;
  line-height: 80px;

  &:focus {
    outline: none;
  }
`

export const PlayerInfo = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`

export const PlayerStatus = styled.div`
  font-family: 'Special Elite',cursive;
  font-size: 20px;
  color: #f40804;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`

export const MoveList = styled.li`
  display: flex;
  margin: 20px 0;
`

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BorderRow = styled.div`
  display: flex;
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`