import React, { useState, useEffect } from "react";
import axios from "axios";

export const Result = ({values, reset})=>{
    const prediction = 'The student will ';
    const [res, setRes] = useState({});
    const resultClassName = `resultbox  ${res['predict']}`; 
    const resultStatusClassName = `text-${res['predict']}`;
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    // const test_url = 'http://127.0.0.1:8000/classify/'
    const prod_url = 'https://trickydjangoapp.herokuapp.com/classify/'

    useEffect(() => {
        const fetchPrediction = async () => {
            setIsLoading(true);
            setHasError(false);
            try {
                const response = await axios({
                    method: 'post',
                    url: prod_url,
                    headers: {}, 
                    data: values
                });
            
                setRes(await response.data);
    
            } catch (error) {
                setHasError(true);
            }
            
            setIsLoading(false);
        };

        fetchPrediction()

    },[]);

        
     

    return (
    <React.Fragment>
     {hasError && <div className='center'> <h4 className='text-failed'>Something went wrong &#128531;</h4> <button className='submit'  onClick={ reset }>{'<  '}Try another prediction</button></div>}
      {isLoading ? (
        <div className='center'>
            <h3 className='loading'>&#129488; Please wait until the analysis of the information you provided finished &#129488;<br/>You'll the result of prediction soon...</h3>
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
      ) : hasError ? (<></>): (
        <>
            <h5 className={resultStatusClassName}>THE RESULT IS :</h5>
            <div className={resultClassName}>
                <h1 className='res'>{res['predict']==='passed' ? `${prediction} succeed` : `${prediction} fail`}</h1>
            </div>
            <button className='submit'  onClick={ reset }>{'<  '}Try another prediction</button>
        </>
        )
    }

    </React.Fragment>
    )
}