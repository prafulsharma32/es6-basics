// labset-1(a)
const numbers = [5, 7, 2];
// numbers.push(6);
// numbers.push(8);
numbers.pop(2);
//  labset-1(b)
let area=(radius=1) => 3.14*radius*radius;
 
// labset-2
function avg(...arr)
    { let sum=0;
        var i;
        var avg;
        for(i=0;i<arr.length;i++)
        sum=sum+arr[i];
        avg=sum/arr.length;
        return avg;
    }
    // labset-3(A)

    const person = {
        name: "john",
        age: 34,
        city: "jaipur"
     };
     const{name:Name,age:Age,city:City}=person;
 
  console.log(Name,Age,City);  

// labset-3(B)
const person1 = {
    name: "john",
    age: 34,
    city: "jaipur"
 };
 const superhero={
     ...person1,superpower:"thunderbolts"
 };
 
// labset-4(A)
// labset-4(B)
import{Animal} from './animal.js';
const lion=new Animal("roar");
console.log(lion.getVoice());








