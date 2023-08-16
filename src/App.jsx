import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import DataContext from './DataContext'
import Number from './Number'
import Increase from './Increase'

function App() {

 const [number, setNumber] = useState(5)
  
  return (
    <div>
      <DataContext.Provider value={{number, setNumber}}>
       <Number/>
       <Increase/>
      </DataContext.Provider>
    </div>
  )
}

export default App