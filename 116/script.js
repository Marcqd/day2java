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
 

  const fullName = getFullName(users[1]);
  console.log(fullName);
  const largerNumber = getLargerNumber(salaryList[0],salaryList[2]);
  console.log(largerNumber);

