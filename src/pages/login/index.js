import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginIcon, LoginBox, Input, Signbtn } from './style'
import { actionCreators } from './store';

class Login extends PureComponent {
    render () {
        const { loginStatus, login } = this.props
        if(!loginStatus) {
            return(
                <LoginWrapper>
                <LoginIcon>
                    <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""/>
                </LoginIcon>
                <LoginBox>
                    <i className="iconfont name">&#xe601;</i>
                    <Input placeholder="邮箱或者手机号" innerRef={(input) => {this.account = input}}/>
                    <Input placeholder="密码" type='password' innerRef = {(input) => {this.password = input}}/>
                    <i className="iconfont password">&#xe79f;</i>
                    <Signbtn onClick={() => login(this.account,this.password)}>登录</Signbtn>
                </LoginBox>
            </LoginWrapper>  
            )
        }else {
           return <Redirect to="/"></Redirect>
        }
        
    }
}

const mapState = (state) => ({
   loginStatus: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
   login(accountElem, passwordElem) {
       dispatch(actionCreators.login(accountElem.value,passwordElem.value))
   }
})

export default connect(mapState, mapDispatch)(Login);