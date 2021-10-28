export const FamilySituation = ({ prevStep, nextStep, handleChange, values })=>{
    
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
        <h3>Please provide also the student's family situation by this form in order to increase the student performance (if pass or fail) prediction :</h3>

        <label><span> Family size</span>
            <select className='select-field' value={values.famsize} onChange={handleChange('famsize')} >
                <option value='LE3'>less or equal to 3</option>
                <option value='GT3'>greater than 3</option>
            </select>
        </label><br/>
        <label><span> Parent's cohabitation status</span>
            <select className='select-field' value={values.Pstatus} onChange={handleChange('Pstatus')} >
                <option value='T'>living together</option>
                <option value='A'>apart</option>
            </select>
        </label><br/>
        <label><span> Mother's education</span>
            <select className='select-field' value={values.Medu} onChange={handleChange('Medu')} >
                <option value={0}>none</option>
                <option value={1}> primary education (4th grade)</option>
                <option value={2}> 5th to 9th grade</option>
                <option value={3}> secondary education</option>
                <option value={4}> higher education</option>
            </select>
        </label><br/>
        <label><span> Mother's job</span>
            <select className='select-field' value={values.Mjob} onChange={handleChange('Mjob')} >
                <option value='teacher'>teacher</option>
                <option value='health'> Health care related</option>
                <option value='services'> civil services (e.g. administrative or police)</option>
                <option value='at_home'> At home</option>
                <option value='other'> Other</option>
            </select>
        </label><br/>
        <label><span> Father's education</span>
            <select className='select-field' value={values.fedu} onChange={handleChange('fedu')} >
                <option value={0}>none</option>
                <option value={1}> primary education (4th grade)</option>
                <option value={2}> 5th to 9th grade</option>
                <option value={3}> secondary education</option>
                <option value={4}> higher education</option>
            </select>
        </label><br/>
        <label><span> Father's job</span>
            <select className='select-field' value={values.Fjob} onChange={handleChange('Fjob')} >
                <option value='teacher'>nominal</option>
                <option value='health'> Health care related</option>
                <option value='services'> civil services (e.g. administrative or police)</option>
                <option value='at_home'> At home</option>
                <option value='other'> Other</option>
            </select>
        </label><br/>
        <button onClick={ Previous }>Previous</button>
        <button onClick={ Continue }>Next</button>
    </div>
    )
}