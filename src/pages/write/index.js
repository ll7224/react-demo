import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import Header from '../../common/header'
class Write extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        if(loginStatus){
            return (
                <div>
                <Header/>
                <div>写文章</div>
                </div>
            )
        }else{
            return <Redirect to= '/login'/>
        }

    }
}

const mapState = (state) => ({
   loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({

})
export default connect(mapState, mapDispatch)(Write)