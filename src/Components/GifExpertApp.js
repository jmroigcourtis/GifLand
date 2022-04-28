import React, {useState} from 'react'
import { CategoryAdd } from './CategoryAdd'
import FetchApi from './GifGrid'


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])
    const [inputValue, setinputValue] = useState('')
    const [rangeValue, setRangeValue] = useState(5)


    return (<>
        <h2 className='mt-2 text-center'>Gifland</h2>
        <CategoryAdd 
        setCategories={ setCategories } 
        categories={categories} 
        setRangeValue={setRangeValue} 
        rangeValue={rangeValue} 
        setinputValue={setinputValue}
        inputValue={inputValue}
        />
            {categories.map( cat => 
                <FetchApi 
                categories={cat}
                rangeValue={rangeValue}/>
                )
            }            
    </>)
}

export default GifExpertApp