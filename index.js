let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee, [key]: value };
    console.log("Updated employee with key-value pair:", updatedEmployee);
    return updatedEmployee;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    console.log("Destructively updated employee:", employee);
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    console.log("New employee after deleting key:", newEmployee);
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    console.log("Employee after destructively deleting key:", employee);
    return employee;
  }
  
  // Use it like this:

  console.log("Initial employee:", employee);
  
  updateEmployeeWithKeyAndValue(employee, "age", 30);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  
  deleteFromEmployeeByKey(employee, "name");
  
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");