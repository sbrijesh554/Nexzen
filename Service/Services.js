import axios from 'axios';
import {BASE_URL, ID} from '../config/constants';
import store from '../Data/Store';

export const fetchEmployeeData = () => {
    if(!store.getEmployeeData()){
        axios.get(BASE_URL).then((resp)=>{
            store.setEmployeeData(resp.data);
           setEmpId(resp.data[resp.data.length - 1].id);
        }).catch((err)=>{
            throw err;
        })
    }
}

export const saveEmployeeData = (empData) => {
    let tempEmployeeData = store.getEmployeeData();
    tempEmployeeData.push(empData);
    store.setEmployeeData(tempEmployeeData);
}
const setEmpId = (id)=>{
     ID.empId = id;
}
export const getEmpId = ()=>{
    return ++ID.empId;
}
