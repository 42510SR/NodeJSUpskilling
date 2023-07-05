//Shallow Copy - Shallow copying creates a new reference to the existing objects or values and doesn’t create a deep copy, 
//which means that nested objects are still referenced, not duplicated.

//Example 1

let emp = {
    "name":"Shagun",
    "age":23,
    "Subjects":[
        {
        "Mathematics":300,
        "Science": 250
        },
        {
            "Computers": 350
        }
    ]
}

let shallowCopy = {...emp}; // object.assign()

console.log(shallowCopy);
console.log(shallowCopy.name);
console.log(shallowCopy.age);
console.log(shallowCopy.Subjects);
console.log(shallowCopy===emp); //false
console.log(shallowCopy.name==emp.name); //true
console.log(shallowCopy.Subjects=== emp.Subjects); //true

// But let’s look at what is really in shallowCopy. The properties name and age are primitive values (string), 
// so their values are copied. However, the subjects property is an array of objects, so the reference to that array is copied,
//  not the array itself.

//Deep Copy - Deep copying is a technique that creates a new object, which is an exact copy of an existing object. 
//This includes copying all its properties and any nested objects, instead of references. 
//Deep cloning is helpful when you need two separate objects that don’t share references, ensuring changes to one object don’t affect the other.

const playerProfile = {
    name: 'Alice',
    level: 10,
    achievements: [
      {
        title: 'Fast Learner',
        emoji: '1'
      },
      {
        title: 'Treasure Hunter',
        emoji: '2'
      }
    ]
  };
  
  function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  const clonedProfile = deepCopy(playerProfile);
  
  console.log(clonedProfile);
  /* Output:
  {
    name: 'Alice',
    level: 10,
    achievements: [
      {
        title: 'Fast Learner',
        emoji: '1'
      },
      {
        title: 'Treasure Hunter',
        emoji: '2'
      }
    ]
  }
  */
  
  // Modify the cloned profile without affecting the original profile
  clonedProfile.achievements.push({ title: 'Marathon Runner', emoji: '3' });
  console.log(playerProfile.achievements.length); //  2
  console.log(clonedProfile.achievements.length); //  3
  