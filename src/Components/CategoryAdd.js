import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

export const CategoryAdd = ( 
    {
    categories, 
    setCategories, 
    rangeValue, 
    setRangeValue, 
    inputValue, 
    setinputValue
} ) => {

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       inputValue.length <= 0 ? setCategories([categories]) : setCategories([inputValue])
    }

    const handleRangeValue = (e) => {
        setRangeValue(e.target.value)
    } 

  return (
      <>
      <form className='formStyle' onSubmit={handleSubmit}>
          <input 
              type="text"
              placeholder="Buscar"
              value={inputValue}
              onChange={handleInputChange}
          />
          <p className='text-center'>Filtrar por cantidad: {rangeValue}</p>
          <input 
          type='range'
          value={rangeValue}
          onChange={handleRangeValue}
          />
      <Button className='btn mt-2' onClick={handleSubmit}><p>Buscar</p></Button>
      </form>
      </>
  )
}


CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}