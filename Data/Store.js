class Store{
    constructor(){
        this.key = "employees";
        localStorage.removeItem(this.key);
    }

    setEmployeeData = (employeedata) => {
       localStorage.setItem(this.key, JSON.stringify(employeedata));
    }

    getEmployeeData = () => JSON.parse(localStorage.getItem(this.key));
    
}

const store = new Store();

Object.freeze(store);

export default store;