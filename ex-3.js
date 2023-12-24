// Exercise #3 Debugging

// Start coding here
const Employee =  
{ 
    Name: "John Doe", 
    Age: 18, 
    Address:  
    { 
      street: "123 Main Street", 
      city: "Cityville", 
      states: "Stateville", 
      country: "Countryland", 
      postalCode: "12345", 
    }, 
}; 
console.log("Employee Name: " + Employee.Name); 
console.log("Employee Age: " + Employee.Age); 
console.log("Employee Address: " + Employee.Address.street + ", " + 
Employee.Address.city + ", " + Employee.Address.states + ", " + 
Employee.Address.country + ", " + Employee.Address.postalCode); 