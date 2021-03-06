import styled from 'styled-components';
import logoPic from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
  position: relative
  height: 56px;
  border-bottom: 1px solid #f0f0f0
`
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  display: block;
  width: 100px;
  height: 56px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px
  height: 100%
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto
`
export const NavItem = styled.div`
  line-height: 56px;
  padding:0 15px;
  font-size: 17px;
  color: #333333;
  &.left {
      float: left;
  }
  &.right {
      float: right
      color: #969696
  }
  &.active {
      color: #ea6f5a
  }
`
export const SearchWrapper = styled.div`
   float: left;
   position: relative;
   .zoom {
       position: absolute;
       right: 5px;
       bottom: 5px;
       width: 30px;
       line-height: 30px;
       border-radius: 15px;
       text-align: center
       &.focused {
           background: #888
           color: #fff
       }
   }

`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
   width: 240px;
   height: 38px;
   padding: 0 30px 0 20px;
   box-sizing: border-box;
   margin-top: 9px;
   margin-left: 20px;
   border: none;
   outline: none;
   border-radius: 19px;
   background: #eee;
   font-size: 14px;
   color: #666;
   &::placeholder {
       color: #999
   }
   &.focused {
      width: 315px
   }
   &.slide-enter {
      transition:all .5s ease-out;
   }
   &.slide-enter-active {
      width: 315px;
   }
   &.slide-exit {
      transition:all .5s ease-out;
   }
   & .slide-exit-active {
     width: 240px;
   }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  background-color: #fff
  box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const SearchInfoTitle = styled.div`
   margin-top: 20px;
   margin-bottom: 15px
   line-height: 20px;
   font-size: 14px;
   color: #787878
`
export const SearchInfoSwitch = styled.span`
   float: right   
   font-size: 13px
   cursor: pointer
   .spin {
       display: block
       float: left
       font-size: 12px
       margin-right: 2px
       transition: all .4s ease-in
       transform-origin: center center;
   }
`
export const SearchInfoList = styled.div`
   overflow: hidden;
`
export const SearchInfoItem = styled.a`
   display: block;
   float: left
   line-height: 20px;
   padding: 0 5px;
   margin-right: 10px;
   margin-bottom: 10px
   font-size: 12px;
   border: 1px solid #ddd;
   color: #969696
   border-ridius: 3px
`
export const Addition = styled.div`
   position: absolute;
   right: 0;
   top: 0;
   height: 56px
`

export const Button = styled.div`
   float:right;
   margin-top: 9px;
   line-height: 38px;
   margin-right: 20px;
   border: 1px solid rgb(236,97,73);
   border-radius: 19px
   padding: 0 20px
   font-size: 14px
   &.reg {
       color: #ea6f5a
   }
   &.writing {
       color: #fff
       background: #ea6f5a
   }
`