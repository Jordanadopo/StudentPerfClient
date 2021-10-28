export const School = ({ nextStep, handleChange, values })=>{
    
    const Continue = e => {
        e.preventDefault();
        nextStep();
      }

    return(
    <div className='form-style'>
        <h3> We notice that you're there in order to predict a student performance (if pass or fail), so :</h3>

        <label><span> What is the school of the student ?</span>
            <select className='select-field' value={values.school} onChange={handleChange('school')} >
                <option>--select school--</option> 
                <option value='GP'>Gabriel Pereira</option>
                <option value='MS'>Mousinho da Silveira</option>
            </select>
        </label><br/>
        {/* <label><span> What is the course subject ?</span>
            <select className='select-field' value={values.course} onChange={handleChange('course')} >
                <option>--select course--</option> 
                <option value='por'>Portuguese</option>
                <option value='mat'>Mathematics</option>
            </select>
        </label><br/> */}
        <button onClick={ Continue }>Next</button>
    </div>
    )
}