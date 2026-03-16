//Advance Array operaations 
//1. removing operations from arrays

console.log("\t ===== Element removing =====\n")

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
console.log("\t ===== Array Merging =====\n")
const arr1 = [34,56,86]
const arr2 = [60,22,92] 

//Method 1: using cancat()
console.log("\tMethod 1: Concat\n")
const merged =arr.concat(arr2)
    console.log("Array 1 before merge : ",arr1)
    console.log("Array 2 before merge : ",arr2)
    console.log("Array  After merge : ",merged)


//Method 2: spread operator
console.log("\n\tMethod 2: spread operator \n")
const merged2 = [...arr1,...arr2]

    console.log("Array 1 before merge : ",arr1)
    console.log("Array 2 before merge : ",arr2)
    console.log("Array  After merge 2: ",merged2)


//Method 3: using multiple arrays

console.log("\n\tMethod 3: using multiple array \n")
const merged3 = [...arr1,...arr2 , ...[23,44,55,78,54,32]]

    console.log("Array 1 before merge : ",arr1)
    console.log("Array 2 before merge : ",arr2)
    console.log("Array  After merge 3 : ",merged3)


//3. removing duplicates
    console.log("\t ===== Removing Duplicates =====\n")
    const nums = [1,2,8,4,1,2,7,8,9]

//Method 1: using set
console.log("\n\tMethod 1: using Set \n")
    const uniqueSet = new Set(nums)
    const uniqueArr  = [...uniqueSet]

        console.log("Orignal Array : ",nums)
        console.log("Array with unique Value : ",uniqueArr)
        const newUnique = [...new Set(nums)]
        
        console.log("New Unique Arra : ",newUnique)


//Method 2: using filter()
        console.log("\n\tMethod 2: using filter() \n")

 const  unq = nums.filter((number,idx ) => nums.indexOf(number) == idx  )

        console.log("Orignal Array : ",nums) 
        console.log("Array with unique Value  by filter: ",unq)

 //Method 3: using reduce()
        console.log("\n\tMethod 3: using reduce() \n")
        const rd_unique =  nums.reduce( ( acc,num )=>  {
            if(!acc.includes(num)){
        acc.push()
            }
            return acc
    }, [] )
        console.log("Orignal Array : ",nums) 
        console.log("Array with unique Value  by reduce: ",rd_unique)

//4. sorting arrays
     console.log("\t ===== Sorting Arrays =====\n")
//numeric sorting
    console.log("\n\tMethod 1: using sort() \n")

    const OG_Arr = [23,45,49,42,13,53,66]
    const SORTED = [...OG_Arr].sort((a,b)=> a-b)

     console.log("Orignal Array : ",OG_Arr) 
        console.log("Array with unique Value  by  Sort(): ",SORTED) 

//Reverse order sorting
     console.log("\n\tMethod 2: using sort() for descending \n")

    const Des_Num = [23,45,49,42,13,53,66]
    const Des_Sorted = [...Des_Num].sort((a,b)=> b-a)

        console.log("Orignal Array : ",Des_Num) 
        console.log("Array with reverse sort() ",Des_Sorted)

//string sorting
     console.log("\n\tMethod 3:  sort() Strings (Alphabet) \n")
    const OG_veggie = ["Potato", "apple", "mango" , "Cabbage", "Bringle","Apple" ,'PoTaTO']

       console.log("Orignal Array : ",OG_veggie) 
       const Sort_Veggie = OG_veggie.sort()
       console.log("Veggie Sort : ",Sort_Veggie)

// case insensitive
    const sortedVeggieIC =  OG_veggie.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))     
    console.log("Sorted veggies using localeCompare(): Case insensitive: ", sortedVeggieIC)
    const sortedVeggieNOIC = OG_veggie.sort((a,b) => a.localeCompare(b))    
    console.log("Sorted veggies using localeCompare(): Case sensitive :", sortedVeggieNOIC)

//5. sorting objectss
const students = [
    {name:"Ronin" , marks:78},
    {name:"Zoro" , marks:34},
    {name:"Batman" , marks:85},
    {name:"Franky" , marks:24},
    {name:"Robin" , marks:91},

]
//sort by property

//sort in ascending order (numbers)
const byMarks =students.sort((a,b) =>b.marks-a.marks)
console.log("sorted object by  makrs: ",byMarks)
//sort by name
const byName = students.sort((a,b)=> a.name.localeCompare(b.name))
console.log("sorted object by  name: ",byName)