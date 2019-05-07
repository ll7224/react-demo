import React, { PureComponent } from 'react';
import { RecomendWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux'

class Recommend extends PureComponent {
    render () {
        const { recommendList } = this.props
        return (
            <RecomendWrapper>
                {
                recommendList.map((item) => {
                    return (
                     <RecommendItem key={item.get('id')}>
                        <img  className="list-pic" src={item.get('imgUrl')} alt=""/>
                     </RecommendItem>
                    )
                })
                }
            </RecomendWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        recommendList: state.getIn(['home','recommendList'])
    }
}

export default connect(mapStateToProps, null)(Recommend)