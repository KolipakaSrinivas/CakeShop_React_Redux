// import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {cakeorder,cakeRestocked } from '../../redux/feature/cake/cakeSlice'
import {useState} from 'react'

function CakeContainer() {
    // const cakes = useSelector(state => state.cake)
    const Dispatch = useDispatch()
    const [count,setCount] = useState(0)

    function handleChange(e) {
        setCount(e.target.value)
    }

    const restock = () => {
        Dispatch(cakeRestocked(parseInt(count)))
        setCount(0)
    }


    return (
        <div className='shop--items'>
            {/* <h1>Number of Cakes {cakes.numOfCakes}</h1> */}
            <div className='button'>
            <button onClick={()=>Dispatch(cakeorder())}>Buy Cake</button>
            <input type='number' value={count} onChange={handleChange} />
            <button onClick={restock} >Restock</button>
            </div>
        </div>
      )
}

export default CakeContainer