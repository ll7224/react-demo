import styled from 'styled-components';

export const HomeWrapper = styled.div`
   overflow: hidden
   width: 960px;
   margin: 0 auto;
`;
export const HomeLeft = styled.div`
   margin-left: 15px;
   padding-top: 30px;
   width: 625px;
   float: left
   .banner-img {
       width: 625px;
       height: 270px;
       border-radius: 5px
   }
`;
export const HomeRight = styled.div`
   width: 280px;
   float: right
`;
//专题组件样式
export const TopicWrapper = styled.div`
   overflow:hidden;
   padding: 20px 0 10px 0
   margin-left: -18px
   border-bottom: 1px solid #dcdcdc
`
export const TopicItem = styled.div`
   float: left;
   height: 32px;
   line-height: 32px;
   margin-left: 18px;
   margin-bottom: 18px;
   font-size: 14px
   padding-right: 10px;
   background-color: #f7f7f7;
   color: #000
   border:1px solid #d7d7d7
   border-radius:4px
   .topic-pic {
       display: block;
       float: left;
       width: 32px;
       height: 32px;
       margin-right: 10px
   }
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc
  .list-pic {
      float: right;
      display: block;
      width: 125px;
      height: 100px
      border-radius: 10px
  }
`
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
     line-height: 27px;
     font-size: 18px;
     font-weight: bold;
     color: #333
     margin-bottom: 10px;
  }
  .desc {
     font-size: 13px;
     line-height: 24px;
     color: #999;
  }
`
export const RecomendWrapper = styled.div`
  margin:30px 0 10px 0;
  width: 280px
`
export const RecommendItem = styled.div`
  width: 280px;
  heigh: 50px;
  .list-pic {
    width: 280px;
    heigh: 50px;
  }
`
export const WriterWrapper = styled.div`
   float:left
   padding: 10px 22px;
   margin-bottom: 30px;
   border-radius: 6px;
   border: 1px solid #f0f0f0;
   .down-pic{
       width: 60px;
       height: 60px;
       opacity: .8
       vertical-align: middle
   }
`
export const WriterInfo = styled.div`
    display: inline-block;
    vertical-align: middle
    margin-left: 7px
    .title {
        font-size: 15px;
        color: #333
    }
    .desc {
        font-size: 13px;
        color: #999
        margin-top:5px
    }
`

export const LoadMore = styled.div`
   width: 100%;
   height: 40px;
   line-height: 40px;
   margin: 30px auto 60px;
   border-radius: 20px;
   background-color: #a5a5a5;
   text-align: center;
   font-size: 15px;
   color: #fff;
   cursor: pointer;
`
export const BackTop = styled.div`
   position: fixed;
   bottom: 40px;
   right: 40px
   width: 50px;
   height: 50px;
   line-height: 50px
   text-align: center;
   border: 1px solid #ccc;
   font-size: 10px
`