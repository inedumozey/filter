## find-filter.js

find-filter.js filters array of object with few lines of codes. It is scalable, light weight and very easy to use

## Description
find-filter.js is a light weight, plain javascript package that can be used to filter large array of object.
Has no any library, hence very fast.

## Installation
`npm i find-filter --save`

## Usage
...
    
    import find from "find";
...

find is a function that receives 4 compulsory arguments.
1. An array of the object you want to filter
2. An array containing string or strings of properties or keys in the object you want to filter the array with
3. a string a number you want to use and filter the object with
4. a callback that receives 2 arguments.
    * The first returns the filtered array
    * Second returns error if not null

## Example codes
...
   
    import find from "find"

    const arrayObj = [
        {
            id: "1",
            name: "name1",
            product: "product1",
            email: "example1@gmail.com"
        },
        {
            id: "2",
            name: "name2",
            product: "product2",
            email: "example2@gmail.com"
        },
        {
            id: "3",
            name: "name3",
            product: "product3",
            email: "example3@gmail.com"
        },
        {
            id: "3",
            name: "name3",
            product: "product3",
            email: "example4@gmail.com"
        }
    ]

    const val = "name3"

    find(arrayObj, ["name", "email", "product"], val, (data, err)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    })

    // val is the value from search input, which in this case, input value is name3
    // we are trying to direct the users to filter by name, email, product
    // Above, we are trying to find name3 in the arrayObj


    //results. Two objects with the name "name3" were found and returned
    
    /*
        {
            id: "3",
            name: "name3",
            product: "product3",
            email: "example3@gmail.com"
        },
        {
            id: "3",
            name: "name3",
            product: "product3",
            email: "example4@gmail.com"
        }
    */

    // if input value is empty string, all the object will be returned

...

### Limitations
fine.js cannot do deep object filtering for now. This feature comes very soon.

_Thank you..._
