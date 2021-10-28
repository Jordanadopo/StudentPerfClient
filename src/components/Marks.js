export const Marks = ({ prevStep, nextStep, handleChange, values })=>{
    
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    
    return (
    <div className='form-style'>
        <h3>These grades are related with the course subject:</h3>

        <label><span> First period grade (from 0 to 20)</span>
            <input className='input-field' type="number"
                min={0}
                max={20}
                value={values.G1}
                onChange={handleChange('G1')}
            /> 
        </label><br/>
        <label><span> Second period grade (from 0 to 20)</span>
            <input className='input-field' type="number"
                min={0}
                max={20}
                value={values.G2}
                onChange={handleChange('G2')}
            /> 
        </label><br/>
        {/* <label><span> Final grade (from 0 to 20)</span>
            <input className='input-field' type="number"
                min={0}
                max={20}
                value={values.G3}
                onChange={handleChange('G3')}
            /> 
        </label><br/> */}
        <button onClick={ Previous }>Previous</button>
        <button onClick={ Continue }>Next</button>

    </div>
    )
}