/*const users =[
  {
    userId:1234,
    firstName:"Ashlyn",
    lastName:"Knox",
    isActive:true,
  }
  console.log(`First name is ${firstName}`)
  console.log(users[1].firstName, users[2].lastName);
  */


const users = [
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
console.log(users[1].firstName);

const salaryList = [
  {salary:3000},
  {salary:6000},
  {salary:4600},
];
//console.log(salaryList[1]);
//console.log(salaryList[1].salary);

function getFullName(user){
  return user.firstName + ' ' + user.lastName;
  };
function getLargerNumber(a,b){
  if (a.salary>b.salary)
  {    return a.salary;  }
  else {return b.salary;}
}
 

  const fullName = getFullName(users[1]);
  console.log(fullName);
  const largerNumber = getLargerNumber(salaryList[0],salaryList[2]);
  console.log(largerNumber);

