import React from 'react';
import {fetchEmployeeData, saveEmployeeData, getEmpId} from '../Service/Services';
import store from '../Data/Store';
import {withRouter} from 'react-router-dom';


class EmployeeForm extends React.PureComponent{
    
    constructor(props){
        super();
        this.empName = React.createRef();
        this.empSalary = React.createRef();
        this.empAge = React.createRef();
        this.empImage = React.createRef();
    }

    componentDidMount(){
        fetchEmployeeData();
    }

    saveEmployeeDetails =  (event) => {
        event.preventDefault();
        const empList = store.getEmployeeData();
        const id = getEmpId();
        const empData = {
            id,
            employee_name: this.empName.current.value,
            employee_age: this.empAge.current.value,
            employee_salary: this.empSalary.current.value,
            employee_image: ""
        };
        saveEmployeeData(empData);
        this.props.history.push('/employeelist'); 
       
    }


    
    render(){
        return (
            <div className="form-container">
                <form className = "form" onSubmit =  {this.saveEmployeeDetails}>
                    <label htmlFor="empname">Employee Name: </label>
                        <input required type="input" id="empname" ref={this.empName} placeholder="Employee Name"/>
                    <label htmlFor="salary">Salary: </label>
                        <input required type="input" id="salary" ref={this.empSalary} placeholder="Salary"/>
                    <label htmlFor="age">Age: </label>
                        <input required type="input" id="age" ref={this.empAge} placeholder="Age"/>
                    <label htmlFor="image">Upload Image: </label>
                        <input type="file" id="image" ref={this.empImage} placeholder="Image"/>
                        <input type="submit" value ="SUBMIT"></input>
                </form>
                
            </div>
            
        )
    }
}

export default withRouter(EmployeeForm);