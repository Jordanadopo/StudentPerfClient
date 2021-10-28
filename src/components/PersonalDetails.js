export const PersonalDetails = ({ prevStep, nextStep, handleChange, values })=>{
    
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    return(
    <div className='form-style'>
        <h3>Please provide also these personal details in order to increase the student performance (if pass or fail) prediction :</h3>

        <label><span> Student's sex</span>
            <select className='select-field' value={values.sex} onChange={handleChange('sex')} >
                <option>--select sex--</option> 
                <option value='M'>Male</option>
                <option value='F'>Female</option>
            </select>
        </label><br/>
        <label><span> Student's age</span>
            <input className='input-field' 
                type="number"
                min={15}
                max={22}
                value={values.age} 
                onChange={handleChange('age')}
            />
        </label><br/>
        <label><span> Student's home address type</span>
            <select className='select-field' value={values.address} onChange={handleChange('address')} >
                <option>--select home address type--</option> 
                <option value='U'>urban</option>
                <option value='R'>rural</option>
            </select>
        </label><br/>
        <button onClick={ Previous }>Previous</button>
        <button onClick={ Continue }>Next</button>
    </div>
    )
}