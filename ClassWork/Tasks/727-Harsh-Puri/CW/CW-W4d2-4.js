//Advance Array operaations 
//1. removing operations from arrays
//Method 1 : using filter() - non-distructive
console.log("\tMethod 1:\n")
const numbers = [15,52,69,8,3,19,22,4]
const remove =8;
const without8 = numbers.filter( num => num!== remove )
console.log("Arrays: "+numbers)
console.log("Arrays: "+without8)

//Method 2 : using splice(() - distructive method -- removing value at 5
console.log("\n\tMethod 2:\n")
const arr = [15,52,69,8,3,19,22,4]
console.log("Array before removal : "+arr)
 arr.splice(5,1)
 console.log("Array after removal : "+ arr )

//Method 3 : removing by value

console.log("\n\tMethod 3:\n")

function removingByValue(arr,value){
    return arr.filter(item => item !== value)
}
    const fruits = [ "Chili" , "berry" , "apple" , "tomaato"  ]

    console.log("Fruits before removal : ",fruits)
  const newfruit=  removingByValue(fruits , "Chili") 
    console.log("Array after removal 'Chili' : ", newfruit )

//Method 4 : removing first occurence
console.log("\n\tMethod 4:\n")
function removingFirstOccursion(arr , value){
    const idx = arr.indexOf(value)
      if( idx > -1 ){
           
            return [...arr.slice(0,idx) , ...arr.slice(idx+1)];
        }
        return arr;

}

const fruits2 = [ "Chili" , "berry" , "apple" , "tomaato"  ]

    console.log("Fruits before removal : ",fruits2)
    
    console.log("Array after removal 'Chili' : ")
console.log(removingFirstOccursion(fruits2 , "Chili" ))

//2. merging arrays
//Method 1: using cancat()
//Method 2: spread operator
//Method 3: using multiple arrays

//3. removing duplicates
//Method 1: using set
//Method 2: using filter()
//Method 3: using reduce()

//4. sorting arrays
//numeric sorting
//Reverse order sorting
//string sorting
// case insensitive

//5. sorting objectss
//sort by property
//sort in ascending order (numbers)
//sort by name
