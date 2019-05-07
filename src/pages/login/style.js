import styled from 'styled-components';

export const LoginWrapper = styled.div`
   height: 100%
   min-height: 950px
   font-size: 14px
   text-align: center
   background: #f1f1f1
   box-sizing: border-box
`
export const LoginIcon = styled.div`
  position: absolute;
  top: 56px;
  margin-left:50px
  img {
      width: 100px
  }
`
export const LoginBox = styled.div`
  position: relative
  top: 250px
  width: 300px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  display: inline-block
  & .name {
      position: absolute
      top:70px
      left:85px
      font-size: 18px
      color: #969696
  }
  & .password {
      position: absolute
      top:130px
      left: 85px
      font-size: 18px
      color: #969696
  }
`
export const Input = styled.input`
  width: 200px
  height: 50px
  border-bottom: none
  border: 1px solid #c8c8c8
  margin-bottom: 0
  padding: 4px 12px 4px 35px;
  border-radius: 4px 4px 0 0
  background-color: hsla(0,0%,71%,.1)
`
export const Signbtn = styled.div`
  margin-top: 20px
  margin-left: 30px
  width: 200px
  padding: 9px 18px;
  font-size: 18px
  border: none;
  border-radius: 25px
  background: #3194d0
  color: #fff;
  cursor: pointer
  outline: none;
  clear: both
`