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
console.log(salaryList[1]);
console.log(salaryList[1].salary);

function getFullName(user){
  return users.firstName + ' ' + user.lastName;
  };
  const fullName = getFullName(users[1]);
  console.log(fullName);