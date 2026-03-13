//Program to remove specific array from  an array
//Method 1 : using slice() with manual index search
    function removeByValue(arr , value){
        //Finding index of value
        const idx= arr.indexOf(value);
        //if index is found remove it using slice()
            if( idx > -1){
                arr.splice(idx, 1 );
                console.log(`Remove "${value}" at index '${idx}' `)
                return true;
            }
            else{ console.log(` "${value}" not found`)
                 return false
                }

    }

    function removeByIndex(arr,idx){
        if( idx >=0 && idx< arr.length ){
            const removed = arr.splice(idx,1)
             console.log(`Removed element at  "${idx}" : '${removed[0]}' `)
            return true 
        }
        else{
            console.log(` "${value}" not found`)
            return false

            }

    }


let fruits = ["apple" , "orange" , "mango" , "grape" , "banana"];
    console.log(fruits)

removeByValue (fruits,"apple");
removeByIndex(fruits, 3);