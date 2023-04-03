let customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };

  console.log(customer1);
  console.log(customer2);

  customer1.lastName = 'Faria';
  //OU
  customer2['lastName'] = 'Silva';


  console.log(customer1);
  console.log(customer2);