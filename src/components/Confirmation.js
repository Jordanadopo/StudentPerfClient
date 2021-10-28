
export const Confirmation = ({ prevStep, nextStep, values, adaptValues })=>{
    
    const Continue = e => {
        e.preventDefault();
        Object.keys(values).map(function(key) {
            values[key] = transformData(values[key]);
            return values[key];
        });
        adaptValues(values);
        nextStep();
    }
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const transformData = (argument) => {
        if (parseInt(argument)) {
          return parseInt(argument)
        }
        if (argument === true) {
          return 'yes'
        }
        if (argument === false) {
          return 'no'
        }
        
        return argument
      }

    
    return (
        <div className='form-style'>
            <h3>Confirm the student's information your provide before prediction</h3>
        
            {Object.keys(values).map(function(key) { return <label key={key}><span>{key}: </span> {transformData(values[key])}</label>; })}
            
            <button onClick={ Previous }>Previous</button>
            <button className='submit' onClick={ Continue }>Next</button>        
        </div>
    )
}