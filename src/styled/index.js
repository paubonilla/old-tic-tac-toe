import styled from 'styled-components'

export const PageWrapper = styled.div`
  /* margin: 20px; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(#F8F9FD, #2997F1);
`

export const GameWrapper = styled.div`
  position: relative;
  display: flex;
`

export const GAmeInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
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
  border: 2px solid #4a2908;
  /* border: none; */
  border-radius: 10px;
  /* float: left; */
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
  margin: 0 20px 0;
  display: flex;
  flex-direction: column;
`

export const PlayerStatus = styled.div`
  font-family: 'Special Elite', cursive;
  color: #f40804;
  width: 200px;
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