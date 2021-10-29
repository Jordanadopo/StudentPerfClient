import { useState, useEffect } from "react";
import axios from "axios";

export const Result = ({values, reset})=>{

    const [res, setRes] = useState({});
    const resultClassName = `resultbox  ${res['predict']}`; 
    const resultStatusClassName = `text-${res['predict']}`;

 
    useEffect(() => {
        async function fetchPrediction () {
            const response = await axios({
                method: 'post',
                url: 'https://trickydjangoapp.herokuapp.com/classify/',
                headers: {}, 
                data: values
            });
        
            setRes(response.data);
        }

        fetchPrediction()

    },[]);

        
     

    return (
    <>
    <h5 className={resultStatusClassName}>RESULT:</h5>
    <div className={resultClassName}>
       <h1 className='res'>{res['predict']}</h1>
    </div>
    <button className='submit'  onClick={ reset }>{'<  '}Retry</button>
    </>
    )
}