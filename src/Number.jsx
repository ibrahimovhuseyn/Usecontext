import React, { useContext } from 'react'
import DataContext from './DataContext'

function Number() {
    const {number, setNumber} = useContext(DataContext)
  return (
    <div>{number}</div>
  )
}

export default Number