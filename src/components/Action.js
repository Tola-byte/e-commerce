import React , {useState} from 'react'
import Navbar from './Navbar';
const Action = () => {

    const [ variable , setMethod] = useState(0);
    var myDetails = React.createContext(null);
  return (
    <div>
    <myDetails.Provider value = { variable }>
    <Navbar value = {variable}/>
    </myDetails.Provider>
    </div>
  )
}

export default Action