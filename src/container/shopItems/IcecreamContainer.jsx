import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {restockedIcecream,ordericecream} from '../../redux/feature/icecream/icecreamSlice'
// import { useSelector } from 'react-redux'

function IcecreamContainer() {
  // const icecream =  useSelector(state => state.icecream)
  const Dispatch = useDispatch()
  const [value,setValue] = useState(0)


  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const restock = () => {
      Dispatch(restockedIcecream(parseInt(value)))
      setValue(0)
  }

  return (
    <div className='shop--items'>
        {/* <h2> Number of icecream🍦🍧{icecream.numOfIcecreams}</h2> */}
        <div className='button'>
         <button onClick={()=>Dispatch(ordericecream())}>Buy Icecream  </button>
        <input type='number' value={value} onChange={handleChange} />
        <button onClick={restock}>Restock </button>
        </div>
    </div>
  )
}

export default IcecreamContainer