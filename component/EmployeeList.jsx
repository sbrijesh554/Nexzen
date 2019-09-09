import React from 'react';
import store from '../Data/Store';

export default class EmployeeList extends React.Component{
    constructor(props){
        super();
        this.state = {
            employeeData: null
        }
    }

    componentDidMount(){
        const employeeData = store.getEmployeeData();
        this.setState({
            employeeData
        })
    }

    render(){
        return(
            <section>
                {
                this.state.employeeData?
                    (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Employee Name</th>
                                <th>Employee Salary</th>
                                <th>Employee Age</th>
                                <th>Employee Pic</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employeeData.map((empData,index)=>{
                                
                                    return (
                                    <tr key = {index}>
                                        <td>{empData.id}</td>
                                        <td>{empData.employee_name}</td>
                                        <td>{empData.employee_salary}</td>
                                        <td>{empData.employee_age}</td>
                                        <td>{empData.employee_image}</td>
                                    </tr>
                                    )
                            })
                            }
                        </tbody>
                    </table>
                    )
                    :
                    <p style={{textAlign: 'center'}}>No Record found</p>
                        }
            </section>
        )
    }
}