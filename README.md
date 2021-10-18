## find-filter.js

find-filter.js filters array of object with few lines of codes. It is scalable, light weight and very easy to use

## Description
find-filter.js is a light weight, plain javascript package that can be used to filter large array of object.
Has no any library, hence very fast.

It can be used for a simple array of objects as well as complex ones

## Installation
`npm i fine-filter --save`

## Usage
...
    
    import find from "fine-filter";
...

fine-filter accept an object that has a total of 5 properties out of which only one is compulsary.

1. data: 
    * data accepts only an array of object.
    * It is compulsary

3. keys: 
    * keys accepts an array or a function that returns an array of strings of properties you are searching for from the object
    * Only the properties specified can be searched for
    * If no keys specified, the function search through the paths (seen below) for the object path, if non found, all the keys will be up to search through
    * It is not specific, if a "name" is specified as a key to filter, all other name in the object will be use to filter the object as well
    * Optioanl

3. paths: 
    * paths accepts an object of array(s) of the paths from the object you are searching or accepts a function that returns same thing
    * In this paths, you can customize exactly what you want to allow your client to filter only the keys by setting the paths explicitly
    * Optional.

4. input:
    * accepts a string or a function that returns a string of the values you are searching from the array

5. cb:
    * accepts a callback that receives 2 arguments.
    * The first returns the filtered array
    * Second returns error if not null
    * not compulsary property but neccessary to view the filtered data

## Example codes

##  Simple 

...
   
    import fine-filter from "fine-filter"

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
...


...

    fine-filter({

       data: arrayObj,
       keys: [ "name", "email" ],
       input: "example4@gmail.com",
       cb: (data, err)=>{
           if(err){
               console.log(err)
           }else{
               console.log(data)
           }
       }
   })
    
    /*
        {
            id: "3",
            name: "name3",
            product: "product3",
            email: "example4@gmail.com"
        }
    */

    // the object can be filtered using name or email. If input value is empty string or not specified at all, all the object will be returned
...


### Using paths instead of keys

...

    fine-filter({

        data: arrayObj,
        paths: {
            name: [ "name", ],
            email: [ "email" ]
        },
        input: "example4@gmail.com",
        cb: (data, err)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }
        }

    })

    /*
        {
            id: "3",
            name: "name3",
            product: "product3",
            email: "example4@gmail.com"
        }
    */

    // the object can be filtered using name or email
...


## using callback

...

    fine-filter({

        data: arrayObj,
        paths: ()=>{
            return {
                name: [ "name", ],
                email: [ "email" ]
            }
        },
        input: "example4@gmail.com",
        cb: (data, err)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }
        }

    })
        
    /*
        {
            id: "3",
            name: "name3",
            product: "product3",
            email: "example4@gmail.com"
        },
    */

    // the object can be filtered using name or email
...


## more complex
paths is more important when filtering complex object

...

    const data = [
        {
            id:1,
            name: "phones",
            location: "US",
            types:[
                {
                    id: 1,
                    name: "iPhone",
                    colors: ["pink", "red"]
                },
                {
                    id: 2,
                    name: "Infinix",
                    colors: ["brown", "black"]
                }
            ]
        },

        {
            id: 2,
            name: "cars",
            location: "France",
            types:[
                {
                    id: 1,
                    name: "Renault",
                    colors: ["green", "gray"]
                },
                {
                    id: 2,
                    name: "Bugatti",
                    colors: ["white", "black"]
                }
            ]
        },
    
        {
            id:3,
            name: "phones",
            location: "Nigeria",
            types:[
                {
                    id: 1,
                    name: "iPhone",
                    colors: ["yellow", "orange"]
                },
                {
                    id: 2,
                    name: "Infinix",
                    colors: ["gold", "dark blue"]
                }
            ]
        },
    ]
...


## filtering using name using keys

in this situation, "phones", "cars", "iPhone", "infinix" can be used to filter the object

...

    fine-filter({

        data: data,
        keys: ()=>{
            return [ "name ]
        }
        input: "iPhone",
        cb: (data, err)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }
        }

    })


    /* 
        {
            id:1,
            name: "phones",
            location: "US",
            types:[
                {
                    id: 1,
                    name: "iPhone",
                    colors: ["pink", "red"]
                },
                {
                    id: 2,
                    name: "Infinix",
                    colors: ["brown", "black"]
                }
            ]
        },
        {
            id:3,
            name: "phones",
            location: "Nigeria",
            types:[
                {
                    id: 1,
                    name: "iPhone",
                    colors: ["yellow", "orange"]
                },
                {
                    id: 2,
                    name: "Infinix",
                    colors: ["gold", "dark blue"]
                }
            ]
        }

    */
...


...

    fine-filter({

        data: data,
        keys: ()=>{
            return [ "name ]
        }
        input: "cars",
        cb: (data, err)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }
        }

    })

    /*
        {
            id: 2,
            name: "cars",
            location: "France",
            types:[
                {
                    id: 1,
                    name: "Renault",
                    colors: ["green", "gray"]
                },
                {
                    id: 2,
                    name: "Bugatti",
                    colors: ["white", "black"]
                }
            ]
        },

    */
...


## using paths to filter the object with a specific key

...

    fine-filter({

        data: data,
        paths: {
            phoneName: ["types", "0", "name"]
        }
        input: "iPhone",
        cb: (data, err)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }
        }

    })

    /*
        id:1,
            name: "phones",
            location: "US",
            types:[
                {
                    id: 1,
                    name: "iPhone",
                    colors: ["pink", "red"]
                },
                {
                    id: 2,
                    name: "Infinix",
                    colors: ["brown", "black"]
                }
            ]
        }, 
        {
            id:3,
            name: "phones",
            location: "Nigeria",
            types:[
                {
                    id: 1,
                    name: "iPhone",
                    colors: ["yellow", "orange"]
                },
                {
                    id: 2,
                    name: "Infinix",
                    colors: ["gold", "dark blue"]
                }
            ]
        },
    */

    // the paths is directed to the 2nd ordered name, types.0.name, meaning name at index 0 of type
    // if i tried to search for car, it will return empty array

...

...

    fine-filter({

        data: data,
        paths: {
            phoneName: ["types", "0", "name"]
        }
        input: "car",
        cb: (data, err)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }
        }

    })

    /*
        []

    */
...

## Using keys and paths together
if you want to open a search and close th others.
For examples

* Searching the object using name, cars, phones, iPhone etc, specify "name" in keys
* At the same, you want your client to search for colors in only index 1 of all the collections, specify the paths that lead to the "colors" in paths [ "types", "0", "colors" ]

...

    fine-filter({

        data: data,
        keys: [ "name" ]
        paths: {
            colors: ["types", "0", "colors"]
        }
        input: "colors",
        cb: (data, err)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }
        }
    })

    /*
        you can defined as many paths as you want
        the properties can be named anything

    */
...


...

    fine-filter({

        data: data,
        keys: [ "name", "id ]
        paths: {
            colors: ["types", "0", "colors"]
        }
        input: "1",
        cb: (data, err)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }
        }
    })
...


...

    fine-filter({

        data: data,
        keys: [ "id", "location" ]
        paths: {
            colors: ["types", "0", "colors"],
            colors: ["types", "1", "colors"],
            colors: ["types", "1", "name"],
        }
        input: "dark blue",
        cb: (data, err)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }
        }
    })
...



