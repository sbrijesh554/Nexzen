import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './component/ErrorBoundary';
import EmployeeForm from './component/EmployeeForm.jsx';
import EmployeeList from './component/EmployeeList.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


ReactDOM.render(
         <BrowserRouter>
            <Switch>
               <Route exact path="/" render={()=>(
                  <ErrorBoundary>
                     <EmployeeForm/>
                  </ErrorBoundary>
                  )}/>
               
               <Route path="/employeelist" render={()=>(
                  <ErrorBoundary>
                     <EmployeeList/>
                  </ErrorBoundary>
               )}/>
            </Switch>
         </BrowserRouter>,
         document.getElementById("container")
);