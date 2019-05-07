import React, { PureComponent } from 'react';
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Write from './components/Write'
import  { actionCreators } from './store';
import { connect } from 'react-redux'
import { BackTop } from './style'
import Header  from '../../common/header';

import { HomeWrapper,HomeLeft,HomeRight } from './style'

class Home extends PureComponent {

    handleSrcollTop() {
  
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
            <Header/>
            <HomeWrapper>
                <HomeLeft>
                    <img  className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4466/cdb7c8a0406626043a00a91a145082a4ab8f508b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=".."/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Write/>
                </HomeRight>
                { this.props.showScroll ? <BackTop onClick={this.handleSrcollTop.bind(this)}>顶部</BackTop> : null }    
            </HomeWrapper>
            </div>
        )
    }
    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents();
    }

    componentWillMount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvents() {
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreators.getHomeInfo())
        },
        changeScrollTopShow() {
         if (document.documentElement.scrollTop > 100) {
             dispatch(actionCreators.changeTopShow(true))
         }else {
            dispatch(actionCreators.changeTopShow(false))
         }
        }
    }
}
const mapStateToProps = (state) => ({
  showScroll: state.getIn([
      'home','showScroll'
  ])
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)