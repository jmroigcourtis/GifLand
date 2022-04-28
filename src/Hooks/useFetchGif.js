import { useEffect, useState } from "react"
import {getGif} from '../Helpers/getGif';

export const useFetchGifs = ({categories, rangeValue}) => {
    const [state, setState] = useState({
        data: [],
        loading: true  
    });

    useEffect(() => {

            getGif({ categories, rangeValue })
            .then(img => {

                    setTimeout(()=>{
                        setState({
                        data: img,
                        loading: false
                    });
                
                },1000)

            })

        
    }, [categories, rangeValue])

    return state;
}