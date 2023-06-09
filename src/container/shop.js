import {cakeorder,cakeRestocked}  from '../redux/feature/cake/cakeSlice'
import {ordericecream,restockedIcecream} from '../redux/feature/icecream/icecreamSlice'
import {connect} from 'react-redux'
import ShopContainer from './ShopContainer'

const mapStateToProps = (state) => {
    return {
        NumberCakes :state.cake.numOfCakes,
        NumberIcecream : state.icecream.numOfIcecreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(cakeorder()),
        cakerestocked : () =>dispatch(cakeRestocked()),
        buyIce:() =>dispatch(ordericecream()),
        icecreamRestocked :() => dispatch(restockedIcecream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(ShopContainer)