import React, { Component } from 'react';
import { DetailWrapper, HeaderDetail, Content } from './style';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Header  from '../../common/header';

class Detail extends Component {
    render () {
        const { title, content } = this.props
        return (
           <div>
            <Header/>
            <DetailWrapper>
                <HeaderDetail>{title}</HeaderDetail>
                <Content dangerouslySetInnerHTML={{__html:content}}>
                </Content>
            </DetailWrapper>
          </div>
        )
    }
    componentDidMount() {
      this.props.getDetail(this.props.match.params.id)
    }
}
const mapStateToProps = (state) => {
    return {
        title: state.getIn([
            'detail', 'title'
        ]),
        content: state.getIn([
            'detail', 'content'
        ])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetail(id) {
           dispatch(actionCreators.getDetail(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail))