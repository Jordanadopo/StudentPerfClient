import { Component } from "react";
import { School } from "./School";
import { PersonalDetails } from "./PersonalDetails";
import { FamilySituation } from "./FamilySituation";
import { Divers } from "./Divers";
import { Marks } from "./Marks";
import { Confirmation } from "./Confirmation";
import { Result } from "./Result";




export default class StudentForm extends Component{



    state = {
        step: 1,
        //school name
        school : 'GP',
        //personal details
        sex : 'M',
        age: 15,
        address : 'U',
        //family situation
        famsize : 'LE3',
        Pstatus : 'T',
        Medu : 0,
        Fedu : 0,
        Mjob : 'other',
        Fjob : 'other',
        //divers
        reason : 'other',
        guardian : 'other',
        traveltime : 1,
        studytime : 1,
        failures : 0,
        schoolsup : true,
        famsup : true,
        paid : true,
        activities : true,
        nursery : true,
        higher: true,
        internet : true,
        romantic : true,
        famrel : 1,
        freetime : 1,
        goout : 1,
        Dalc : 1,
        Walc : 1,
        health : 1,
        absences : 0,
        //year's marks
        G1 : 0,
        G2 : 0
    }


    //proceed to previous step
     prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }
    
    //proceed to next step
     nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }
    
    // handle fields change
     handleChange = input => e => {
        this.setState({ [input]: e.target.value })
        if (['schoolsup','famsup','paid','activities','nursery','higher','internet','romantic'].indexOf(input)!==-1) {
            this.setState({ [input]: this.toggleBool(this.state[input]) })
        }

    };

    toggleBool = (val)=>{
        if (typeof(val)==='boolean'){
            return !val
        }
        if (val === 'true') {
            return false
        }
        if (val === 'false') {
            return true
        }
    }


    render(){
    

    const { step } = this.state;

    const {
        school, sex, age, address, famsize, Pstatus, Medu, Fedu, Mjob, Fjob, reason, guardian, traveltime, studytime, failures, schoolsup, famsup, paid, activities, nursery, higher, internet, romantic, famrel, freetime, goout, Dalc, Walc, health, absences, G1, G2 
    } = this.state;

    const values =  {
        school, sex, age, address, famsize, Pstatus, Medu, Fedu, Mjob, Fjob, reason, guardian, traveltime, studytime, failures, schoolsup, famsup, paid, activities, nursery, higher, internet, romantic, famrel, freetime, goout, Dalc, Walc, health, absences, G1, G2 
    } 


    const setVals = (val)=>{
        this.setState({...val})
    }

    const reset = ()=>{
        this.setState({step : 1})
    }



    switch (step) {
        case 1:
            return (
                <School 
                    nextStep = { this.nextStep }
                    handleChange = { this.handleChange }
                    values = { values }
                />
            )

        case 2:
            return (
                <PersonalDetails 
                    prevStep = { this.prevStep }
                    nextStep = { this.nextStep }
                    handleChange = { this.handleChange }
                    values = { values }
                />
            )

        case 3:
            return (
                <FamilySituation 
                    prevStep = { this.prevStep }
                    nextStep = { this.nextStep }
                    handleChange = { this.handleChange }
                    values = { values }
                />
            )

        case 4:
            return (
                <Divers 
                    prevStep = { this.prevStep }
                    nextStep = { this.nextStep }
                    handleChange = { this.handleChange }
                    values = { values }
                />
            )
    
        case 5:
            return (
                <Marks 
                    prevStep = { this.prevStep }
                    nextStep = { this.nextStep }
                    handleChange = { this.handleChange }
                    values = { values }
                />
            )

        case 6:
            return (
                <Confirmation 
                    prevStep = { this.prevStep }
                    nextStep = { this.nextStep }
                    values = { values }
                    adaptValues = { setVals}
                />
            )

        case 7:
            return (
                <Result
                values = {values}
                reset = {reset} />
            )
    
        default:

    }
};
}