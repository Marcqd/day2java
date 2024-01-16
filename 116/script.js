//variables declaration 
const users = 
[
    {userId:1,
      firstName:"Janet",
      lastName:'Delton',
    },
    {userId:2,
      firstName:'Judy',
      lastName:'Lisle',      
    },
    {useId:3,
    firstName:'Brian S.',
    lastName:'Peterson',
    },
];
const salaryList = 
[
  {salary:3000},
  {salary:6000},
  {salary:4600},
];
//function declaration
function getFullName(user){
  return user.firstName + ' ' + user.lastName;};
function getLargerNumber(a,b){
  if (a.salary>b.salary)
  {    return a.salary;  }
  else {return b.salary;}}

//define variables for the results
  const fullName = getFullName(users[1]);
  const largerNumber = getLargerNumber(salaryList[0],salaryList[2]);
//output the results
  console.log(fullName);
  console.log(largerNumber);

