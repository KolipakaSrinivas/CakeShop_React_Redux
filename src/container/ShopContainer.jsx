import CakeContainer from './shopItems/CakeContainer'
import IcecreamContainer from '../container/shopItems/IcecreamContainer/'

function ShopContainer(props) {
  return (
    <div className='shop--container'>
        <h1> 🎂🍰 {props.NumberCakes}</h1>
        <h1>🍧🍦{props.NumberIcecream}</h1>
        <CakeContainer/>
        <br/>
        <IcecreamContainer/>
    </div>
  )
}

export default ShopContainer

