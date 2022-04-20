import React,{useState} from 'react'
import './styles.css'
import Navbar from './Navbar'
import Products from './Products'
import Footer from './Footer'

const HomePage = () => {
  const ChangeContext = React.createContext(null);

  const [add,display] = useState(0);
  return (
    <div>
    <ChangeContext.Provider value = {add}>
       <Products />
       </ChangeContext.Provider>
      <Navbar />
      
    </div>
  )
}

export default HomePage