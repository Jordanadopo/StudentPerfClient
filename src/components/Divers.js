export const Divers = ({ prevStep, nextStep, handleChange, values })=>{
    
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
        <button onClick={ Previous }>Previous</button>
        <button onClick={ Continue }>Next</button>
        <h3>Please provide also these informations in order to increase the student performance (if pass or fail) prediction </h3>
        <label><span> Reason to choose this school ( {values.school} )</span>
            <select className='select-field' value={values.reason} onChange={handleChange('reason')} >
                <option value='home'>Close to home</option>
                <option value='reputation'>School reputation</option>
                <option value='course'>Course preference</option>
                <option value='other'>Other</option>
            </select>
        </label><br/>
        <label><span> Student's guardian</span>
            <select className='select-field' value={values.guardian} onChange={handleChange('guardian')} >
                <option value='mother'>Mother</option>
                <option value='father'>Father</option>
                <option value='other'> Other</option>
            </select>
        </label><br/>
        <label><span> Home to school travel time</span>
            <select className='select-field' value={values.traveltime} onChange={handleChange('traveltime')} >
                <option value={1}>{' < 15 min'}</option>
                <option value={2}> 15 to 30 min</option>
                <option value={3}> 30 min to 1 hour</option>
                <option value={4}>{' > 1 hour'}</option>
            </select>
        </label><br/>
        <label><span> Weekly study time</span>
            <select className='select-field' value={values.studytime} onChange={handleChange('studytime' )} >
                <option value={1}>{' < 2 hours'}</option>
                <option value={2}> 2 to 5 hours</option>
                <option value={3}> 5 to 10 hours</option>
                <option value={4}>{' > 10 hours'}</option>
            </select>
        </label><br/>
        <label><span> Number of past class failures</span>
            <input className='input-field' 
                type="number"
                min={0}
                max={4}
                value={values.failures} 
                onChange={handleChange('failures')}
            />
        </label><br/>
        <label>
            <input className='input-field' type="checkbox"
                defaultChecked={values.schoolsup}
                value={values.schoolsup}
                onChange={handleChange('schoolsup')}
            /><span> Extra educational support</span>
        </label><br/>
        <label>
            <input className='input-field' type="checkbox"
                defaultChecked={values.famsup}
                value={values.schoolsup}
                onChange={handleChange('famsup')}
            /><span> Family educational support</span>
            
        </label><br/>
        <label>
            <input className='input-field' type="checkbox"
                defaultChecked={values.paid}
                value={values.paid}
                onChange={handleChange('paid')}
            /><span> Extra paid class within the course subject</span>
        </label><br/>
        <label>
            <input className='input-field' type="checkbox"
                defaultChecked={values.activities}
                value={values.activities}
                onChange={handleChange('activities')}
            /><span> Extra-curricular activities</span>
        </label><br/>
        <label>
            <input className='input-field' type="checkbox"
                defaultChecked={values.nursery}
                value={values.nursery}
                onChange={handleChange('nursery')}
            /><span> Attended nursery school </span>
        </label><br/>
        <label>
            <input className='input-field' type="checkbox"
                defaultChecked={values.higher}
                value={values.higher}
                onChange={handleChange('higher')}
            /><span> Wants to take higher education</span>
        </label><br/>
        <label>
            <input className='input-field' type="checkbox"
                defaultChecked={values.internet}
                value={values.internet}
                onChange={handleChange('internet')}
            /><span> Internet access at home</span>
        </label><br/>
        <label>
            <input className='input-field' type="checkbox"
                defaultChecked={values.romantic}
                value={values.romantic}
                onChange={handleChange('romantic')}
            /><span> With a romantic relationship</span>
        </label><br/>
        <label><span> Quality of family relationship (1 - very bad to 5 - excellent)</span>
            <input className='input-field' type="number"
                min={1}
                max={5}
                value={values.famrel}
                onChange={handleChange('famrel')}
            /> 
        </label><br/>
        <label><span> Free time after school (1 - very bad to 5 - excellent)</span>
            <input className='input-field' type="number"
                min={1}
                max={5}
                value={values.freetime}
                onChange={handleChange('freetime')}
            /> 
        </label><br/>
        <label><span> Going out with friends (1 - very bad to 5 - excellent)</span>
            <input className='input-field' type="number"
                min={1}
                max={5}
                value={values.goout}
                onChange={handleChange('goout')}
            /> 
        </label><br/>
        <label><span> Workday alcohol consumption (1 - very bad to 5 - excellent)</span>
            <input className='input-field' type="number"
                min={1}
                max={5}
                value={values.Dalc}
                onChange={handleChange('Dalc')}
            /> 
        </label><br/>
        <label><span> Weekend alcohol consumption (1 - very bad to 5 - excellent)</span>
            <input className='input-field' type="number"
                min={1}
                max={5}
                value={values.Walc}
                onChange={handleChange('Walc')}
            /> 
        </label><br/>
        <label><span> Current health status (1 - very bad to 5 - excellent)</span>
            <input className='input-field' type="number"
                min={1}
                max={5}
                value={values.health}
                onChange={handleChange('health')}
            /> 
        </label><br/>
        <label><span> Number of school absences (from 0 to 93)</span>
            <input className='input-field' type="number"
                min={0}
                max={93}
                value={values.absences}
                onChange={handleChange('absences')}
            /> 
        </label><br/>
        <button onClick={ Previous }>Previous</button>
        <button onClick={ Continue }>Next</button>
    </ div>
    )
}