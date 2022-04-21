import employees from "../data/employees.json";
export const EmployeesList = (props) => {

  const title = props.userIsExternal
    ? "Please meet our team"
    : "Summer picnic in May 15";
return(
    <>
    <p>{title}</p>
    
  {employees.map((employee,index) => {
    return (
      <div key={index} className="employee">

      <p className="employee-name">  {employee.firstName} {employee.lastName}</p>
      <p className="employee-title">{employee.title}</p>
      {props.userIsExternal? "":<p>{employee.notes}</p>}
      </div>
    );
  })}
  
  </>
);
};
